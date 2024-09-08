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
	min-width: 250px;
	max-width: 300px;
}

.image {
	height: 180px;
	background-image: url('../assets/images/trap_background.webp');
	background-position: center;
	background-size: cover;
}

.image img {
	image-rendering: optimizeQuality;
	height: 180px;
}

.home-icon {
	height: 48px;
	position: absolute;
	right: 16px;
	top: 16px;
}

.flavor-text {
	opacity: 0.3;
}
</style>