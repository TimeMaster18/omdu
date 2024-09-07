<template>
	<v-card class="card">
		<div class="image text-center">
			<img :src="gear.image" />
		</div>
		<v-card-title>{{ gear.name }}</v-card-title>
		<v-card-text>
			<!-- Stats -->
			<div v-if="gear.cost">
				<v-icon>mdi-water</v-icon>
				<span class="value ml-2">
					{{ gear.cost }}
				</span>
			</div>
			<div v-if="gear.cooldown">
				<v-icon>mdi-clock</v-icon>
				<span class="value ml-2">
					{{ gear.cooldown }}s
				</span>
			</div>

			<!-- Description -->
			<div class="mt-4">
				{{ gear.description }}
			</div>
		</v-card-text>
	</v-card>
</template>

<script>

export default {
	props: {
		gear: {
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
	height: 180px;
	background-image: url('../assets/images/trap_background.webp');
	background-position: center;
	background-size: cover;
}

.image img {
	image-rendering: optimizeQuality;
	height: 180px;
}

.capitalize {
	text-transform: capitalize;
}

.value {
	display: inline-block;
	vertical-align: middle;
}
</style>