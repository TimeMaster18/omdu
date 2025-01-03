<template>
    <v-card class="card text-start">
        <div class="image text-center">
            <img :src="enemy.image">
        </div>
        <v-card-title>{{ enemy.name }}</v-card-title>
        <v-card-text>
            <!-- Stats -->
            <stat-value icon="mdi-heart">
                <span v-if="enemy.hp">
                    {{ enemy.hp }}
                </span>
                <span
                    v-else
                    class="font-italic transparent"
                >
                    Unknown
                </span>
            </stat-value>

            <!-- Abilities -->
            <enemy-ability-icon
                v-for="(ability, index) in enemy.abilities"
                :key="index"
                :ability="ability"
                show-label
                :size="2"
                class="mt-2"
            />

            <!-- Description -->
            <div
                v-if="showDescription"
                class="mt-4 transparent"
            >
                {{ enemy.description }}
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import EnemyAbilityIcon from './EnemyAbilityIcon.vue';
import StatValue from './StatValue.vue';

export default {
    components: {
        EnemyAbilityIcon,
        StatValue,
    },
    props: {
        enemy: {
            type: Object,
            required: true
        },
        showDescription: {
            type: Boolean,
            default: false
        }
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

.transparent {
	opacity: 0.3;
}
</style>