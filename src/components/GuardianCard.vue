<template>
    <v-card class="card">
        <div class="image text-center">
            <img :src="guardian.image">
        </div>
        <img
            :src="guardian.home.icon"
            class="home-icon"
        >
        <v-card-title>{{ guardian.name }}</v-card-title>
        <v-card-text>
            <!-- Description -->
            <div class="mt-2">
                Aura: {{ guardian.aura.description }}
            </div>

            <!-- Description -->
            <div class="mt-4 flavor-text">
                {{ guardian.description }}
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        guardian: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
.card {
	user-select: none;
	min-width: 15.625rem;
	max-width: 18.75rem;
}

.image {
	height: 11.25rem;
	background-image: url('../assets/images/trap_background.webp');
	background-position: center;
	background-size: cover;
}

.image img {
	image-rendering: optimizeQuality;
	height: 11.25rem;
}

.home-icon {
	height: 3rem;
	position: absolute;
	right: 1rem;
	top: 1rem;
}

.flavor-text {
	opacity: 0.3;
}
</style>