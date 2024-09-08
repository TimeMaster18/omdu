<template>
    <div>
        <v-row>
            <v-col
                v-for="gear in gears"
                :key="gear.id"
                align="center"
            >
                <gear-card
                    class="text-left"
                    :gear="gear"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { useDataStore } from '../stores/data';
import GearCard from '../components/GearCard.vue';

export default {
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    components: {
        GearCard
    },
    computed: {
        gears() {
            return JSON.parse(JSON.stringify(this.dataStore.gear)).sort((a, b) => a.name > b.name);
        }
    }
}
</script>

<style scoped></style>