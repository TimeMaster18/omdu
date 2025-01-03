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
                        <div v-if="minions.length > 0">
                            <div class="mx-2 pl-0 v-card-title">
                                Minions
                            </div>
                            <div class="d-flex flex-wrap">
                                <enemy-card
                                    v-for="(minion, index) in minions"
                                    :key="index"
                                    class="ma-2 enemy-card"
                                    :enemy="minion"
                                />
                            </div>
                        </div>

                        <div
                            v-if="this.battleground.mercenaries > 0"
                            class="mt-4"
                        >
                            <div class="mx-2 pl-0 v-card-title">
                                Mercenaries ({{ this.battleground.mercenaries }} randomly selected)
                            </div>
                            <div class="d-flex flex-wrap">
                                <enemy-card
                                    v-for="(mercenary, index) in mercenaries"
                                    :key="index"
                                    class="ma-2 enemy-card"
                                    :enemy="mercenary"
                                />
                            </div>
                        </div>

                        <div v-if="bosses.length > 0">
                            <div class="mx-2 mt-4 pl-0 v-card-title">
                                Bosses
                            </div>
                            <div class="d-flex flex-wrap">
                                <enemy-card
                                    v-for="(boss, index) in bosses"
                                    :key="index"
                                    class="ma-2 enemy-card"
                                    :enemy="boss"
                                />
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import EnemyCard from '../EnemyCard.vue';
import DifficultyCard from './DifficultyCard.vue';
import StatValue from '../StatValue.vue';
import Enemy from '../../data/enemies.js';
import EnemyType from '../../enums/enemyType';

export default {
    expose: ["open", "close"],
    components: { EnemyCard, DifficultyCard, StatValue },
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
        minions() {
            if(this.battleground === null) return [];

            return JSON.parse(JSON.stringify(this.battleground.enemies))
                .filter(enemy => enemy.type === EnemyType.Minion)
                .sort((a, b) => {
                    if(a.faction.name !== b.faction.name) return a.faction.name > b.faction.name;
                    else return a.name > b.name
                });
        },
        bosses() {
            if(this.battleground === null) return [];

            return JSON.parse(JSON.stringify(this.battleground.enemies))
                .filter(enemy => enemy.type === EnemyType.Boss)
                .sort((a, b) => {
                    if(a.faction.name !== b.faction.name) return a.faction.name > b.faction.name;
                    else return a.name > b.name
                });
        },
        mercenaries() {
            if(this.battleground === null) return [];
            if(this.battleground.mercenaries === 0) return [];

            // We have to manually create the mercenary list as this is the same for every battleground and as such doesn't get included in the battleground data
            return [Enemy.BouncerBear, Enemy.ChaoticKobold, Enemy.DwarfPriest, Enemy.GnollBreeder, Enemy.HumanIMage, Enemy.PrideAssassin]
                .sort((a, b) => {
                    if(a.faction.name !== b.faction.name) return a.faction.name > b.faction.name;
                    else return a.name > b.name
                });
        }
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

<style>
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