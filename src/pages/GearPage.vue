<template>
	<div>
		<v-row>
			<v-col v-for="gear in gears" :key="gear.id" align="center">
				<gear-card class="text-left" :gear="gear" />
			</v-col>
		</v-row>
	</div>
</template>
<script>
import GearCard from '../components/GearCard.vue';
import gear from '../data/gear.js';

export default {
	components: {
		GearCard
	},
	computed: {
		gears() {
			return JSON.parse(JSON.stringify(gear)).sort((a, b) => a.name > b.name);
		}
	}
}
</script>
<style scoped></style>