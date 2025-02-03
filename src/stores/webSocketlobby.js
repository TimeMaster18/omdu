import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import CookieName from '../enums/cookieName.js';

export const useWebSocketLobbyStore = defineStore('lobby', {
    state() {
        return {
            socket: null,

            playerIndex: parseInt(Cookies.get(CookieName.PlayerIndex)) ?? 0,
            playerLoadouts: [
                null,
                null,
                null,
                null,
                null
            ],
            battleground: null
        };
    },
    actions:{
        connect() {
            if(this.socket !== null) return;
            this.socket = new WebSocket("ws://127.0.0.1:7778/lobby");
            this.socket.onopen = () => {
                // Request the current state of the data
                this.socket.send(JSON.stringify({
                    type: "sync",
                }));

                this.socket.onmessage = (message) => {
                    const data = JSON.parse(message.data);
                    console.log(data);

                    this.battleground = data.battleground;
                    this.playerLoadouts = data.loadouts;
                }
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
                type: `player-${this.playerIndex + 1}-loadout`,
                value: loadoutString
            }));
        },
        setBattleground(battlegroundId) {
            // Prevent updating the battleground when the battleground is already set to the same value
            if(this.battleground === battlegroundId) return;

            this.socket.send(JSON.stringify({
                type: "battleground",
                value: battlegroundId
            }));
        },
    },
    getters: {
        playerLoadout: (state) => {
            return state.playerLoadouts[state.playerIndex];
        },
        getPlayerLoadoutByIndex: (state) => (playerIndex) => {
            return state.playerLoadouts[playerIndex];
        },
    }
});