<template>
	<div>
		<v-row>
			<v-col v-for="hero in heros" :key="hero.id" align="center">
				<hero-card class="text-left" :hero="hero" />
			</v-col>
		</v-row>
	</div>
</template>
<script>
import HeroCard from "../components/HeroCard.vue";
import Heros from "../enums/heros";

export default {
	components: {
		HeroCard,
	},
	computed: {
		heros() {
			return Heros;
		}
	}
}
</script>

<style scoped></style>