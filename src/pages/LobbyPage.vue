<template>
    <div v-if="isConnectedToLobby">
        <v-row class="justify-end px-2">
            <settings-dialog>
                <lobby-settings-form class="settings" />
            </settings-dialog>
        </v-row>
        <v-row class="justify-center">
            <v-col
                v-for="(code, index) in loadoutCodes"
                :key="index"
                cols="12"
                sm="6"
                md="4"
                class="v-col-xl-fifth"
            >
                <loadout-preview-card
                    :loadout-code="code"
                    v-on="(index === playerIndex) ? { 'click': openLoadoutDialog } : null"
                    show-copy-action
                    show-open-loadout-action
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
        <v-row>
            <v-col
                cols="12"
                lg="4"
            >
                <battleground-selection-dialog v-model="battleground" />
            </v-col>
            <v-col
                v-if="battlegroundInfo !== null"
                cols="12"
                lg="8"
            >
                <v-alert
                    v-if="battlegroundInfo.gamemode === Gamemode.Endless"
                    class="mx-2 mb-2"
                    type="warning"
                    variant="outlined"
                    density="compact"
                    width="fit-content"
                >
                    Due to incomplete wave data we're only able to show notable enemies.
                </v-alert>
                <enemies-overview
                    :enemies="battlegroundInfo.enemies"
                    :total-mercenaries="battlegroundInfo.mercenaries"
                />
            </v-col>
        </v-row>
    </div>
    <lobby-settings-form
        v-else
        class="settings mx-auto"
    />
</template>

<script>
import LoadoutDialog from '../components/lobby-page/LoadoutDialog.vue';
import LoadoutPreviewCard from '../components/lobby-page/LoadoutPreviewCard.vue';
import LobbySettingsForm from '../components/lobby-page/LobbySettingsForm.vue';
import { useLobbyStore } from '../stores/lobby.js';
import { useDataStore } from '../stores/data.js';
import BattlegroundSelectionDialog from '../components/lobby-page/BattlegroundSelectionDialog.vue';
import EnemiesOverview from '../components/EnemiesOverview.vue';
import Gamemode from '../enums/gamemode.js';
import SettingsDialog from '../components/SettingsDialog.vue';
import Cookies from 'js-cookie';
import CookieName from '../enums/cookieName.js';

export default {
    components: {
        LobbySettingsForm,
        LoadoutPreviewCard,
        BattlegroundSelectionDialog,
        LoadoutDialog,
        EnemiesOverview,
        SettingsDialog
    },
    setup() {
        const lobbyStore = useLobbyStore();
        const dataStore = useDataStore();
        return {
            lobbyStore,
            dataStore
        };
    },
    mounted() {
        if(Cookies.get(CookieName.LobbyIp) !== undefined) {
            this.lobbyStore.connect(Cookies.get(CookieName.LobbyIp));
        }
    },
    data() {
        return {
            Gamemode,
        }
    },
    computed: {
        isConnectedToLobby() {
            return this.lobbyStore.connected;
        },
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
                this.lobbyStore.getPlayerLoadoutByIndex(4),
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
        battlegroundInfo() {
            return JSON.parse(JSON.stringify(this.dataStore.battlegrounds))
                .find(battleground => battleground.id === this.battleground) ?? null
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
/* Custom breakpoint for 1/5th division of a row as we have 5 players which we want to show */
@media (min-width: 1700px) {
    .v-col-xl-fifth {
        flex: 0 0 20%;
        max-width: 20%;
    }
}

.settings {
    max-width: 500px;
    width: 500px;
}
</style>