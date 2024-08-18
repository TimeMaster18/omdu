<template>
	<v-card class="card">
		<div class="image text-center">
			<img :src="trap.image" />
		</div>
		<v-card-title>{{ trap.name }}</v-card-title>
		<v-card-text>
			<!-- Stats -->
			<div>
				<v-icon>mdi-select</v-icon>
				<span class="capitalize value ml-2">
					{{ trap.placement }}
				</span>
			</div>
			<div>
				<v-icon>mdi-hand-coin</v-icon>
				<span class="value ml-2">
					{{ trapCost }}
				</span>
			</div>
			<div v-if="trap.max">
				<v-icon>mdi-pound</v-icon>
				<span class="value ml-2">
					Max. {{ trap.max }}
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

			<!-- Description -->
			<div class="mt-4">{{ trap.description }}</div>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		trap: {
			type: Object,
			required: true
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
		}
	}
}
</script>

<style scoped>
.card {
	user-select: none;
	min-width: 250px;
	max-width: 300px;
}

.image {
	height: 180px;
	background-image: url('../assets/images/trap_background.webp');
	background-position: center;
	background-size: cover;
}

.image img {
	image-rendering: optimizeQuality;
	height: 200px;
}

.capitalize {
	text-transform: capitalize;
}

.value {
	display: inline-block;
	vertical-align: middle;
}
</style>