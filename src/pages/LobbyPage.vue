<template>
    <div v-if="firebaseCorrectlySetup">
        <v-row dense>
            <v-col
                v-for="(code, index) in loadoutCodes"
                :key="index"
                cols="12"
                sm="6"
                lg="3"
            >
                <LoadoutPreviewCard :loadout-code="code" />
            </v-col>
        </v-row>
        <v-divider
            class="my-2"
            thickness="2"
        />
        <v-row>
            <v-col cols="12">
                <LoadoutEditor
                    v-model="loadoutCode"
                    :fixed-player-name="playerName"
                />
            </v-col>
        </v-row>
        <v-divider
            class="my-2"
            thickness="2"
        />
        <battleground-selection-dialog v-model="battleground" />
        <v-divider
            class="my-2"
            thickness="2"
        />
    </div>
    <lobby-settings-form class="settings mx-auto" />
</template>

<script>
import LoadoutEditor from '../components/LoadoutEditor.vue';
import LoadoutPreviewCard from '../components/lobby-page/LoadoutPreviewCard.vue';
import LobbySettingsForm from '../components/lobby-page/LobbySettingsForm.vue';
import { firebaseApp } from '../firebase.js';
import { useLobbyStore } from '../stores/lobby.js';
import Cookies from 'js-cookie';
import CookieName from '../enums/cookieNames.js';
import BattlegroundSelectionDialog from '../components/lobby-page/BattlegroundSelectionDialog.vue';

export default {
    components: {
        LobbySettingsForm,
        LoadoutPreviewCard,
        LoadoutEditor,
        BattlegroundSelectionDialog,
    },
    setup() {
        const lobbyStore = useLobbyStore();
        return {
            lobbyStore
        };
    },
    data() {
        return {
            firebaseCorrectlySetup: firebaseApp !== null,
            playerName: Cookies.get(CookieName.PlayerName) ?? null
        }
    },
    computed: {
        loadoutCode: {
            get() {
                return this.lobbyStore.playerLoadout;
            },
            set(value) {
                return this.lobbyStore.setPlayerLoadout(value);
            }
        },
        loadoutCodes() {
            return [
                this.lobbyStore.getPlayerLoadoutByIndex(0),
                this.lobbyStore.getPlayerLoadoutByIndex(1),
                this.lobbyStore.getPlayerLoadoutByIndex(2),
                this.lobbyStore.getPlayerLoadoutByIndex(3),
            ]
        },
        battleground: {
            get() {
                return this.lobbyStore.battleground;
            },
            set(value) {
                return this.lobbyStore.setBattleground(value);
            }
        },
    }
};
</script>

<style scoped>
.settings {
    max-width: 500px;
}
</style>