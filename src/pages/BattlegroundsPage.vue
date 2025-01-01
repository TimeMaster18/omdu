<template>
    <div>
        <v-row dense>
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
        <v-row>
            <v-col
                v-for="(battleground, index) in battlegrounds"
                :key="index"
                align="center"
            >
                <battleground-card
                    class="text-left"
                    :battleground="battleground"
                    @click="$refs.battlegroundDialog.open(battleground)"
                />
            </v-col>
        </v-row>
        <battleground-dialog ref="battlegroundDialog" />
    </div>
</template>

<script>
import BattlegroundCard from '../components/BattlegroundCard.vue';
import BattlegroundDialog from '../components/battlegrounds-page/BattlegroundDialog.vue';
import DifficultyCard from '../components/battlegrounds-page/DifficultyCard.vue';
import Difficulty from '../enums/difficulty';
import { useDataStore } from '../stores/data';

export default {
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    components: {
        BattlegroundCard,
        DifficultyCard,
        BattlegroundDialog
    },
    data() {
        return {
            Difficulty,
            difficultyFilter: Difficulty.Apprentice
        }
    },
    computed: {
        battlegrounds() {
            return JSON.parse(JSON.stringify(this.dataStore.battlegrounds))
                .filter(battleground => this.difficultyFilter === battleground.difficulty)
                .sort((a, b) => {
                    if(a.difficulty !== b.difficulty) return a.difficulty > b.difficulty;
                    else return a.name > b.name;
                });
        },
    },
}
</script>

<style scoped>
</style>