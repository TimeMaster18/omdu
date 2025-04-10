<template>
    <div v-if="!isConnected">
        <component-with-tooltip
            width="auto"
            height="auto"
        >
            <template #activator="{props}">
                <v-btn
                    v-bind="props"
                    color="warning"
                    variant="outlined"
                    prepend-icon="mdi-repeat"
                    @click="projectRechainedStore.checkConnection()"
                    :loading="projectRechainedStore.connecting"
                >
                    Reconnect
                </v-btn>
            </template>

            <template #tooltip>
                <v-card class="pointer-event-auto px-2 py-1">
                    To automatically launch games, please make sure the Project Rechained launcher is open and remains running.
                    If you haven't installed the launcher yet, you can follow the installation instructions on <a
                        href="https://github.com/TimeMaster18/Project-Rechained"
                        target="_blank"
                    >Project Rechained's GitHub page</a>.
                </v-card>
            </template>
        </component-with-tooltip>
    </div>
    <div v-else>
        <v-text-field
            v-if="showManualHostIpInput"
            v-model="internalHostIp"
            label="Host's IPv4 address"
            class="host-ip rounded-e-0 border-e-0"
            :class="{'active': readyToLaunch}"
            density="compact"
            single-line
            hide-details
            variant="outlined"
        />

        <v-btn
            color="success"
            variant="outlined"
            class="rounded-e-0 border-e-0"
            :class="showManualHostIpInput ? ['rounded-s-0', 'border-s-0'] : []"
            prepend-icon="mdi-play"
            @click="isHost ? host() : join()"
            :disabled="!readyToLaunch"
            :loading="launching"
        >
            {{ isHost ? "Launch" : "Join" }}
        </v-btn>

        <v-dialog width="700">
            <template #activator="{ props }">
                <v-btn
                    v-bind="props"
                    color="success"
                    variant="outlined"
                    class="rounded-s-0"
                >
                    <v-icon>
                        mdi-cog
                    </v-icon>
                </v-btn>
            </template>

            <template #default="{ isActive }">
                <v-card>
                    <v-card-text class="pb-2">
                        <v-select
                            label="Game language"
                            v-model="projectRechainedStore.language"
                            @update:model-value="projectRechainedStore.saveSettings()"
                            :items="languages"
                            density="comfortable"
                            hide-details
                        />
                        <v-checkbox
                            label="Show trap damage"
                            v-model="projectRechainedStore.showTrapDamage"
                            @update:model-value="projectRechainedStore.saveSettings()"
                            density="comfortable"
                            hide-details
                        />

                        <!-- Mods -->
                        <div v-if="isHost">
                            <div class="v-card-title pl-0">
                                Mods
                            </div>
                            <v-alert
                                class="mb-2"
                                type="warning"
                                variant="outlined"
                                density="compact"
                            >
                                Using mods can lead to unexpected outcomes and can break the game's balance. Some mods won't work in multiplayer.
                            </v-alert>

                            <v-row no-gutters>
                                <v-col
                                    v-for="mod in mods"
                                    :key="mod"
                                    cols="6"
                                >
                                    <v-checkbox
                                        :label="mod"
                                        :model-value="projectRechainedStore.mods.includes(mod)"
                                        @update:model-value="(value) => toggleMod(mod, value)"
                                        density="comfortable"
                                        hide-details
                                    />
                                </v-col>
                            </v-row>

                            <!-- Starting coins -->
                            <v-row
                                no-gutters
                                class="mb-2"
                            >
                                <v-col
                                    cols="6"
                                    class="pr-2"
                                >
                                    <!-- max: 10000000 is just what the old launcher did before us -->
                                    Overwrite starting coins:
                                    <v-text-field
                                        v-model.number="projectRechainedStore.startingCoins"
                                        label="Don't overwrite"
                                        @update:model-value="projectRechainedStore.saveSettings()"
                                        type="number"
                                        :min="0"
                                        :max="10000000"
                                        single-line
                                        density="compact"
                                        hide-details
                                    />
                                </v-col>
                            </v-row>

                            <!-- Overwriting levels -->
                            <v-row
                                no-gutters
                                class="mb-2"
                            >
                                <v-col
                                    cols="6"
                                    class="pr-2"
                                >
                                    Overwrite trap level:
                                    <v-text-field
                                        label="Don't overwrite"
                                        v-model.number="projectRechainedStore.trapLevel"
                                        @update:model-value="projectRechainedStore.saveSettings()"
                                        type="number"
                                        :min="1"
                                        :max="7"
                                        single-line
                                        density="compact"
                                        hide-details
                                    />
                                </v-col>
                                <v-col cols="6">
                                    Overwrite account level:
                                    <v-text-field
                                        label="Don't overwrite"
                                        v-model.number="projectRechainedStore.accountLevel"
                                        @update:model-value="projectRechainedStore.saveSettings()"
                                        type="number"
                                        :min="1"
                                        :max="100"
                                        single-line
                                        density="compact"
                                        hide-details
                                    />
                                </v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                            prepend-icon="mdi-close"
                            variant="outlined"
                            text="Close"
                            @click="isActive.value = false"
                        />
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script>
import { useDataStore } from '../stores/data';
import Language from '../enums/project-rechained/language';
import Mod from '../enums/project-rechained/mod';
import { useProjectRechainedStore } from '../stores/projectRechained';
import ComponentWithTooltip from './ComponentWithTooltip.vue';

export default {
    components: {
        ComponentWithTooltip
    },
    setup() {
        const dataStore = useDataStore();
        const projectRechainedStore = useProjectRechainedStore();
        return {
            dataStore,
            projectRechainedStore,
        };
    },
    props: {
        isHost: {
            type: Boolean,
            default: true
        },
        playerIndex: {
            type: Number,
            default: 0
        },
        loadouts: {
            type: Array,
            required: true
        },
        // Only required for hosting games, not for joining them
        battleground: {
            type: Object,
            required: true
        },
        // Only required for joining games, not for hosting them
        hostIp: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            languages: [...Object.values(Language)],
            mods: [...Object.values(Mod)],

            internalHostIp: null,
            launching: false
        };
    },
    mounted() {
        this.internalHostIp = this.hostIp;
        this.projectRechainedStore.checkConnection();
        this.projectRechainedStore.loadSettings();
    },
    computed: {
        isConnected() {
            return this.projectRechainedStore.connected;
        },
        showManualHostIpInput() {
            // We NEED a host ip to join games. So if none is provided via the properties, we'll show an input field for it
            return !this.isHost && this.hostIp === null;
        },
        readyToLaunch() {
            // We always need at least the host's loadout to start a game
            if(this.loadouts[0] === null || this.loadouts[0] === "") return false;

            if(this.isHost) {
                return this.battleground !== null;
            } else {
                return this.internalHostIp !== null && this.internalHostIp !== "";
            }
        },
    },
    methods: {
        toggleMod(mod, enable) {
            if(enable) {
                this.projectRechainedStore.mods.push(mod);
            } else {
                this.projectRechainedStore.mods = this.projectRechainedStore.mods.filter((selectedMod) => selectedMod !== mod);
            }

            this.projectRechainedStore.saveSettings();
        },
        host() {
            this.launching = true;
            this.projectRechainedStore.hostGame(
                this.loadouts,
                this.battleground
            ).finally(() => {
                this.launching = false;
            });
        },
        join() {
            this.launching = true;
            this.projectRechainedStore.joinGame(
                this.loadouts[this.playerIndex], 
                this.internalHostIp
            ).finally(() => {
                this.launching = false;
            });
        }
    },
    watch: {
        // Update the internal host ip if we ever receive a host ip via the component properties
        hostIp(hostIp) {
            this.internalHostIp = hostIp;
        },
    }
}
</script>

<style scoped>
.host-ip {
    max-width: 200px;
    display: inline-grid;
    width: 200px;
    vertical-align: bottom;
}

.host-ip:deep(.v-field) {
    max-height: 36px;
}

.host-ip:deep(.v-field.v-field-active){
    border-width: 1px;
}

.host-ip:deep(.v-field__input) {
    padding: 0 8px !important;
    min-height: 36px;
    max-height: 36px;
    text-align: end;
}

.host-ip:deep(.v-field__outline) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.host-ip:deep(.v-field__outline>.v-field__outline__start) {
    border-color: rgb(var(--v-theme-success)) !important;
    border-top-width: 1px !important;
    border-bottom-width: 1px !important;
}
.host-ip:deep(.v-field__outline>.v-field__outline__end) {
    border-color: rgb(var(--v-theme-success)) !important;
    border-top-width: 1px !important;
    border-bottom-width: 1px !important;
}

.host-ip.active:deep(.v-field__outline>.v-field__outline__start),
.host-ip.active:deep(.v-field__outline>.v-field__outline__end) {
    opacity: 1 !important;
}

.host-ip:not(.active):deep(.v-field__outline>.v-field__outline__start),
.host-ip:not(.active):deep(.v-field__outline>.v-field__outline__end) {
    opacity: 0.38 !important;
}

.pointer-event-auto {
    pointer-events: auto;
}
</style>