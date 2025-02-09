namespace OmduLobby
{
    public class Lobby
    {
        private Lobby() { }
        public static Lobby Singleton { get; private set; } = new Lobby();

        public struct Player
        {
            public Player() { }

            public string? SessionId = null;
            public string? Loadout = null;
        }

        public int? BattlegroundId { get; set; } = null;
        public Player[] Players { get; private set; } = new Player[5];

        /// <summary>
        /// Search for the slot that's reserved for a specific player
        /// </summary>
        private int? GetPlayerSlot(string playerSessionId)
        {
            for (int i = 0; i < Players.Length; i++)
            {
                if (Players[i].SessionId == playerSessionId) return i;
            }

            return null;
        }

        public int? ReserveHostPlayerSlot(string playerSessionId)
        {
            if (Players[0].SessionId != null) return null;

            Players[0].SessionId = playerSessionId;
            return 0;
        }

        public int? ReservePlayerSlot(string playerSessionId)
        {
            // Prevent a single connection from taking up two slots
            if (GetPlayerSlot(playerSessionId) != null) return null;

            // Exclude the host connection slot
            for (int i = 1; i < Players.Length; i++)
            {
                if (Players[i].SessionId != null) continue;

                Players[i].SessionId = playerSessionId;
                return i;
            }

            return null;
        }

        public void ReleasePlayerSlot(string playerSessionId)
        {
            for (int i = 0; i < Players.Length; i++)
            {
                if (Players[i].SessionId != playerSessionId) continue;

                Players[i].SessionId = null;
                Players[i].Loadout = null;
            }
        }

        public void UpdatePlayerLoadout(string playerSessionId, string loadoutCode)
        {
            for (int i = 0; i < Players.Length; i++)
            {
                if (Players[i].SessionId != playerSessionId) continue;

                Players[i].Loadout = loadoutCode;
                return;
            }
        }

        public dynamic GetData()
        {
            return new
            {
                battleground = BattlegroundId,
                loadouts = new string?[]
                {
                Players[0].Loadout,
                Players[1].Loadout,
                Players[2].Loadout,
                Players[3].Loadout,
                Players[4].Loadout
                }
            };
        }
    }
}