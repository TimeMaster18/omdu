<template>
    <div v-if="firebaseCorrectlySetup">
        <v-row>
            <v-col
                v-for="(code, index) in loadoutCodes"
                :key="index"
                cols="12"
                sm="6"
                lg="3"
            >
                <LoadoutPreviewCard
                    :loadout-code="code"
                    v-on="(index === playerIndex) ? { 'click': openLoadoutDialog } : null"
                />
            </v-col>
            <loadout-dialog
                ref="loadoutDialog"
                v-model="loadoutCode"
            />
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
import LoadoutDialog from '../components/lobby-page/LoadoutDialog.vue';
import LoadoutPreviewCard from '../components/lobby-page/LoadoutPreviewCard.vue';
import LobbySettingsForm from '../components/lobby-page/LobbySettingsForm.vue';
import { firebaseApp } from '../firebase.js';
import { useLobbyStore } from '../stores/lobby.js';
import BattlegroundSelectionDialog from '../components/lobby-page/BattlegroundSelectionDialog.vue';

export default {
    components: {
        LobbySettingsForm,
        LoadoutPreviewCard,
        BattlegroundSelectionDialog,
        LoadoutDialog,
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
        }
    },
    computed: {
        playerIndex() {
            return this.lobbyStore.playerIndex;
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
        battleground: {
            get() {
                return this.lobbyStore.battleground;
            },
            set(value) {
                return this.lobbyStore.setBattleground(value);
            }
        },
    },
    methods: {
        openLoadoutDialog() {
            this.$refs.loadoutDialog.open();
        }
    }
};
</script>

<style scoped>
.settings {
    max-width: 500px;
}
</style>