using WebSocketSharp.Server;

namespace OmduLobby
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.Title = "Orcs Must Read Unchained - Lobby";

            if (args.Any((argument) => argument == "server"))
            {
                // Ask the user for their server's internal ip
                Console.Write("Please enter your internal IPv4 address: ");

                string? ip = null;
                do
                {
                    ip = Console.ReadLine();
                } while (ip == null);

                // Set up two lobby listeners
                //  - A public listerer for other users
                //  - A local (127.0.0.1) listerer for the host
                WebSocketServer server = new($"ws://{ip}:7778");
                server.AddWebSocketService<LobbyWebSocketBehaviour>("/lobby");
                server.Start();
                Console.WriteLine($"Started ws://{server.Address}:{server.Port}/lobby");

                WebSocketServer proxyServer = new($"ws://127.0.0.1:7778");
                proxyServer.AddWebSocketService<LobbyWebSocketBehaviour>("/lobby-proxy");
                proxyServer.Start();
                Console.WriteLine($"Started ws://{proxyServer.Address}:{proxyServer.Port}/lobby-proxy");
            }
            else
            {
                // Set up proxy server
                WebSocketServer proxyServer = new($"ws://127.0.0.1:7778");
                proxyServer.AddWebSocketService<ProxyWebSocketBehaviour>("/lobby-proxy");
                proxyServer.Start();
                Console.WriteLine($"Started ws://{proxyServer.Address}:{proxyServer.Port}/lobby-proxy");
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