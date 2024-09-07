<template>
	<v-text-field label="Firebase secret" variant="outlined" hide-details v-model="firebaseSecret" type="password"/>
	<v-btn color="primary" @click="setFirebaseSecret">
		Apply
	</v-btn>

	<h2 class="mt-8">Some testing</h2>
	<div @click="setPlayerLoadout(1, 'Daan-C0n1-2L2H1e2B1g1k3P3G2P-BI-00-000c-H00M00R00A00M00500000000C00')">
		Adjust 1 Daan
	</div>
	<div @click="setPlayerLoadout(1, 'Dan-C0n1-2L2H1e2B1g1k3P3G2P-BI-00-000c-H00M00R00A00M00500000000C00')">
		Adjust 1 Dan
	</div>
	<div @click="setPlayerLoadout(2, 'Daan-C0n1-2L2H1e2B1g1k3P3G2P-BI-00-000c-H00M00R00A00M00500000000C00')">
		Adjust 2 Daan
	</div>
	<div @click="setPlayerLoadout(2, 'Dan-C0n1-2L2H1e2B1g1k3P3G2P-BI-00-000c-H00M00R00A00M00500000000C00')">
		Adjust 2 Dan
	</div>
	{{ player1Loadout }}
</template>

<script>
import { database } from '../firebase.js';
import { set, ref } from 'firebase/database';
import Cookies from 'js-cookie';
import cookieNames from '../enums/cookieNames.js';

export default {
	data() {
		return {
			firebaseSecret: Cookies.get(cookieNames.FirebaseSecret) ?? null,

			playerLoadouts: []
		}
	},
	firebase: {
		playerLoadouts: ref(database, 'player-loadouts')
	},
	computed: {
		player1Loadout() {
			return this.playerLoadouts.find((loadout) => loadout.id === "player-1")
		}
	},
	methods: {
		setFirebaseSecret() {
			// Set the cookie for 10 years
			Cookies.set(cookieNames.FirebaseSecret, this.firebaseSecret, 365);
			location.reload();
		},
		setPlayerLoadout(playerNumber, loadoutString) {
			set(ref(database, `player-loadouts/player-${playerNumber}`), loadoutString);
		},
	},
};
</script>

<style scoped></style>