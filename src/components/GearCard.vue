<template>
    <v-card class="card text-start">
        <div class="image text-center">
            <img :src="gear.image">
        </div>
        <v-card-title>{{ gear.name }}</v-card-title>
        <v-card-text>
            <!-- Stats -->
            <stat-value
                v-if="gear.cost"
                icon="mdi-water"
            >
                {{ gear.cost }}
            </stat-value>
            <stat-value
                v-if="gear.cooldown"
                icon="mdi-clock"
            >
                {{ gear.cooldown }}s
            </stat-value>

            <!-- Description -->
            <div class="mt-4">
                {{ gear.description }}
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import StatValue from './StatValue.vue';

export default {
    components: { StatValue },
    props: {
        gear: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
.card {
	min-width: 15.625rem;
	max-width: 18.75rem;
    height: fit-content;
    line-height: 0;
}

.image {
	height: 11.25rem;
    background-color: rgb(var(--v-theme-on-surface-loading));
	background-image: url('../assets/images/trap_background.webp');
	background-position: center;
	background-size: cover;
}

.image img {
	image-rendering: optimizeQuality;
	height: 11.25rem;
}

.capitalize {
	text-transform: capitalize;
}
</style>