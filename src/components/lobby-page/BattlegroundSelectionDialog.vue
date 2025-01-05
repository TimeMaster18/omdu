<template>
    <v-dialog
        v-model="isOpen"
        transition="scale-transition"
        scrollable
    >
        <template #activator>
            <div>
                <battleground-card
                    v-if="selectedBattleground !== null"
                    :battleground="selectedBattleground"
                    @click="isOpen = true"
                />
                <v-card
                    v-else
                    @click="isOpen = true"
                >
                    <v-card-text>
                        <span class="font-italic no-battleground-selected">
                            No battleground selected
                        </span>
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
import { useDataStore } from '../../stores/data.js';
import DeselectCard from '../loadout-page/DeselectCard.vue';

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
        DeselectCard
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
        }
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
.no-battleground-selected {
	opacity: 0.3;
}

.selected {
    outline: rgb(var(--v-theme-on-surface)) 2px solid;
}
</style>