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
                        <battleground-stats :battleground="selectedBattleground" />
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
                    class="mt-2 mx-4"
                    dense
                >
                    <v-col
                        v-for="difficulty in [Difficulty.Apprentice, Difficulty.WarMage, Difficulty.Master, Difficulty.RiftLord]"
                        :key="difficulty"
                        cols="12"
                        sm="6"
                        lg="3"
                    >
                        <difficulty-card
                            :difficulty="difficulty"
                            @click="difficultyFilter = difficulty"
                            :active="difficultyFilter === difficulty"
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
        BattlegroundStats
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

            isOpen: false,
            difficultyFilter: Difficulty.Apprentice,
            selectedBattlegroundId: this.modelValue,
        }
    },
    computed: {
        battlegrounds() {
            return JSON.parse(JSON.stringify(this.dataStore.battlegrounds))
                .filter(battleground => this.difficultyFilter === battleground.difficulty)
                .sort((a, b) => a.name > b.name);
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