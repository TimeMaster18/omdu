<template>
	<div>
		<v-row>
			<v-col v-for="trap in traps" :key="trap.id" align="center">
				<trap-card class="text-left" :trap="trap" />
			</v-col>
		</v-row>
	</div>
</template>
<script>
import TrapCard from '../components/TrapCard.vue';
import Traps from '../enums/traps';

export default {
	components: {
		TrapCard
	},
	computed: {
		traps() {
			return JSON.parse(JSON.stringify(Traps)).sort((a, b) => a.name > b.name);
		}
	}
}
</script>
<style scoped></style>