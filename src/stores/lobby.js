import { defineStore } from 'pinia';
import LobbyStatus from '../enums/lobbyStatus';
import Cookies from 'js-cookie';
import CookieName from '../enums/cookieName';

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
            
            this.socket = new WebSocket(`ws://127.0.0.1:7778/lobby`);
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

                        // Immediately send over the locally stored loadout.
                        // Default to an empty loadout if no loadout was stored so other users can still see we are connected.
                        let storedLoadout = Cookies.get(CookieName.LobbyLoadout) ?? `${Cookies.get(CookieName.PlayerName)}-0000-000000000000000000-00-00-0000-0000000000000000000000000000`;
                        this.socket.send(JSON.stringify({
                            type: "update-loadout",
                            value: storedLoadout
                        }))
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

            Cookies.set(CookieName.LobbyLoadout, loadoutString);

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