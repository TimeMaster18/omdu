<template>
    <div>
        <v-row>
            <v-col
                v-for="(enemy, index) in enemies"
                :key="index"
                align="center"
            >
                <enemy-card
                    class="text-left"
                    :enemy="enemy"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { useDataStore } from '../stores/data';
import EnemyCard from '../components/EnemyCard.vue';

export default {
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    components: {
        EnemyCard
    },
    computed: {
        enemies() {
            return JSON.parse(JSON.stringify(this.dataStore.enemies)).sort((a, b) => a.faction.name > b.faction.name).sort((a, b) => a.name > b.name);
        }
    }
}
</script>

<style scoped></style>