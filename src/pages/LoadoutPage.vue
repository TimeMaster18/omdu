<template>
	Coming Soon!
</template>

<script>
import { encode, decode } from '../utils/base62Util.js';

export default {
	mounted() {
		// Encoding build
		let loadout = "Dan-";
		loadout += encode(1) // Hero id
		loadout += encode(0, true) // Skin id
		loadout += encode(3) // Dye id (1, 2, 3)
		loadout += "-"
		for (let index = 0; index < 9; index++) {
			loadout += encode(100, true) // Trap/Item id
		}
		loadout += "-"
		loadout += encode(1) // Guardian id
		loadout += encode(2) // Guardian id
		loadout += "-"
		loadout += encode(0) // Consumable id
		loadout += encode(0) // Consumable id
		loadout += "-"
		loadout += encode(40) // Trait id (pentagon slot)
		loadout += encode(41) // Trait id (diamond slot)
		loadout += encode(42) // Trait id (triangle slot)
		loadout += encode(43) // Trait id (no bonus slot)
		loadout += "-"
		for (let index = 0; index < 9; index++) {
			loadout += encode(22) // Trap part id
			loadout += encode(30) // Trap part id
			loadout += encode(12) // Trap part id
		}
		console.log(loadout);

		// Decoding build
	}
};
</script>

<style scoped></style>