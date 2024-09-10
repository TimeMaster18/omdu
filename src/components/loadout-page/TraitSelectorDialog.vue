<template>
    <v-dialog
        v-model="isOpen"
        transition="scale-transition"
        scrollable
        max-width="1400"
        width="auto"
    >
        <template #activator>
            <div :class="activatorClass">
                <trait-card
                    v-if="selectedTrait"
                    @click="isOpen = true"
                    :trait="selectedTrait"
                    :active-bonus="bonusSlot !== null && selectedTrait.slot.name === bonusSlot.name"
                    class="trait-card"
                />
                <v-card
                    v-else
                    @click="isOpen = true"
                >
                    <v-card-text>
                        <trait-slot-icon
                            :trait-slot="bonusSlot"
                            :size="2"
                            inactive
                        >
                            <span class="font-italic no-trait-selected">
                                No trait selected
                            </span>
                        </trait-slot-icon>
                    </v-card-text>
                </v-card>
            </div>
        </template>

        <template #default>
            <v-card>
                <v-tabs
                    v-model="currentTab"
                    align-tabs="center"
                    style="min-height: 3rem"
                >
                    <v-tab
                        v-for="traitSlot in traitSlots"
                        :key="traitSlot.name"
                        :value="traitSlot.name"
                    >
                        <trait-slot-icon
                            class="mb-1"
                            :trait-slot="traitSlot"
                            show-label
                            :size="2"
                        />
                    </v-tab>
                </v-tabs>

                <v-card-text class="pt-2">
                    <v-tabs-window
                        v-model="currentTab"
                        class="pa-1"
                    >
                        <v-tabs-window-item
                            v-for="traitSlot in traitSlots"
                            :key="traitSlot.name"
                            :value="traitSlot.name"
                        >
                            <v-row dense>
                                <v-col
                                    v-for="trait in traits(traitSlot)"
                                    :key="trait.id"
                                    align="center"
                                >
                                    <trait-card
                                        :trait="trait"
                                        show-image
                                        show-name
                                        :active-bonus="bonusSlot !== null && trait.slot.name === bonusSlot.name"
                                        :class="{'selected': trait.id === selectedTraitId}"
                                        @click="selectTrait(trait)"
                                    />
                                </v-col>
                            </v-row>
                        </v-tabs-window-item>
                    </v-tabs-window>
                </v-card-text>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import { useDataStore } from '../../stores/data';
import TraitSlotIcon from '../TraitSlotIcon.vue';
import TraitSlot from '../../enums/traitSlot';
import TraitCard from '../TraitCard.vue';

export default {
    emits: ['update:model-value'],
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    props:{
        modelValue:{
            type: Number,
            required: true
        },
        activatorClass:{
            type: String,
            default: null
        },
        // Type of the bonus slot
        bonusSlot:{
            type: Object,
            default: null
        }
    },
    components:{
        TraitCard,
        TraitSlotIcon,
    },
    data() {
        return {
            TraitSlot,

            isOpen: false,
            currentTab: "pentagon",
            traitSlots: [
                TraitSlot.Pentagon,
                TraitSlot.Diamond,
                TraitSlot.Triangle,
            ],
            selectedTraitId: null
        }
    },
    mounted(){
        if(this.bonusSlot) this.currentTab = this.bonusSlot.name;
    },
    computed: {
        selectedTrait(){
            return this.dataStore.traits.find(trait => trait.id === this.selectedTraitId) ?? null;
        },

        traits(){
            return (traitSlot)=>{
                return JSON.parse(JSON.stringify(this.dataStore.traits))
                    .filter((trait) => trait.slot.name === traitSlot.name)
                    .sort((a, b) => a.name > b.name);
            }
        },
    },
    methods:{
        selectTrait(trait) {
            this.selectedTraitId = trait.id;
            this.isOpen = false;
        }
    },
    watch: {
        // All this is to keep the v-model synced
        selectedTrait(){
            this.$emit("update:model-value", this.selectedTrait?.id);
        },
        modelValue(traitId){
            this.selectedTraitId = traitId;
        }
    }
}
</script>

<style scoped>
.trait-card {
    min-width: none;
    max-width: none;
}

.no-trait-selected {
	opacity: 0.3;
}

.selected {
    outline: rgb(var(--v-theme-on-surface)) 2px solid;
}
</style>