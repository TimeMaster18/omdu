<template>
    <v-row dense>
        <v-col cols="fill">
            <div class="d-flex flex-wrap">
                <enemy-card
                    v-for="(enemy, index) in enemies"
                    :key="index"
                    class="mx-2 mb-4 enemy-card"
                    :class="{'selected': enemy.name === selectedEnemy?.name}"
                    :enemy="enemy"
                    @click="toggle(enemy)"
                />
                <v-card
                    v-if="totalMercenaries > 0"
                    class="mx-2 mb-4 enemy-card mercenary-toggle-card"
                    @click="showMercenaries = !showMercenaries"
                >
                    <div>
                        <div>
                            {{ totalMercenaries }} random {{ totalMercenaries === 1 ? "mercenary" : "mercenaries" }}
                        </div>
                        <v-icon class="m-auto">
                            {{ showMercenaries ? "mdi-eye-off" : "mdi-eye" }}
                        </v-icon>
                    </div>
                </v-card>
                <enemy-card
                    v-for="(mercenary, index) in mercenaries"
                    :key="index"
                    class="mx-2 mb-4 enemy-card"
                    :class="{'selected': mercenary.name === selectedEnemy?.name}"
                    :enemy="mercenary"
                    @click="toggle(mercenary)"
                />
            </div>
        </v-col>
        <v-col cols="auto">
            <enemy-card
                v-if="selectedEnemy"
                :enemy="selectedEnemy"
                show-name
                show-stats
                show-abilities
                show-description
            />
        </v-col>
    </v-row>
</template>

<script>
import EnemyCard from './EnemyCard.vue';
import Enemy from '../data/enemies.js';

export default {
    components: {
        EnemyCard
    },
    props: {
        enemies: {
            type: Array,
            required: true
        },
        totalMercenaries: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedEnemy: null,
            showMercenaries: false
        }
    },
    computed: {
        mercenaries() {
            if(this.totalMercenaries === 0) return [];
            if(!this.showMercenaries) return [];

            // We have to manually create the mercenary list as this is the same for every battleground and as such doesn't get included in the battleground data
            return [Enemy.BouncerBear, Enemy.ChaoticKobold, Enemy.DwarfPriest, Enemy.GnollBreeder, Enemy.HumanIMage, Enemy.PrideAssassin];
        }
    },
    methods: {
        toggle(enemy) {
            if(this.selectedEnemy?.name === enemy.name) {
                this.selectedEnemy = null;
            } else {
                this.selectedEnemy = enemy
            }
        }
    }
}
</script>

<style scoped>
.selected {
    outline: 2px solid rgb(var(--v-theme-on-surface));
}

.enemy-card {
    max-width: 9.6rem;
    min-width: 9.6rem;
}

.mercenary-toggle-card {
    display: flex;
    text-align: center;
    align-items: center;

    background-color: rgb(var(--v-theme-on-surface-loading));
	background-image: url('../assets/images/trap_background.webp');
	background-position: center;
	background-size: cover;
    aspect-ratio: 88/89;
}
</style>