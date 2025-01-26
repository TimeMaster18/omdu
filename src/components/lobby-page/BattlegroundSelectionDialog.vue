<template>
    <v-dialog
        v-model="isOpen"
        transition="scale-transition"
        scrollable
    >
        <template #activator>
            <div class="battleground-info-card-wrapper">
                <v-card
                    v-if="selectedBattleground !== null"
                    @click="isOpen = true"
                >
                    <difficulty-card
                        class="elevation-0 rounded-0"
                        :difficulty="selectedBattleground.difficulty"
                    />
                    <div class="text-center">
                        <img
                            class="minimap"
                            :src="selectedBattleground.map.minimap"
                        >
                    </div>
                    <v-card-text>
                        <div class="v-card-title pl-0">
                            {{ selectedBattleground.map.name }}
                        </div>
                        <battleground-stats
                            show-enemy-level
                            show-waves
                            show-par-time
                            :battleground="selectedBattleground"
                        />
                    </v-card-text>
                </v-card>
                <v-card
                    v-else
                    @click="isOpen = true"
                    class="text-center no-battleground-selected-card"
                >
                    <v-card-text class="font-italic no-battleground-selected">
                        No battleground selected
                    </v-card-text>
                </v-card>
            </div>
        </template>

        <template #default>
            <v-card>
                <v-row
                    class="mt-2 mx-4 justify-center"
                    dense
                >
                    <v-col
                        v-for="difficulty in [Difficulty.Apprentice, Difficulty.WarMage, Difficulty.Master, Difficulty.RiftLord]"
                        :key="difficulty"
                        cols="12"
                        sm="6"
                        md="4"
                        class="v-col-lg-fifth"
                    >
                        <difficulty-card
                            :difficulty="difficulty"
                            @click="filter = difficulty"
                            :active="filter === difficulty"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                        class="v-col-lg-fifth"
                    >
                        <gamemode-card
                            :gamemode="Gamemode.Endless"
                            @click="filter = Gamemode.Endless"
                            :active="filter === Gamemode.Endless"
                        />
                    </v-col>
                </v-row>
                <v-card-text>
                    <v-row>
                        <v-col>
                            <deselect-card @click="deselectBattleground()" />
                        </v-col>
                        <v-col
                            v-for="(battleground, index) in battlegrounds"
                            :key="index"
                            align="center"
                        >
                            <battleground-card
                                class="text-left"
                                :battleground="battleground"
                                @click="selectBattleground(battleground)"
                                :class="{'selected': battleground.id === selectedBattlegroundId}"
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import DifficultyCard from '../DifficultyCard.vue';
import Difficulty from '../../enums/difficulty.js';
import BattlegroundCard from '../BattlegroundCard.vue';
import DeselectCard from '../loadout-page/DeselectCard.vue';
import { useDataStore } from '../../stores/data.js';
import BattlegroundStats from '../BattlegroundStats.vue';
import GamemodeCard from '../GamemodeCard.vue';
import Gamemode from '../../enums/gamemode.js';

export default {
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    components: {
        DifficultyCard,
        BattlegroundCard,
        DeselectCard,
        BattlegroundStats,
        GamemodeCard
    },
    emits: ["update:model-value"],
    props: {
        modelValue: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            Difficulty,
            Gamemode,

            isOpen: false,
            filter: Difficulty.Apprentice,
            selectedBattlegroundId: this.modelValue,
        }
    },
    computed: {
        battlegrounds() {
            let battlegrounds = JSON.parse(JSON.stringify(this.dataStore.battlegrounds));
            
            if(this.filter === Gamemode.Endless) {
                battlegrounds = battlegrounds.filter(battleground => battleground.gamemode === Gamemode.Endless);
            } else {
                battlegrounds = battlegrounds.filter(battleground => this.filter === battleground.difficulty && battleground.gamemode === Gamemode.Survival);
            }   

            return battlegrounds.sort((a, b) => a.unlockLevel > b.unlockLevel);
        },
        selectedBattleground() {
            return JSON.parse(JSON.stringify(this.dataStore.battlegrounds))
                .find(battleground => battleground.id === this.selectedBattlegroundId) ?? null;
        },
    },
    methods: {
        selectBattleground(battleground) {
            this.selectedBattlegroundId = battleground.id;
            this.$emit("update:model-value", battleground.id);
            this.isOpen = false;
        },
        deselectBattleground() {
            this.selectedBattlegroundId = null;
            this.$emit("update:model-value", null);
            this.isOpen = false;
        }
    },
    watch: {
        modelValue(battlegroundId) {
            this.selectedBattlegroundId = battlegroundId;
        }
    }
}
</script>

<style scoped>
/* Custom breakpoint for 1/5th division of a row as we have 5 players which we want to show */
@media (min-width: 1280px) {
    .v-col-lg-fifth {
        flex: 0 0 20%;
        max-width: 20%;
    }
}

.battleground-info-card-wrapper {
    max-width: 40rem;
    margin-right: auto;
    margin-left: auto;
}

.no-battleground-selected-card {
    min-height: 20rem;
	height: 100%;
	align-content: center;
}

.no-battleground-selected {
	opacity: 0.3;
}

.minimap {
    width: 100%;
    max-width: 20rem;
}

.selected {
    outline: rgb(var(--v-theme-on-surface)) 2px solid;
}
</style>