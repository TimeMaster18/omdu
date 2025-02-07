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

        public bool HasPlayerSlot(string playerSessionId)
        {
            for (int i = 0; i < Players.Length; i++)
            {
                if (Players[i].SessionId == playerSessionId) return true;
            }

            return false;
        }

        public int? ReservePlayerSlot(string playerSessionId)
        {
            // Prevent users from taking up two slots
            if (HasPlayerSlot(playerSessionId)) return null;

            for (int i = 0; i < Players.Length; i++)
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