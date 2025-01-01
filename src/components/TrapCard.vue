<template>
    <v-card class="card text-start">
        <div
            v-if="showImage"
            class="image text-center"
        >
            <img :src="trap.image">
        </div>
        <v-card-title v-if="showName">
            {{ trap.name }}
        </v-card-title>
        <v-card-text>
            <!-- Stats -->
            <div v-if="showStats">
                <stat-value
                    v-if="trap.damageType"
                    :icon="placementIcon"
                >
                    <span class="capitalize">
                        {{ trap.placement }}
                    </span>
                </stat-value>
                <stat-value icon="mdi-currency-usd">
                    {{ trapCost }}
                </stat-value>
                <stat-value
                    v-if="trap.damageType"
                    icon="mdi-sword"
                >
                    <span class="capitalize">
                        {{ trap.damageType }}
                    </span>
                </stat-value>
                <stat-value
                    v-if="trap.range"
                    icon="mdi-bullseye"
                >
                    {{ trap.range }}
                </stat-value>
                <stat-value
                    v-if="trapSize"
                    icon="mdi-axis-arrow"
                >
                    {{ trapSize }}
                </stat-value>
                <stat-value
                    v-if="trap.max"
                    icon="mdi-alert"
                >
                    Max. {{ trap.max }}
                </stat-value>
            </div>

            <!-- Description -->
            <div
                v-if="showDescription"
                class="mt-4"
            >
                {{ trap.description }}
            </div>

            <!-- Trap part slots -->
            <div v-if="showParts">
                <h3 class="mt-4">
                    Parts
                </h3>
                <trap-part-slot-icon
                    v-for="(trapPartSlot, index) in trap.trapPartSlots"
                    :key="index"
                    class="mt-2"
                    :trap-part-slot="trapPartSlot"
                    show-label
                    :size="2"
                />
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import Placement from '../enums/placement';
import StatValue from './StatValue.vue';
import TrapPartSlotIcon from './TrapPartSlotIcon.vue';

export default {
    components: {
        TrapPartSlotIcon,
        StatValue
    },
    props: {
        trap: {
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
        showStats:{
            type: Boolean,
            default: false
        },
        showDescription:{
            type: Boolean,
            default: false
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
</style>