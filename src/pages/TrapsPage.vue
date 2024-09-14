<template>
    <div>
        <v-row>
            <v-col
                v-for="trap in traps"
                :key="trap.id"
                align="center"
            >
                <trap-card
                    class="text-left"
                    :trap="trap"
                    show-image
                    show-name
                    show-stats
                    show-description
                    show-parts
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { useDataStore } from '../stores/data';
import TrapCard from '../components/TrapCard.vue';

export default {
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    components: {
        TrapCard
    },
    computed: {
        traps() {
            return JSON.parse(JSON.stringify(this.dataStore.traps)).sort((a, b) => a.name > b.name);
        }
    }
}
</script>

<style scoped></style>