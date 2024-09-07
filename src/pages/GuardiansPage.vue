<template>
	<div>
		<v-row>
			<v-col v-for="guardian in guardians" :key="guardian.id" align="center">
				<guardian-card class="text-left" :guardian="guardian" />
			</v-col>
		</v-row>
	</div>
</template>
<script>
import GuardianCard from '../components/GuardianCard.vue';
import Guardians from '../data/guardians';

export default {
	components: {
		GuardianCard
	},
	computed: {
		guardians() {
			return JSON.parse(JSON.stringify(Guardians)).sort((a, b) => a.home.name > b.home.name);
		}
	}
}
</script>
<style scoped></style>