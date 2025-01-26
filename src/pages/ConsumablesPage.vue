<template>
    <div>
        <v-row>
            <v-col
                v-for="consumable in consumables"
                :key="consumable.id"
                align="center"
            >
                <consumable-card
                    class="text-left"
                    :consumable="consumable"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { useDataStore } from '../stores/data';
import ConsumableCard from '../components/ConsumableCard.vue';

export default {
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    components: {
        ConsumableCard
    },
    computed: {
        consumables() {
            return JSON.parse(JSON.stringify(this.dataStore.consumables)).sort((a, b) => a.name > b.name);
        }
    }
}
</script>

<style scoped></style>