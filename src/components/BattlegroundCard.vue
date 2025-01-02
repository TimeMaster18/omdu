<template>
    <v-card class="card text-start">
        <div class="image text-center">
            <img :src="battleground.map.images[0]">
        </div>
        <v-card-title>{{ battleground.map.name }} ({{ difficulty }})</v-card-title>
        <v-card-text>
            <!-- Stats -->
            <stat-value icon="mdi-waves">
                {{ battleground.waves }}
            </stat-value>
            <stat-value icon="mdi-clock">
                {{ battleground.parTime.minutes }}:{{ battleground.parTime.seconds }}
            </stat-value>
        </v-card-text>
    </v-card>
</template>

<script>
import Difficulty from '../enums/difficulty';
import StatValue from './StatValue.vue';

export default {
    components: {
        StatValue
    },
    props: {
        battleground: {
            type: Object,
            required: true
        }
    },
    computed: {
        difficulty() {
            if(this.battleground.difficulty === Difficulty.Apprentice) return "Apprentice";
            else if(this.battleground.difficulty === Difficulty.WarMage) return "War Mage";
            else if(this.battleground.difficulty === Difficulty.Master) return "Master";
            else if(this.battleground.difficulty === Difficulty.RiftLord) return "Rift Lord";
            else return null;
        }
    }
}
</script>

<style scoped>
.card {
	user-select: none;
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