<template>
    <v-card class="elevation-0">
        <lobby-connection-status class="text-center my-2" />
        
        <v-card-text>
            <v-switch
                label="Secure lobby"
                variant="outlined"
                hide-details
                v-model="secure"
            />
            <v-text-field
                label="Lobby ip"
                variant="outlined"
                hide-details
                v-model="ip"
                class="mb-4"
            />
            <v-text-field
                label="Player name"
                variant="outlined"
                hide-details
                v-model="playerName"
            />
        </v-card-text>
        <v-card-actions>
            <v-btn
                variant="outlined"
                @click="save"
            >
                Save & connect
            </v-btn>
            <v-spacer class="d-inline" />
            <v-btn
                v-if="isConnectedToLobby"
                color="error"
                variant="outlined"
                @click="disconnect"
            >
                Disconnect
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import Cookies from 'js-cookie';
import CookieName from '../../enums/cookieName.js';
import { useLobbyStore } from '../../stores/lobby.js';
import LobbyConnectionStatus from './LobbyConnectionStatus.vue';
import LobbyStatus from '../../enums/lobbyStatus.js';

export default {
    components: {
        LobbyConnectionStatus
    },
    setup() {
        const lobbyStore = useLobbyStore();
        return { lobbyStore };
    },
    data() {
        return {
            secure: Cookies.get(CookieName.SecureLobby) === "true",
            ip: Cookies.get(CookieName.LobbyIp),
            playerName: Cookies.get(CookieName.PlayerName),
        }
    },
    computed: {
        isConnectedToLobby() {
            return this.lobbyStore.connectionStatus === LobbyStatus.Connected;
        }
    },
    methods: {
        save(){
            // expires: Set the cookies for 1 years even if the user closes the session
            // sameSite: It will only be send to this website so others can't get a hold of itµ
            // secure: Only allow the cookie to be sent over https
            const cookieOptions = { expires: 365, sameSite: "Strict", secure: true };

            if(this.ip === null) Cookies.remove(CookieName.LobbyIp);
            else Cookies.set(CookieName.LobbyIp, this.ip, cookieOptions);

            Cookies.set(CookieName.SecureLobby, this.secure, cookieOptions);

            if(this.playerName === null) Cookies.remove(CookieName.PlayerName);
            else Cookies.set(CookieName.PlayerName, this.playerName, cookieOptions);

            location.reload();
        },
        disconnect() {
            this.ip = null;
            this.save();
        }
    }
};
</script>

<style scoped></style>