import { defineStore } from 'pinia';
import LobbyStatus from '../enums/lobbyStatus';
import Cookies from 'js-cookie';
import CookieName from '../enums/cookieName';
import { load, save as convertToLoadoutCode } from '../utils/loadoutUtil';

export const useAutomaticLobbyStore = defineStore('automatic-lobby', {
    state() {
        return {
            socket: null,
            connectedTo: null,

            playerIndex: null,
            playerLoadouts: [null, null, null, null, null],
            battleground: null
        };
    },
    actions:{
        connect(ip = null) {
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
                        this.connectedTo = ip ? ip : "127.0.0.1"; // Host is automatically connected to itself a.k.a. 127.0.0.1

                        // Immediately send over the locally stored loadout.
                        let storedLoadout = Cookies.get(CookieName.AutomaticLobbyLoadout);
                        if(storedLoadout === undefined) {
                            // Default to an empty loadout if no loadout was stored so other users can still see we are connected.
                            storedLoadout = `${Cookies.get(CookieName.PlayerName)}-0000-000000000000000000-00-00-0000-0000000000000000000000000000`;
                        }else {
                            // Make sure the loadout uses the player name and not an old player name
                            let loadout = load(storedLoadout);
                            loadout.playerName = Cookies.get(CookieName.PlayerName);
                            storedLoadout = convertToLoadoutCode(loadout);
                        }
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
                this.connectedTo = null;
                this.playerIndex = null;
                this.playerLoadouts = [null, null, null, null, null];
                this.battleground = null;
            }
        },
        disconnect() {
            if(this.socket === null) return;
            this.socket.close();
        },
        setPlayerLoadout(loadoutString) {
            // Prevent updating the loadout when the loadout is already set to the same value
            if(this.playerLoadout === loadoutString) return;

            Cookies.set(CookieName.AutomaticLobbyLoadout, loadoutString);

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
            else if(state.connectedTo !== null) return LobbyStatus.Connected;
            else return LobbyStatus.Connecting;
        },
        isHost: (state) => {
            return state.playerIndex === 0;
        },
        playerLoadout: (state) => {
            return state.playerLoadouts[state.playerIndex];
        },
        getPlayerLoadoutByIndex: (state) => (playerIndex) => {
            return state.playerLoadouts[playerIndex];
        },
    }
});