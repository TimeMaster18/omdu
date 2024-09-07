<template>
	<div>
		<v-row>
			<v-col v-for="hero in heroes" :key="hero.id" align="center">
				<hero-card class="text-left" :hero="hero" />
			</v-col>
		</v-row>
	</div>
</template>
<script>
import HeroCard from "../components/HeroCard.vue";
import Heroes from "../data/heroes";

export default {
	components: {
		HeroCard,
	},
	computed: {
		heroes() {
			return JSON.parse(JSON.stringify(Heroes)).sort((a, b) => a.name > b.name);
		}
	}
}
</script>

<style scoped></style>