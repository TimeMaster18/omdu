<template>
    <v-card class="card">
        <div class="image text-center">
            <img :src="trapPart.image">
        </div>
        <v-card-title>{{ trapPart.name }}</v-card-title>
        <v-card-text>
            <!-- Slot -->
            <trap-part-slot-icon
                :trap-part-slot="trapPart.partSlot"
                :size="2"
                show-label
            />

            <!-- Description -->
            <div class="mt-2">
                {{ trapPart.description }}
            </div>

            <!-- Flavor text -->
            <div class="mt-4 font-italic flavor-text">
                {{ trapPart.flavourText }}
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import TrapPartSlotIcon from './TrapPartSlotIcon.vue';

export default {
    components: {
        TrapPartSlotIcon
    },
    props: {
        trapPart: {
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
    line-height: 0;
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

.flavor-text {
	opacity: 0.3;
}
</style>