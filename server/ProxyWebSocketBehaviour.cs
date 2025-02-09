using Newtonsoft.Json;
using WebSocketSharp;
using WebSocketSharp.Server;

namespace OmduLobby
{
    public class ProxyWebSocketBehaviour : WebSocketBehavior
    {
        private WebSocket? client = null;

        // Server -> Proxy events
        private void OnServerMessage(object? sender, MessageEventArgs e)
        {
            Logger.LogDebug("Message received from server " + e.Data);

            Send(e.Data);
        }

        private void OnServerClose(object? sender, CloseEventArgs e)
        {
            Logger.LogInfo("Closed connection by server " + ID);

            Sessions.CloseSession(ID);
        }

        private void OnServerError(object? sender, WebSocketSharp.ErrorEventArgs e)
        {
            Logger.LogError(e.Message);
        }

        // Client -> Proxy events
        protected override void OnOpen()
        {
            Logger.LogInfo("Opened connection " + ID);

            // Instantly request the connection to give us the ip they want to connect to
            Send(JsonConvert.SerializeObject(new
            {
                type = "requested-server-ip"
            }));
        }

        protected override void OnMessage(MessageEventArgs e)
        {
            Logger.LogDebug("Message received from " + ID + " " + e.Data);

            if (client == null)
            {
                WebSocketMessage? data = JsonConvert.DeserializeObject<WebSocketMessage>(e.Data);
                if (!data.HasValue)
                {
                    Logger.LogError("Message invalid (null)");
                    return;
                }
                WebSocketMessage message = data.Value;

                if (message.Type == "connect-to-ip")
                {
                    ConnectToServer(message.Value);
                }
                else
                {
                    // Invalid message
                    Logger.LogError("Message invalid (unknown)");
                    return;
                }
            }
            else
            {
                client.Send(e.Data);
            }
        }

        protected override void OnClose(CloseEventArgs e)
        {
            Logger.LogInfo("Closed connection " + ID);

            if (client == null) return;

            client.Close();
            client = null;
        }

        protected override void OnError(WebSocketSharp.ErrorEventArgs e)
        {
            Logger.LogError(e.Message);
        }

        public void ConnectToServer(string ip)
        {
            if (client != null) return;

            string url = $"ws://{ip}:7778/lobby";
            Logger.LogInfo($"Connecting to {url}");
            client = new WebSocket(url);
            client.OnMessage += OnServerMessage;
            client.OnClose += OnServerClose;
            client.OnError += OnServerError;
            // client.SslConfiguration.ServerCertificateValidationCallback doesn't work cause of https://github.com/mono/mono/issues/8660 so we can't use a secure connection for self signed certificates
            client.Connect();
        }
    }
}
