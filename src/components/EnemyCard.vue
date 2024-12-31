<template>
    <v-card class="card text-start">
        <div class="image text-center">
            <img :src="enemy.image">
        </div>
        <v-card-title>{{ enemy.name }}</v-card-title>
        <v-card-text>
            <!-- Description -->
            <div class="flavor-text">
                {{ enemy.description }}
            </div>
            
            <!-- Abilities -->
            <h3 class="mt-4">
                Abilities
            </h3>
            <enemy-ability-icon
                v-for="(ability, index) in enemy.abilities"
                :key="index"
                :ability="ability"
                show-label
                :size="2"
                class="mt-2"
            />
        </v-card-text>
    </v-card>
</template>

<script>
import EnemyAbilityIcon from './EnemyAbilityIcon.vue';

export default {
    components: {
        EnemyAbilityIcon,
    },
    props: {
        enemy: {
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
	/* height: 11.25rem; */
    background-color: rgb(var(--v-theme-on-surface-loading));
	background-image: url('../assets/images/trap_background.webp');
	background-position: center;
	background-size: cover;
    aspect-ratio: 88/89;
    line-height: 0;
}

.image img {
	image-rendering: optimizeQuality;
    width: 100%;
}

.flavor-text {
	opacity: 0.3;
}
</style>