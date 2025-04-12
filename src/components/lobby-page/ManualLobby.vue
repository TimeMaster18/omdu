<template>
    <v-row class="justify-end px-2 mb-3">
        <project-rechained-launch-button
            :is-host="lobbyStore.isHost"
            :player-index="0"
            :loadouts="lobbyStore.loadouts"
            :battleground="battlegroundInfo"
            :host-ip="lobbyStore.hostIp"
            class="mr-2"
        />
        <v-btn
            prepend-icon="mdi-lan-disconnect"
            color="error"
            variant="outlined"
            @click="lobbyStore.disconnect()"
        >
            Disconnect
        </v-btn>
    </v-row>
    <div v-if="lobbyStore.isHost">
        <v-row class="justify-center">
            <v-col
                v-for="(code, index) in lobbyStore.loadouts"
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
                            v-model="lobbyStore.loadouts[index]"
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
                <battleground-selection-dialog v-model="lobbyStore.battleground" />
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
        <loadout-editor
            v-model="playerLoadoutCode"
            :fixed-player-name="playerName"
        />
    </div>
</template>

<script>
import LoadoutDialog from './LoadoutDialog.vue';
import LoadoutPreviewCard from './LoadoutPreviewCard.vue';
import { useDataStore } from '../../stores/data.js';
import BattlegroundSelectionDialog from './BattlegroundSelectionDialog.vue';
import EnemiesOverview from '../EnemiesOverview.vue';
import Gamemode from '../../enums/gamemode.js';
import ProjectRechainedLaunchButton from './ProjectRechainedLaunchButton.vue';
import LoadoutEditor from '../LoadoutEditor.vue';
import { useManualLobbyStore } from '../../stores/manualLobby.js';
import Cookies from 'js-cookie';
import CookieName from '../../enums/cookieName.js';

export default {
    components: {
        LoadoutPreviewCard,
        BattlegroundSelectionDialog,
        LoadoutDialog,
        EnemiesOverview,
        ProjectRechainedLaunchButton,
        LoadoutEditor
    },
    setup() {
        const dataStore = useDataStore();
        const lobbyStore = useManualLobbyStore();
        return {
            dataStore,
            lobbyStore
        };
    },
    data() {
        return {
            Gamemode,
            playerName: Cookies.get(CookieName.PlayerName) ?? null,
        }
    },
    computed: {
        battlegroundInfo() {
            return JSON.parse(JSON.stringify(this.dataStore.battlegrounds))
                .find(battleground => battleground.id === this.lobbyStore.battleground) ?? null
        },
        playerLoadoutCode: {
            // User is always player 0:
            //  - When hosting (because the host is always player 0)
            //  - When joining (because they don't have any clue about other players so there's only 1 player they need to keep track of)
            get() {
                return this.lobbyStore.loadouts[0];
            },
            set(loadoutCode) {
                this.lobbyStore.loadouts[0] = loadoutCode;
            }
        }
    },
    methods: {
        openLoadoutDialog() {
            this.$refs.loadoutDialog.open();
        },
    },
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