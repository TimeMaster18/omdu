using Newtonsoft.Json;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace OmduLobby
{
    public class LobbyWebSocketBehaviour : WebSocketBehavior
    {
        private static readonly List<LobbyWebSocketBehaviour> instances = new();
        public LobbyWebSocketBehaviour()
        {
            instances.Add(this);
        }
        ~LobbyWebSocketBehaviour()
        {
            instances.Remove(this);
        }

        protected override void OnOpen()
        {
            Logger.LogInfo("Opened connection " + ID);

            int? slot = Lobby.Singleton.ReservePlayerSlot(ID);
            if (!slot.HasValue)
            {
                // Lobby is full, don't allow new players to join
                Logger.LogWarning("Player rejected (full)");
                Sessions.CloseSession(ID);
            }
            else
            {
                // Let the connection know which player slot was assigned to them
                SendPlayerSlotAssignment(slot.Value);

                // Get the new connection up to speed with the current state of the lobby
                BroadcastLobbyUpdate();
            }
        }

        protected override void OnMessage(MessageEventArgs e)
        {
            Logger.LogDebug("Message received from " + ID + " " + e.Data);

            WebSocketMessage? data = JsonConvert.DeserializeObject<WebSocketMessage>(e.Data);
            if (!data.HasValue)
            {
                Logger.LogWarning("Message invalid (null)");
                return;
            }
            WebSocketMessage message = data.Value;

            if (message.Type == "update-battleground")
            {
                Lobby.Singleton.BattlegroundId = int.Parse(message.Value);
            }
            else if (message.Type == "update-loadout")
            {
                Lobby.Singleton.UpdatePlayerLoadout(ID, message.Value);
            }
            else
            {
                Logger.LogWarning("Message invalid (unknown)");
                return;
            }

            BroadcastLobbyUpdate();
        }

        protected override void OnClose(CloseEventArgs e)
        {
            Logger.LogInfo("Closed connection " + ID);

            Lobby.Singleton.ReleasePlayerSlot(ID);

            BroadcastLobbyUpdate();
        }

        protected override void OnError(WebSocketSharp.ErrorEventArgs e)
        {
            Logger.LogError(e.Message);
        }

        /// <summary>
        /// Broadcast a message to all sessions connected to any LobbyWebSocketBehaviour.
        /// </summary>
        public static void BroadcastGlobally(string message)
        {
            foreach (var instance in instances)
            {
                instance.Sessions.Broadcast(message);
            }
        }

        private void SendPlayerSlotAssignment(int slot)
        {
            Send(JsonConvert.SerializeObject(new
            {
                type = "assigned-player-slot",
                playerSlot = slot,
            }));
        }

        private static void BroadcastLobbyUpdate()
        {
            BroadcastGlobally(JsonConvert.SerializeObject(new
            {
                type = "updated-lobby",
                lobby = Lobby.Singleton.GetData()
            }));
        }
    }
}
