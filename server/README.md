![Logo](../src/assets/images/logo.webp)

# Welcome to Orcs Must Read Unchained's Lobby System!
While developing Orcs Must Read Unchained, I wanted to share the lobby system I created with a broader audience. Initially, I used Firebase Realtime Database, but I was looking for a solution that didn’t depend on dedicated servers or require sharing a Firebase key/secret with other players. My goal was to create something that anyone could run, making it as easy as possible to set up multiplayer lobbies.

Since [Project Rechained](https://github.com/TimeMaster18/Project-Rechained) already requires the .NET 8 SDK and recommends using [Radmin VPN](https://www.radmin-vpn.com) for multiplayer games, I aimed to align this project with the same requirements and recommendations for consistency and ease of use.

## Prerequisite
Download and install the latest [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) compatible with your operating system. If you’ve already installed [Project Rechained](https://github.com/TimeMaster18/Project-Rechained), you should already have it.

The lobby runs on port 7778. The host must forward this port unless you plan to use [Radmin VPN](https://www.radmin-vpn.com).

## How to install
You can download the server and proxy executable from this project's [release page](https://github.com/Danmander/omdu/releases). Once downloaded, extract lobby.zip to a location of your choice—just be sure to remember where you put it.

## Setting up a lobby
Before starting, decide who will host the lobby (only one player needs to do this). The host must run the `start-lobby.bat` file, while all other players must run the `start-proxy.bat` file.

The host will be prompted to enter their internal IPv4 address:
- Using Radmin VPN? Use the IP address displayed next to your name.
- Not using Radmin? Find your internal IP by running `ipconfig /all`.

Once the server is running, all players should visit the [lobby page](https://omdu.danmander.com/lobby), enter a player name, and input the host’s public IPv4 address:
- Using Radmin VPN? Use the IP shown next to the host’s name.
- Not using Radmin? Use a service like [www.whatsmyip.org](https://www.whatsmyip.org/) to find the host's public IP.

That’s it! You should now be able to connect to the lobby, see your teammates, and watch the battleground and their loadouts update in real time.

## Known issues
- If you enter "select mode" (indicated by "Select" in the command window title) in either .bat file, the lobby/proxy will pause. You can resume it by pressing any key.
- The connection between the host and proxies is insecure due to an [issue](https://github.com/mono/mono/issues/8660) in one of its dependencies. However, since no sensitive data is transmitted, this shouldn’t be a major concern. (That said, I’d love to see it fixed!)