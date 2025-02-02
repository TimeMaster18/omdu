<template>
    <v-card class="card text-start">
        <div
            v-if="showImage"
            class="image text-center"
        >
            <img :src="guardian.image">
        </div>
        <guardian-home-icon
            class="home-icon"
            :guardian-home="guardian.home"
            size="3"
        />
        <v-card-title>{{ guardian.name }}</v-card-title>
        <v-card-text>
            <!-- Aura description -->
            <div class="mt-2">
                Aura: {{ guardian.aura.description }}
            </div>

            <!-- Description -->
            <div
                v-if="showFlavour"
                class="mt-4 flavour-text"
            >
                {{ guardian.description }}
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import GuardianHomeIcon from './GuardianHomeIcon.vue';

export default {
    components: {
        GuardianHomeIcon
    },
    props: {
        guardian: {
            type: Object,
            required: true
        },
        showImage: {
            type: Boolean,
            default: false
        },
        showFlavour: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style scoped>
.card {
	min-width: 15.625rem;
	max-width: 18.75rem;
    height: fit-content;
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

.home-icon {
	position: absolute;
	right: 0.5rem;
	top: 0.5rem;
}

.flavour-text {
	opacity: 0.3;
}
</style>