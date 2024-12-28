import { defineStore } from 'pinia';
import heroes from '../data/heroes';
import traits from '../data/traits';
import gear from '../data/gear';
import traps from '../data/traps';
import trapParts from '../data/trapParts';
import guardians from '../data/guardians';
import enemies from '../data/enemies';
import battlegrounds from '../data/battlegrounds';

export const useDataStore = defineStore('data', {
    state() {
        return {
            heroes: heroes,
            traits: traits,
            gear: gear,
            traps: traps,
            trapParts: trapParts,
            guardians: guardians,
            enemies: Object.values(enemies), // Enemies can be used as an enum, but in this case we just want the list of all enemies
            battlegrounds: battlegrounds
        };
    },
    getters: {
        getHeroById: (state) => (id) => {
            return state.heroes.find(hero => hero.id === id) ?? null;
        }
    },
});