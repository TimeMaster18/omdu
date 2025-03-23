<template>
    <v-row class="justify-end px-2 mb-3">
        <lobby-launch-button
            v-if="isConnectedToProjectRechained"
            :is-host="isHost"
            :player-index="0"
            :loadouts="loadoutCodes"
            :battleground="battlegroundInfo"
        />
        <v-btn-toggle
            v-model="isHost"
            mandatory
            class="ml-2"
            variant="outlined"
            density="compact"
        >
            <v-btn :value="true">
                Host game
            </v-btn>

            <v-btn :value="false">
                Join game
            </v-btn>
        </v-btn-toggle>
    </v-row>
    <div v-if="isHost">
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
                    v-on="(index === 0) ? { 'click': openLoadoutDialog } : null"
                    show-copy-action
                    show-open-loadout-action
                >
                    <template #name="{ loadout }">
                        <span v-if="index === 0">
                            {{ loadout?.playerName ?? 'Your loadout' }}
                        </span>
                        <v-text-field
                            v-else
                            class="player-name mr-2"
                            @click.stop
                            :label="`Player ${index + 1}'s loadout code`"
                            v-model="loadoutCodes[index]"
                            single-line
                            hide-details
                            density="compact"
                            variant="underlined"
                        />
                    </template>
                    <template #actions>
                        <v-icon
                            v-if="index === 0"
                            class="mr-2"
                        >
                            mdi-pencil
                        </v-icon>
                    </template>
                </loadout-preview-card>
            </v-col>
            <loadout-dialog
                ref="loadoutDialog"
                v-model="playerLoadoutCode"
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
    <div v-else>
        <loadout-editor v-model="playerLoadoutCode" />
    </div>
</template>

<script>
import LoadoutDialog from '../components/lobby-page/LoadoutDialog.vue';
import LoadoutPreviewCard from '../components/lobby-page/LoadoutPreviewCard.vue';
import { useDataStore } from '../stores/data.js';
import BattlegroundSelectionDialog from '../components/lobby-page/BattlegroundSelectionDialog.vue';
import EnemiesOverview from '../components/EnemiesOverview.vue';
import Gamemode from '../enums/gamemode.js';
import LobbyLaunchButton from '../components/lobby-page/LobbyLaunchButton.vue';
import { useProjectRechainedStore } from '../stores/projectRechained.js';
import LoadoutEditor from '../components/LoadoutEditor.vue';
import Cookies from 'js-cookie';
import CookieName from '../enums/cookieName.js';

export default {
    components: {
        LoadoutPreviewCard,
        BattlegroundSelectionDialog,
        LoadoutDialog,
        EnemiesOverview,
        LobbyLaunchButton,
        LoadoutEditor
    },
    setup() {
        const dataStore = useDataStore();
        const projectRechainedStore = useProjectRechainedStore();
        return {
            dataStore,
            projectRechainedStore
        };
    },
    mounted() {
        this.projectRechainedStore.checkConnection();
        this.loadLobbySettingsCookie();
    },
    data() {
        return {
            Gamemode,

            isHost: true,
            battleground: null,
            loadoutCodes: [null, null, null, null, null]
        }
    },
    computed: {
        isConnectedToProjectRechained() {
            return this.projectRechainedStore.connected;
        },
        battlegroundInfo() {
            return JSON.parse(JSON.stringify(this.dataStore.battlegrounds))
                .find(battleground => battleground.id === this.battleground) ?? null
        },
        playerLoadoutCode: {
            // User is always player 0:
            //  - When hosting (because the host is always player 0)
            //  - When joining (because they don't have any clue about other players so there's only 1 player they need to keep track of)
            get() {
                return this.loadoutCodes[0];
            },
            set(loadoutCode) {
                this.loadoutCodes[0] = loadoutCode;
            }
        }
    },
    methods: {
        openLoadoutDialog() {
            this.$refs.loadoutDialog.open();
        },
        loadLobbySettingsCookie() {
            let cookie = Cookies.get(CookieName.ProjectRechainedLobbySettings);
            if(cookie === undefined) return;
            cookie = JSON.parse(cookie);

            if(cookie.host !== undefined) this.isHost =  !!cookie.host;
            if(cookie.battleground !== undefined) this.battleground = cookie.battleground;
            if(cookie.loadouts !== undefined) this.loadoutCodes = cookie.loadouts;
        },
        saveLobbySettingsCookie() {
            Cookies.set(
                CookieName.ProjectRechainedLobbySettings,
                JSON.stringify({
                    host: this.isHost,
                    battleground: this.battleground,
                    loadouts: this.loadoutCodes
                }),
                {
                    expires: 365,
                    sameSite: "Strict",
                    secure: true
                }
            );
        },
    },
    watch: {
        isHost() {
            this.saveLobbySettingsCookie();
        },
        battleground() {
            this.saveLobbySettingsCookie();
        },
        loadoutCodes: {
            deep: true,
            handler: function() {
                this.saveLobbySettingsCookie();
            }
        }
    }
};
</script>

<style scoped>
.settings {
    max-width: 500px;
    width: 500px;
}

/* Custom breakpoint for 1/5th division of a row as we have 5 players which we want to show */
@media (min-width: 1700px) {
    .v-col-xl-fifth {
        flex: 0 0 20%;
        max-width: 20%;
    }
}

.player-name:deep(.v-field__input) {
    padding: 0 4px !important;
}

.player-name:deep(.v-field__field) {
    height: 25.6px /* The height of a normal text element in the loçadout preview card */
}

.player-name:deep(.v-label) {
    top: 0;
}
</style>