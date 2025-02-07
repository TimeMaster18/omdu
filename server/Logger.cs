namespace OmduLobby
{
    public static class Logger
    {
        public static void LogDebug(string message)
        {
            Log(message, "DEBUG", ConsoleColor.Gray);
        }

        public static void LogInfo(string message)
        {
            Log(message, "INFO", ConsoleColor.Cyan);
        }

        public static void LogWarning(string message)
        {
            Log(message, "WARNING", ConsoleColor.Yellow);
        }

        public static void LogError(string message)
        {
            Log(message, "ERROR", ConsoleColor.Red);
        }

        private static void Log(string message, string type, ConsoleColor color)
        {
            ConsoleColor previousColor = Console.ForegroundColor; // Save the current console color so it can be reverted later
            Console.ForegroundColor = color;
            Console.WriteLine($"[{DateTime.Now}] {type}: {message}");
            Console.ForegroundColor = previousColor; // Revert console color to original color
        }
    }
}
