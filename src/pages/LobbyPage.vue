<template>
    <manual-lobby v-if="showManualLobby" />
    <automatic-lobby v-else-if="showAutomaticLobby" />
    <v-card
        v-else
        class="setup-wrapper mx-auto"
    >
        <v-card-text class="py-4 px-8">
            <lobby-connection-status
                :status="connectionStatus"
                class="text-center mb-4"
            />

            <v-btn-toggle
                v-model="lobbyType"
                mandatory
                variant="outlined"
                class="mb-4 w-100"
            >
                <v-btn
                    :value="LobbyType.Manual"
                    class="w-50"
                >
                    Manual Lobby
                </v-btn>
                <v-btn
                    :value="LobbyType.Automatic"
                    class="w-50"
                >
                    Automatic Lobby
                </v-btn>
            </v-btn-toggle>

            <v-alert
                v-if="lobbyType === LobbyType.Manual"
                type="info"
                variant="outlined"
                density="compact"
                class="mb-4"
            >
                The Manual Lobby is an out-of-the-box solution that runs without any extra setup. The host needs to manually enter each player's loadout code, and only the host can see the selected battleground and their teammates' loadouts. It's ideal for singleplayer or quick multiplayer sessions.
            </v-alert>
            <v-alert
                v-else-if="lobbyType === LobbyType.Automatic"
                type="info"
                variant="outlined"
                density="compact"
                class="mb-4"
            >
                The Automatic Lobby offers a streamlined experience, but does require a bit of extra setup. Once the small companion app is running, everything syncs up automatically allowing everyone to see the battleground, check out the upcoming enemies, and take a look at their teammates' loadouts. It's ideal for long multiplayer sessions.
            </v-alert>

            <v-btn-toggle
                v-model="host"
                mandatory
                variant="outlined"
                class="mb-4 w-100"
            >
                <v-btn
                    :value="true"
                    class="w-50"
                >
                    Host Game
                </v-btn>
                <v-btn
                    :value="false"
                    class="w-50"
                >
                    Join Game
                </v-btn>
            </v-btn-toggle>

            <ol class="mx-4">
                <!-- Download the .zip -->
                <li v-if="lobbyType === LobbyType.Automatic">
                    <a
                        href="https://github.com/Danmander/omdu/releases/latest"
                        target="_blank"
                    >Download</a>
                    and extract the latest lobby.zip from GitHub
                </li>

                <!-- Run the .exe -->
                <li v-if="lobbyType === LobbyType.Automatic">
                    <span v-if="host">
                        Run the start-lobby.bat file
                    </span>
                    <span v-else>
                        Run the start-proxy.bat file
                    </span>
                </li>

                <!-- Copy host ip -->
                <li v-if="!host">
                    Right click the host in
                    <a
                        href="https://www.radmin-vpn.com"
                        target="_blank"
                    > Radmin VPN</a> and then choose "Copy IP address"
                </li>

                <!-- Paste host ip -->
                <li v-if="!host">
                    <div>
                        Paste the host's IP address
                    </div>
                    <v-text-field
                        v-if="!host"
                        v-model="hostIp"
                        label="Host's IPv4 address"
                        variant="outlined"
                        hide-details
                        single-line
                        class="mb-2"
                    />
                </li>
                
                <!-- Enter player name -->
                <li>
                    <div>Enter your player name</div>
                    <v-text-field
                        label="Username"
                        variant="outlined"
                        hide-details
                        single-line
                        v-model="sanitizedPlayerName"
                        class="mb-2"
                    />
                </li>

                <!-- Connect -->
                <li>
                    <div>Connect to the lobby</div>
                    <v-btn
                        variant="outlined"
                        @click="connect"
                        :loading="connecting"
                    >
                        Connect
                    </v-btn>
                </li>
            </ol>
        </v-card-text>
    </v-card>
</template>

<script>
import LobbyStatus from '../enums/lobbyStatus';
import { useAutomaticLobbyStore } from '../stores/automaticLobby';
import { useManualLobbyStore } from '../stores/manualLobby';
import AutomaticLobby from '../components/lobby-page/AutomaticLobby.vue';
import ManualLobby from '../components/lobby-page/ManualLobby.vue';
import LobbyConnectionStatus from '../components/lobby-page/LobbyConnectionStatus.vue';
import Cookies from 'js-cookie';
import CookieName from '../enums/cookieName';

const LobbyType = Object.freeze({
    Manual: "manual",
    Automatic: "automatic"
});

export default {
    components: {
        ManualLobby,
        AutomaticLobby,
        LobbyConnectionStatus,
    },
    setup() {
        const manualLobbyStore = useManualLobbyStore();
        const automaticLobbyStore = useAutomaticLobbyStore();

        return {
            manualLobbyStore,
            automaticLobbyStore
        };
    },
    data() {
        return {
            LobbyType,

            host: Cookies.get(CookieName.LobbyHost) === "false" ? false : true,
            lobbyType: Cookies.get(CookieName.LobbyType) ?? LobbyType.Manual,
            hostIp: Cookies.get(CookieName.HostIp) ?? null,
            playerName: Cookies.get(CookieName.PlayerName) ?? null,
        }
    },
    computed: {
        sanitizedPlayerName: {
            // Only alphanumeric characters are allowed in the player name otherwise the game just fails to start.
            get() {
                let playerName = this.playerName;
                if(playerName !== null) playerName.replace(/[^a-zA-Z0-9]/g, "");
                return playerName;
            },
            set(name) {
                if(name !== null) name.replace(/[^a-zA-Z0-9]/g, "");
                this.playerName = name;
            }
        },
        showManualLobby() {
            return this.manualLobbyStore.connected;
        },
        showAutomaticLobby() {
            return this.automaticLobbyStore.connectionStatus === LobbyStatus.Connected;
        },
        connectionStatus() {
            if(this.lobbyType === LobbyType.Manual) {
                return this.manualLobbyStore.connected ? LobbyStatus.Connected : LobbyStatus.Disconnected;
            } else if(this.lobbyType === LobbyType.Automatic) {
                return this.automaticLobbyStore.connectionStatus;
            }

            return LobbyStatus.Disconnected;
        },
        connecting() {
            return this.connectionStatus === LobbyStatus.Connecting;
        }
    },
    methods: {
        connect() {
            // Save the selected settings
            const cookieSettings = { expires: 365, sameSite: "Strict", secure: true };
            Cookies.set(CookieName.PlayerName, this.sanitizedPlayerName, cookieSettings);
            Cookies.set(CookieName.LobbyHost, this.host, cookieSettings);
            Cookies.set(CookieName.HostIp, this.hostIp, cookieSettings);
            Cookies.set(CookieName.LobbyType, this.lobbyType, cookieSettings);

            // Connect to the lobby based on the selected lobby options
            if(this.lobbyType === LobbyType.Manual) {
                if(this.host) this.manualLobbyStore.host();
                else this.manualLobbyStore.join(this.hostIp);
            } else if(this.lobbyType === LobbyType.Automatic) {
                if(this.host) this.automaticLobbyStore.connect();
                else this.automaticLobbyStore.connect(this.hostIp);
            }
        }
    }
}
</script>

<style scoped>
.setup-wrapper {
    max-width: 500px;
}

li {
    margin-bottom: 0.5rem;
}
</style>