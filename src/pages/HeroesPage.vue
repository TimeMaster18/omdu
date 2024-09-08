<template>
    <div>
        <v-row>
            <v-col
                v-for="hero in heroes"
                :key="hero.id"
                align="center"
            >
                <hero-card
                    class="text-left"
                    :hero="hero"
                    show-stats
                    show-abilities
                    show-upgrades
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { useDataStore } from '../stores/data';
import HeroCard from "../components/HeroCard.vue";

export default {
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    components: {
        HeroCard,
    },
    computed: {
        heroes() {
            return JSON.parse(JSON.stringify(this.dataStore.heroes)).sort((a, b) => a.name > b.name);
        },
    }
}
</script>

<style scoped></style>