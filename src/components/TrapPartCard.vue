<template>
    <v-card class="card text-left">
        <div class="image text-center">
            <img :src="trapPart.image">
        </div>
        <v-card-title>{{ trapPart.name }}</v-card-title>
        <v-card-text>
            <!-- Slot -->
            <trap-part-slot-icon
                v-if="showSlotIcon"
                :trap-part-slot="trapPart.partSlot"
                :size="2"
                show-label
                class="mb-2"
            />

            <!-- Description -->
            <div>
                {{ trapPart.description }}
            </div>

            <!-- Flavor text -->
            <div
                v-if="showFlavour"
                class="mt-4 font-italic flavor-text"
            >
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
        },
        showSlotIcon:{
            type: Boolean,
            default:false
        },
        showFlavour:{
            type: Boolean,
            default:false
        }
    },
}
</script>

<style scoped>
.card {
	user-select: none;
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

.flavor-text {
	opacity: 0.3;
}
</style>