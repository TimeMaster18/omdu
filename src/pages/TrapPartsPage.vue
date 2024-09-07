<template>
	<div>
		<v-row>
			<v-col v-for="trapPart in trapParts" :key="trapPart.id" align="center">
				<trap-part-card class="text-left" :trap-part="trapPart" />
			</v-col>
		</v-row>
	</div>
</template>

<script>
import { useDataStore } from '../stores/data';
import TrapPartCard from '../components/TrapPartCard.vue';

export default {
	setup() {
		const dataStore = useDataStore();
		return {
			dataStore
		};
	},
	components: {
		TrapPartCard
	},
	computed: {
		trapParts() {
			return JSON.parse(JSON.stringify(this.dataStore.trapParts)).sort((a, b) => {
				if (a.partSlot !== b.partSlot) return a.partSlot > b.partSlot;
				else return a.name > b.name;
			});
		}
	}
}
</script>

<style scoped></style>