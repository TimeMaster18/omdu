<template>
    <div>
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
            class="mt-2"
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
            <div class="mx-2 mt-2 pl-0 v-card-title">
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
    </div>
</template>

<script>
import EnemyCard from '../EnemyCard.vue';
import Enemy from '../../data/enemies.js';
import EnemyType from '../../enums/enemyType.js';

export default {
    components: { EnemyCard },
    props: {
        battleground: {
            type: Object,
            required: true
        }
    },
    computed: {
        minions() {
            if(this.battleground === null) return [];

            return JSON.parse(JSON.stringify(this.battleground.enemies))
                .filter(enemy => enemy.type === EnemyType.Minion);
        },
        bosses() {
            if(this.battleground === null) return [];

            return JSON.parse(JSON.stringify(this.battleground.enemies))
                .filter(enemy => enemy.type === EnemyType.Boss)
                .sort((a, b) =>  a.name > b.name);
        },
        mercenaries() {
            if(this.battleground === null) return [];
            if(this.battleground.mercenaries === 0) return [];

            // We have to manually create the mercenary list as this is the same for every battleground and as such doesn't get included in the battleground data
            return [Enemy.BouncerBear, Enemy.ChaoticKobold, Enemy.DwarfPriest, Enemy.GnollBreeder, Enemy.HumanIMage, Enemy.PrideAssassin];
        }
    },
}
</script>

<style scoped>
.enemy-card {
    min-width: 12rem;
	max-width: 14.4rem;
}

.transparent {
    opacity: 0.3;
}
</style>