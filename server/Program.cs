using System.Reflection;
using WebSocketSharp.Server;

namespace OmduLobby
{
    public class Program
    {
        public static string Version
        {
            get
            {
                Version? version = Assembly.GetExecutingAssembly().GetName().Version;
                if (version == null) return "version unknown";
                else return $"v{version.Major}.{version.Minor}.{version.Build}";
            }
        }

        static void Main(string[] args)
        {
            Console.Title = $"Orcs Must Read Unchained - Lobby {Version}";

            if (args.Any((argument) => argument == "server"))
            {
                // The lobby should be both available to the local machine, the internal network (in case VPNs get used) and the public network (in case port forwarding is used)
                WebSocketServer server = new($"ws://0.0.0.0:{Config.LobbyPort}");
                server.AddWebSocketService<LobbyWebSocketBehaviour>("/lobby");
                server.Start();
                Console.WriteLine($"Started ws://{server.Address}:{server.Port}/lobby");
            }
            else
            {
                // The proxy should only be available to the local machine (127.0.0.1)
                WebSocketServer proxyServer = new($"ws://127.0.0.1:{Config.ProxyPort}");
                ProxyWebSocketBehaviour proxyBehaviour = new();
                proxyServer.AddWebSocketService<ProxyWebSocketBehaviour>("/lobby");
                proxyServer.Start();
                Console.WriteLine($"Started ws://{proxyServer.Address}:{proxyServer.Port}/lobby");
            }

            // Todo: handle commands
            string? command;
            do
            {
                command = Console.ReadLine();
            } while (command != "stop");
        }
    }
}