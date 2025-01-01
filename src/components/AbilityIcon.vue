<template>
    <icon-with-tooltip :icon="ability.icon">
        <div class="name">
            {{ ability.name }}
        </div>
        <stat-value
            v-if="abilityCost"
            icon="mdi-water"
        >
            {{ abilityCost }}
        </stat-value>
        <stat-value
            v-if="ability.cooldown"
            icon="mdi-clock"
        >
            {{ ability.cooldown }}s
        </stat-value>
        <div class="mt-2">
            {{ ability.description }}
        </div>
    </icon-with-tooltip>
</template>

<script>
import IconWithTooltip from "./IconWithTooltip.vue";
import StatValue from './StatValue.vue';

export default {
    components: { IconWithTooltip, StatValue },
    props: {
        ability: {
            type: Object,
            required: true,
        },
    },
    computed: {
        abilityCost() {
            if (!this.ability.cost) return null;

            if (Array.isArray(this.ability.cost)) {
                // Abilities with an incremental cost
                return this.ability.cost.join(" > ");
            } else if (typeof this.ability.cost === "object") {
                // Abilities with an initial cost and a per second cost while it's active
                const perSecond = `${this.ability.cost.perSecond}/s`;
                if (this.ability.cost.base) {
                    return `${this.ability.cost.base} + ${perSecond}`;
                } else {
                    return perSecond;
                }
            } else {
                return this.ability.cost;
            }
        },
    },
};
</script>

<style scoped>
.name {
	font-size: 1.2em;
}
</style>