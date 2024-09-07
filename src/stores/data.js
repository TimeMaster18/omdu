import { defineStore } from 'pinia';
import heroes from '../data/heroes';
import traits from '../data/traits';
import gear from '../data/gear';
import traps from '../data/traps';
import trapParts from '../data/trapParts';
import guardians from '../data/guardians';

export const useDataStore = defineStore('data', {
	state() {
		return {
			heroes: heroes,
			traits: traits,
			gear: gear,
			traps: traps,
			trapParts: trapParts,
			guardians: guardians
		};
	},
	getters: {

	},
});