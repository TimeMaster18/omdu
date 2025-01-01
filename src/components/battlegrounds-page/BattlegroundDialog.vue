<template>
    <v-dialog v-model="isOpen">
        <v-card>
            <v-card-text>
                <v-row>
                    <v-col cols="3">
                        <DifficultyCard
                            class="elevation-0"
                            :difficulty="battleground.difficulty"
                        />
                        <img
                            class="minimap"
                            :src="battleground.map.minimap"
                        >
                        <div class="v-card-title px-0">
                            {{ battleground.map.name }}
                        </div>
                        <stat-value icon="mdi-waves">
                            {{ battleground.waves }}
                        </stat-value>
                        <stat-value icon="mdi-clock">
                            {{ battleground.parTime.minutes }}:{{ battleground.parTime.seconds }}
                        </stat-value>
                    </v-col>
                    <v-col cols="9">
                        <v-row dense>
                            <v-col
                                v-for="(enemy, index) in enemies"
                                :key="index"
                                align="center"
                            >
                                <enemy-card
                                    class="text-left enemy-card"
                                    :enemy="enemy"
                                />
                            </v-col>
                        </v-row>
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
        enemies() {
            if(this.battleground === null) return [];

            return JSON.parse(JSON.stringify(this.battleground.enemies))
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
.minimap {
    width: 100%;
    aspect-ratio: 512/512;
}

.enemy-card {
    min-width: 12rem !important;
	max-width: 14.4rem !important;
}
</style>