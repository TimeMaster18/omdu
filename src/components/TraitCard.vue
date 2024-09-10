<template>
    <v-card class="card text-start">
        <div
            v-if="showImage"
            class="image text-center"
        >
            <img :src="trait.image">
        </div>
        <v-card-title v-if="showName">
            {{ trait.name }}
        </v-card-title>
        <v-card-text>
            <!-- Default trait bonus -->
            <div>
                {{ trait.trait }}
            </div>

            <!-- Matching slot trait bonus -->
            <div class="mt-4">
                <trait-slot-icon
                    :trait-slot="trait.slot"
                    :size="2"
                    :inactive="!activeBonus"
                >
                    <div class="ml-2">
                        {{ trait.matchingSlotTrait }}
                    </div>
                </trait-slot-icon>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import TraitSlotIcon from './TraitSlotIcon.vue';

export default {
    components: {
        TraitSlotIcon
    },
    props: {
        trait: {
            type: Object,
            required: true
        },
        showImage:{
            type: Boolean,
            default: false
        },
        showName:{
            type: Boolean,
            default: false
        },
        activeBonus:{
            type: Boolean,
            default: false
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
	margin-top: -1.25rem;
	height: 15rem;
	overflow: hidden;
}

.image img {
	image-rendering: optimizeQuality;
	width: 100%;
}

.inactive-trait-bonus {
    filter: grayscale();
    opacity: 0.5;
}
</style>