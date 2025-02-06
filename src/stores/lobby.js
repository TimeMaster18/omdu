import { defineStore } from 'pinia';
import LobbyStatus from '../enums/lobbyStatus';

export const useLobbyStore = defineStore('lobby', {
    state() {
        return {
            socket: null,
            connected: false,

            playerIndex: null,
            playerLoadouts: [null, null, null, null, null],
            battleground: null
        };
    },
    actions:{
        connect(ip) {
            // Prevent a double connection
            if(this.socket !== null) return;
            
            this.socket = new WebSocket(`ws://127.0.0.1:7778/lobby-proxy`);
            this.socket.onopen = () => {
                this.socket.onmessage = (message) => {
                    const data = JSON.parse(message.data);

                    if(data.type === "requested-server-ip") {
                        // Only ever requested by the proxy
                        this.socket.send(JSON.stringify({
                            type: `connect-to-ip`,
                            value: ip
                        }));
                    } else if(data.type === "assigned-player-slot") {
                        this.playerIndex = data.playerSlot
                        this.connected = true;
                    } else if(data.type === "updated-lobby") {
                        this.battleground = data.lobby.battleground;
                        this.playerLoadouts = data.lobby.loadouts;
                    } else {
                        console.log(message);
                    }
                }
            }

            this.socket.onclose = () => {
                this.socket = null;
                this.connected = false;
            }
        },
        disconnect() {
            if(this.socket === null) return;
            this.socket.close();
        },
        setPlayerLoadout(loadoutString) {
            // Prevent updating the loadout when the loadout is already set to the same value
            if(this.playerLoadout === loadoutString) return;

            this.socket.send(JSON.stringify({
                type: `update-loadout`,
                value: loadoutString
            }));
        },
        setBattleground(battlegroundId) {
            // Prevent updating the battleground when the battleground is already set to the same value
            if(this.battleground === battlegroundId) return;

            this.socket.send(JSON.stringify({
                type: "update-battleground",
                value: battlegroundId
            }));
        },
    },
    getters: {
        connectionStatus: (state) => {
            if(state.socket === null) return LobbyStatus.Disconnected;
            else if(state.connected) return LobbyStatus.Connected;
            else return LobbyStatus.Connecting;
        },
        playerLoadout: (state) => {
            return state.playerLoadouts[state.playerIndex];
        },
        getPlayerLoadoutByIndex: (state) => (playerIndex) => {
            return state.playerLoadouts[playerIndex];
        },
    }
});