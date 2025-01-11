<template>
    <v-dialog
        v-model="isOpen"
        max-width="1300"
    >
        <v-card>
            <v-card-text>
                <v-row dense>
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <div class="info">
                            <DifficultyCard
                                class="elevation-0 mb-2"
                                :difficulty="battleground.difficulty"
                            />
                            <div class="v-card-title pl-0">
                                {{ battleground.map.name }}
                            </div>
                            <stat-value icon="mdi-waves">
                                {{ battleground.waves }}
                            </stat-value>
                            <stat-value icon="mdi-clock">
                                {{ parTime }}
                            </stat-value>
                            <div class="transparent mt-4 hidden-sm-and-down">
                                {{ battleground.map.description }}
                            </div>
                        </div>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        align="center"
                    >
                        <img
                            class="minimap"
                            :src="battleground.map.minimap"
                        >
                    </v-col>
                    <v-col cols="12">
                        <battleground-enemies-list :battleground="battleground" />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import DifficultyCard from '../DifficultyCard.vue';
import StatValue from '../StatValue.vue';
import BattlegroundEnemiesList from '../BattlegroundEnemiesList.vue';

export default {
    expose: ["open", "close"],
    components: { BattlegroundEnemiesList, DifficultyCard, StatValue },
    data() {
        return {
            isOpen: false,
            battleground: null
        }
    },
    computed: {
        parTime() {
            if(this.battleground.parTime.seconds < 10) {
                return `${this.battleground.parTime.minutes}:0${this.battleground.parTime.seconds}`;
            } else {
                return `${this.battleground.parTime.minutes}:${this.battleground.parTime.seconds}`;
            }
        },
    },
    methods: {
        open(battleground) {
            this.isOpen = true;
            this.battleground = battleground;
        },
        close() {
            this.isOpen = false;
            this.battleground = null;
        }
    }
}
</script>

<style scoped>
.info {
    max-width: 500px;
}

.minimap {
    width: 100%;
    aspect-ratio: 512/512;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
}

.enemy-card {
    min-width: 12rem !important;
	max-width: 14.4rem !important;
}

.transparent {
    opacity: 0.3;
}
</style>