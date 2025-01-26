<template>
    <v-card class="card text-start">
        <div class="image text-center">
            <img :src="consumable.image">
        </div>
        <v-card-title>{{ consumable.name }}</v-card-title>
        <v-card-text>
            <!-- Stats -->
            <stat-value icon="mdi-flask-round-bottom">
                {{ consumable.usageLimit }} {{ consumable.usageLimit === 1 ? "use" : "uses" }}
            </stat-value>

            <!-- Effects -->
            <div class="mt-4">
                {{ consumable.effect.primary }}
            </div>

            <!-- Effects -->
            <div
                v-if="consumable.effect.secondary"
                class="mt-4"
            >
                <span v-if="consumable.type === ConsumableType.Potion">
                    Until death: 
                </span>
                {{ consumable.effect.secondary }}
            </div>

            <!-- Flavor text -->
            <div class="mt-4 font-italic flavor-text">
                {{ consumable.flavourText }}
            </div>
            
            <!-- Secondary effects are lost on death and can't be stacked. -->
        </v-card-text>
    </v-card>
</template>

<script>
import ConsumableType from '../enums/consumableType';
import StatValue from './StatValue.vue';

export default {
    components: { StatValue },
    props: {
        consumable: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            ConsumableType
        }
    }
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

.flavor-text {
    opacity: 0.3;
}
</style>