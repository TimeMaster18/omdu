<template>
    <v-card>
        <v-card-text>
            <!-- Host or join lobby -->
            <v-btn-toggle
                v-model="host"
                mandatory
                variant="outlined"
                class="mb-4 d-flex flex-row"
            >
                <v-btn
                    :value="false"
                    class="flex-grow-1"
                >
                    Join Lobby
                </v-btn>
                <v-btn
                    :value="true"
                    class="flex-grow-1"
                >
                    Host Lobby
                </v-btn>
            </v-btn-toggle>

            <ol class="mx-4">
                <!-- Download the .zip -->
                <li>
                    <a
                        href="https://github.com/Danmander/omdu/releases/latest"
                        target="_blank"
                    >Download</a>
                    and extract the latest lobby.zip from GitHub
                </li>

                <!-- Run the .exe -->
                <li v-if="host">
                    Run the start-lobby.bat file
                </li>
                <li v-else>
                    Run the start-proxy.bat file
                </li>

                <!-- Find the host's ip address  -->
                <li v-if="!host">
                    Right click
                    <span v-if="host">yourself</span>
                    <span v-else>the host</span>
                    in Radmin VPN and then choose "Copy IP address"
                </li>

                <!-- Enter the host's ip address -->
                <li v-if="!host">
                    <div>
                        Paste the host's IP address
                    </div>
                    <v-text-field
                        label="IPv4 address"
                        variant="outlined"
                        hide-details
                        single-line
                        v-model="ip"
                        class="mb-2"
                    />
                </li>

                <!-- Enter a player name -->
                <li>
                    <div>Enter your player name</div>
                    <v-text-field
                        label="Username"
                        variant="outlined"
                        hide-details
                        single-line
                        v-model="playerName"
                        class="mb-2"
                    />
                </li>

                <!-- Connect to the lobby -->
                <li>
                    <div>Connect to the lobby</div>
                    <v-btn
                        variant="outlined"
                        @click="save"
                    >
                        Connect
                    </v-btn>
                </li>
            </ol>
        </v-card-text>
    </v-card>
</template>

<script>
import Cookies from 'js-cookie';
import { useLobbyStore } from '../../stores/lobby';
import CookieName from '../../enums/cookieName';

export default {
    data() {
        return {
            host: Cookies.get(CookieName.LobbyIp) === "127.0.0.1",

            ip: Cookies.get(CookieName.LobbyIp),
            playerName: Cookies.get(CookieName.PlayerName),
        }
    },
    setup() {
        const lobbyStore = useLobbyStore();
        return { lobbyStore };
    },
    methods: {
        save(){
            // expires: Set the cookies for 1 years even if the user closes the session
            // sameSite: It will only be send to this website so others can't get a hold of itµ
            // secure: Only allow the cookie to be sent over https
            const cookieOptions = { expires: 365, sameSite: "Strict", secure: true };

            // Hosts only need to connect to their own server so we automatically set
            if(this.host) Cookies.set(CookieName.LobbyIp, "127.0.0.1", cookieOptions);
            else Cookies.set(CookieName.LobbyIp, this.ip, cookieOptions);

            Cookies.set(CookieName.PlayerName, this.playerName, cookieOptions);

            location.reload();
        },
    }
}
</script>

<style scoped>
li {
    margin-bottom: 4px;
}
</style>