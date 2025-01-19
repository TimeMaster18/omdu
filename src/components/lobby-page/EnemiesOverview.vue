<template>
    <v-row dense>
        <v-col cols="fill">
            <div class="d-flex flex-wrap">
                <enemy-card
                    v-for="(enemy, index) in enemies"
                    :key="index"
                    class="ma-2 enemy-card"
                    :class="{'selected': enemy.name === selectedEnemy?.name}"
                    :enemy="enemy"
                    @click="toggle(enemy)"
                />
            </div>
        </v-col>
        <v-col cols="auto">
            <enemy-card
                v-if="selectedEnemy"
                :enemy="selectedEnemy"
                show-name
                show-health
                show-abilities
                show-description
            />
        </v-col>
    </v-row>
</template>

<script>
import EnemyCard from '../EnemyCard.vue';

export default {
    components: {
        EnemyCard
    },
    props: {
        enemies: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedEnemy: null
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
    min-width: 8rem;
	max-width: 9.6rem;
}
</style>