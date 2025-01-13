import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import CookieName from '../enums/cookieName.js';
import { database } from '../firebase.js';
import { ref, set } from 'firebase/database';
import { useDatabaseObject } from 'vuefire';

export const useLobbyStore = defineStore('lobby', {
    state() {
        return {
            playerIndex: parseInt(Cookies.get(CookieName.PlayerIndex)) ?? 0,
            playerLoadouts: [
                database !== null ? useDatabaseObject(ref(database, 'player-loadouts/player-1')) : null,
                database !== null ? useDatabaseObject(ref(database, 'player-loadouts/player-2')) : null,
                database !== null ? useDatabaseObject(ref(database, 'player-loadouts/player-3')) : null,
                database !== null ? useDatabaseObject(ref(database, 'player-loadouts/player-4')) : null
            ],
            battlegroundId: database !== null ? useDatabaseObject(ref(database, 'battleground')) : null
        };
    },
    actions:{
        setPlayerLoadout(loadoutString) {
            // Prevent updating the loadout when the loadout is already set to the same value
            if(this.playerLoadout === loadoutString) return;

            set(ref(database, `player-loadouts/player-${this.playerIndex + 1}`), loadoutString);
        },
        setBattleground(battlegroundId) {
            // Prevent updating the battleground when the battleground is already set to the same value
            if(this.battleground === battlegroundId) return;

            set(ref(database, 'battleground'), battlegroundId);
        },
    },
    getters: {
        playerLoadout: (state) => {
            return state.playerLoadouts[state.playerIndex].value?.$value ?? null;
        },
        getPlayerLoadoutByIndex: (state) => (playerIndex) => {
            return state.playerLoadouts[playerIndex].value?.$value ?? null;
        },
        battleground: (state) => {
            return state.battlegroundId?.$value ?? null;
        },
    }
});