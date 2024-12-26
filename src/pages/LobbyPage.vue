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
        <v-row dense>
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

export default {
    components: {
        LobbySettingsForm,
        LoadoutPreviewCard,
        LoadoutEditor,
    },
    setup() {
        const lobbyStore = useLobbyStore();
        return {
            lobbyStore
        };
    },
    data() {
        return {
            firebaseCorrectlySetup: firebaseApp !== null
        }
    },
    computed: {
        playerName() {
            return Cookies.get(CookieName.PlayerName) ?? null;
        },
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
    }
};
</script>

<style scoped>
.settings {
    max-width: 500px;
}
</style>