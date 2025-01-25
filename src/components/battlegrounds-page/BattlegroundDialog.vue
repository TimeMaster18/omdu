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
                            <battleground-stats :battleground="battleground" />
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
                        <v-alert
                            v-if="battleground.gamemode === Gamemode.Endless"
                            class="mx-2 mb-2"
                            type="warning"
                            variant="outlined"
                            width="fit-content"
                        >
                            Due to incomplete wave data we're only able to show notable enemies
                        </v-alert>
                        <enemies-overview
                            :enemies="battleground.enemies"
                            :total-mercenaries="battleground.mercenaries"
                        />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import Gamemode from '../../enums/gamemode';
import BattlegroundStats from '../BattlegroundStats.vue';
import DifficultyCard from '../DifficultyCard.vue';
import EnemiesOverview from '../EnemiesOverview.vue';

export default {
    expose: ["open", "close"],
    components: {
        DifficultyCard,
        BattlegroundStats,
        EnemiesOverview
    },
    data() {
        return {
            Gamemode,
            
            isOpen: false,
            battleground: null
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

.transparent {
    opacity: 0.3;
}
</style>