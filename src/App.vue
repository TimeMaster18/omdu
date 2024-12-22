<template>
    <v-layout>
        <v-main>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>
        <v-bottom-navigation show-arrows>
            <v-btn to="heroes">
                <v-icon>mdi-account</v-icon>
                <span>Heroes</span>
            </v-btn>
            <v-btn to="traits">
                <v-icon>mdi-lightning-bolt</v-icon>
                <span>Traits</span>
            </v-btn>
            <v-btn to="gear">
                <v-icon>mdi-ring</v-icon>
                <span>Gear</span>
            </v-btn>
            <v-btn to="traps">
                <v-icon>mdi-cog</v-icon>
                <span>Traps</span>
            </v-btn>
            <v-btn to="trap-parts">
                <v-icon>mdi-wrench</v-icon>
                <span>Trap Parts</span>
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
            <v-btn to="lobby">
                <v-icon>mdi-account-group</v-icon>
                <span>Lobby</span>
            </v-btn>
        </v-bottom-navigation>
    </v-layout>
</template>

<script>
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