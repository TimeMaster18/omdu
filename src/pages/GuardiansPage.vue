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
import { useDataStore } from '../stores/data';
import GuardianCard from '../components/GuardianCard.vue';

export default {
	setup() {
		const dataStore = useDataStore();
		return {
			dataStore
		};
	},
	components: {
		GuardianCard
	},
	computed: {
		guardians() {
			return JSON.parse(JSON.stringify(this.dataStore.guardians)).sort((a, b) => a.home.name > b.home.name);
		}
	}
}
</script>

<style scoped></style>