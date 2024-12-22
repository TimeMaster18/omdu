import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import cookieNames from '../enums/cookieNames.js';
import { database } from '../firebase.js';
import { ref, set } from 'firebase/database';
import { useDatabaseObject } from 'vuefire';

export const useLobbyStore = defineStore('lobby', {
    state() {
        return {
            playerIndex: parseInt(Cookies.get(cookieNames.PlayerIndex)) ?? 0,
            playerLoadouts: [
                database !== null ? useDatabaseObject(ref(database, 'player-loadouts/player-1')) : null,
                database !== null ? useDatabaseObject(ref(database, 'player-loadouts/player-2')) : null,
                database !== null ? useDatabaseObject(ref(database, 'player-loadouts/player-3')) : null,
                database !== null ? useDatabaseObject(ref(database, 'player-loadouts/player-4')) : null
            ],
        };
    },
    actions:{
        setPlayerLoadout(loadoutString) {
            // Prevent updating the loadout when the loadout is already set to the same value
            if(this.playerLoadout === loadoutString) return;

            set(ref(database, `player-loadouts/player-${this.playerIndex + 1}`), loadoutString);
        },
    },
    getters: {
        playerLoadout: (state) => {
            return state.playerLoadouts[state.playerIndex].value?.$value;
        },
        getPlayerLoadoutByIndex: (state) => (playerIndex) => {
            return state.playerLoadouts[playerIndex].value?.$value;
        },
    }
});