<template>
    <v-card class="card text-start">
        <div class="image text-center">
            <img :src="battleground.map.images[0]">
        </div>
        <v-card-title>
            <battleground-name :battleground="battleground" />
        </v-card-title>
        <v-card-text>
            <battleground-stats
                :battleground="battleground"
                show-enemy-level
                show-waves
                show-par-time
            />
        </v-card-text>
    </v-card>
</template>

<script>
import Difficulty from '../enums/difficulty';
import Gamemode from '../enums/gamemode';
import BattlegroundName from './BattlegroundName.vue';
import BattlegroundStats from './BattlegroundStats.vue';

export default {
    components: {
        BattlegroundName,
        BattlegroundStats
    },
    props: {
        battleground: {
            type: Object,
            required: true
        }
    },
    computed: {
        title() {
            let title = `${this.battleground.map.name} `;
            if(this.battleground.gamemode === Gamemode.Survival) title += `(${this.difficulty})`;
            else if(this.battleground.gamemode === Gamemode.Endless) title += '(Endless)';
            return title;
        },
        difficulty() {
            if(this.battleground.difficulty === Difficulty.Apprentice) return "Apprentice";
            else if(this.battleground.difficulty === Difficulty.WarMage) return "War Mage";
            else if(this.battleground.difficulty === Difficulty.Master) return "Master";
            else if(this.battleground.difficulty === Difficulty.RiftLord) return "Rift Lord";
            else return null;
        },
    }
}
</script>

<style scoped>
.card {
    min-width: 20rem;
	max-width: 24rem;
    height: fit-content;
}

.image {
    background-color: rgb(var(--v-theme-on-surface-loading));
    aspect-ratio: 776/328;
    line-height: 0;
}

.image img {
	image-rendering: optimizeQuality;
    width: 100%;
}
</style>