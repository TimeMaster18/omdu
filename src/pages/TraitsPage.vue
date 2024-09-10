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
import TraitSlot from '../enums/traitSlot';

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
                // Order alphabetically within the same trait slot type 
                if(a.slot.name === b.slot.name) return a.name > b.name;

                // Order by amount of sides of the trait slot icon
                let aSlotOrderValue = 0;
                if(a.slot.name == TraitSlot.Pentagon.name) aSlotOrderValue = 1;
                else if(a.slot == TraitSlot.Diamond.name) aSlotOrderValue = 2;
                else if(a.slot.name == TraitSlot.Triangle.name) aSlotOrderValue = 3;

                let bSlotOrderValue = 0;
                if(b.slot.name == TraitSlot.Pentagon.name) bSlotOrderValue = 1;
                else if(b.slot.name == TraitSlot.Diamond.name) bSlotOrderValue = 2;
                else if(b.slot.name == TraitSlot.Triangle.name) bSlotOrderValue = 3;

                return aSlotOrderValue - bSlotOrderValue;
            });
        }
    }
}
</script>

<style scoped></style>