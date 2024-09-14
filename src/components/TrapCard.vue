<template>
    <v-card class="card text-start">
        <div class="image text-center">
            <img :src="trap.image">
        </div>
        <v-card-title>{{ trap.name }}</v-card-title>
        <v-card-text>
            <!-- Stats -->
            <div>
                <v-icon :icon="placementIcon" />
                <span class="capitalize value ml-2">
                    {{ trap.placement }}
                </span>
            </div>
            <div>
                <v-icon>mdi-currency-usd</v-icon>
                <span class="value ml-2">
                    {{ trapCost }}
                </span>
            </div>
            <div v-if="trap.damageType">
                <v-icon>mdi-sword</v-icon>
                <span class="capitalize value ml-2">
                    {{ trap.damageType }}
                </span>
            </div>
            <div v-if="trap.range">
                <v-icon>mdi-bullseye</v-icon>
                <span class="value ml-2">
                    {{ trap.range }}
                </span>
            </div>
            <div v-if="trapSize">
                <v-icon>mdi-axis-arrow</v-icon>
                <span class="value ml-2">
                    {{ trapSize }}
                </span>
            </div>
            <div v-if="trap.max">
                <v-icon>mdi-alert</v-icon>
                <span class="value ml-2">
                    Max. {{ trap.max }}
                </span>
            </div>

            <!-- Description -->
            <div class="mt-4">
                {{ trap.description }}
            </div>

            <!-- Trap part slots -->
            <div v-if="showParts">
                <h3 class="mt-4">
                    Parts
                </h3>
                <div
                    v-for="(trapPartSlot, index) in trap.trapPartSlots"
                    :key="index"
                    class="mt-2"
                >
                    <trap-part-slot-icon
                        :trap-part-slot="trapPartSlot"
                        show-label
                        :size="2"
                    />
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import Placement from '../enums/placement';
import TrapPartSlotIcon from './TrapPartSlotIcon.vue';

export default {
    components: {
        TrapPartSlotIcon
    },
    props: {
        trap: {
            type: Object,
            required: true
        },
        showParts:{
            type: Boolean,
            default: false
        }
    },
    computed: {
        trapSize() {
            if (!this.trap.size) return null;
            return `${this.trap.size[0]} x ${this.trap.size[1]}`;
        },
        trapCost() {
            if (Array.isArray(this.trap.cost)) {
                return `${this.trap.cost[0]} - ${this.trap.cost[this.trap.cost.length - 1]}`
            } else {
                return this.trap.cost;
            }
        },
        placementIcon() {
            if (this.trap.placement === Placement.Walls) return "mdi-arrow-expand-horizontal";
            else if (this.trap.placement === Placement.Ceiling) return "mdi-arrow-collapse-up";
            else if (this.trap.placement === Placement.Floor) return "mdi-arrow-collapse-down";
            else return null;
        },
    }
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
	height: 12.5rem;
}

.capitalize {
	text-transform: capitalize;
}

.value {
	display: inline-block;
	vertical-align: middle;
}
</style>