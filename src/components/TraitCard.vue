<template>
    <v-card class="card">
        <div class="image text-center">
            <img :src="trait.image">
        </div>
        <v-card-title>{{ trait.name }}</v-card-title>
        <v-card-text>
            <!-- Default trait bonus -->
            <div class="mt-2">
                {{ trait.trait }}
            </div>

            <!-- Matching slot trait bonus -->
            <div class="mt-4">
                <trait-slot-icon
                    :trait-slot="trait.slot"
                    :size="32"
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
	margin-top: -20px;
	height: 240px;
	overflow: hidden;
}

.image img {
	image-rendering: optimizeQuality;
	width: 100%;
}
</style>