<template>
    <div>
        <v-row>
            <v-col
                v-for="trait in traits"
                :key="trait.id"
                align="center"
            >
                <trait-card
                    class="text-left"
                    :trait="trait"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { useDataStore } from '../stores/data';
import TraitCard from '../components/TraitCard.vue';

export default {
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    components: {
        TraitCard
    },
    computed: {
        traits() {
            return JSON.parse(JSON.stringify(this.dataStore.traits)).sort((a, b) => {
                if (a.slot !== b.slot) return a.slot > b.slot;
                else return a.name > b.name;
            });
        }
    }
}
</script>

<style scoped></style>