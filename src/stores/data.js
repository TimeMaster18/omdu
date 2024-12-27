import { defineStore } from 'pinia';
import heroes from '../data/heroes';
import traits from '../data/traits';
import gear from '../data/gear';
import traps from '../data/traps';
import trapParts from '../data/trapParts';
import guardians from '../data/guardians';
import enemies from '../data/enemies';

export const useDataStore = defineStore('data', {
    state() {
        return {
            heroes: heroes,
            traits: traits,
            gear: gear,
            traps: traps,
            trapParts: trapParts,
            guardians: guardians,
            enemies: enemies,
        };
    },
    getters: {
        getHeroById: (state) => (id) => {
            return state.heroes.find(hero => hero.id === id) ?? null;
        }
    },
});