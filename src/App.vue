<template>
	<v-layout>
		<v-main>
			<v-container fluid>
				<RouterView />
			</v-container>
		</v-main>
		<v-bottom-navigation>
			<v-btn to="heroes">
				<v-icon>mdi-account</v-icon>
				<span>Heroes</span>
			</v-btn>
			<v-btn to="traps">
				<v-icon>mdi-cog</v-icon>
				<span>Traps</span>
			</v-btn>
			<v-btn to="guardians">
				<v-icon>mdi-shield</v-icon>
				<span>Guardians</span>
			</v-btn>
			<v-btn to="maps">
				<v-icon>mdi-map</v-icon>
				<span>Maps</span>
			</v-btn>
			<v-btn to="loadout">
				<v-icon>mdi-package</v-icon>
				<span>Loadout</span>
			</v-btn>
		</v-bottom-navigation>
	</v-layout>
</template>

<script>
import { RouterView } from "vue-router";

export default {

};
</script>

<style>
html {
	-ms-overflow-style: none;
	scrollbar-width: none;
}

html::-webkit-scrollbar {
	display: none;
}
</style>

<style scoped></style>