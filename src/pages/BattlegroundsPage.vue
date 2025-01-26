<template>
    <div>
        <v-row
            dense
            class="justify-center"
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
        <v-row>
            <v-col
                v-for="battleground in battlegrounds"
                :key="battleground.id"
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
import DifficultyCard from '../components/DifficultyCard.vue';
import Difficulty from '../enums/difficulty';
import GamemodeCard from '../components/GamemodeCard.vue';
import Gamemode from '../enums/gamemode.js';
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
        BattlegroundDialog,
        GamemodeCard,
    },
    data() {
        return {
            Difficulty,
            Gamemode,
            filter: Difficulty.Apprentice
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
    },
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
</style>