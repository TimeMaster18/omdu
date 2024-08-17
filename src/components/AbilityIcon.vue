<template>
	<icon-with-tooltip :icon="ability.icon">
		<div class="name">
			{{ ability.name }}
		</div>
		<div v-if="abilityCost">
			<v-icon>mdi-water</v-icon>
			<span class="value ml-2"> {{ abilityCost }}</span>
		</div>
		<div v-if="ability.cooldown">
			<v-icon>mdi-clock</v-icon>
			<span class="value ml-2"> {{ ability.cooldown }}s</span>
		</div>
		<div class="mt-2">
			{{ ability.description }}
		</div>
	</icon-with-tooltip>
</template>

<script>
import IconWithTooltip from "./IconWithTooltip.vue";
export default {
	components: { IconWithTooltip },
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

<style>
.tooltip {
	border-style: solid;
	border-width: 1px;
	border-color: rgb(var(--v-theme-on-surface));
	background: rgb(var(--v-theme-surface)) !important;
	color: rgb(var(--v-theme-on-surface)) !important;
}

.icon {
	width: 64px;
	height: 64px;
	aspect-ratio: 1/1;
}

.name {
	font-size: 1.2em;
}

.value {
	display: inline-block;
	vertical-align: middle;
}
</style>