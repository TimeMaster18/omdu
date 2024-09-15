<template>
    <v-dialog
        v-model="isOpen"
        transition="scale-transition"
        scrollable
        max-width="1400"
        width="auto"
    >
        <template #activator>
            <v-card
                class="slot-item-card text-center"
                @click="isOpen = true"
                :class="activatorClass"
            >
                <img
                    v-if="selectedSlotItem !== null"
                    :src="selectedSlotItem?.image"
                >
                <v-card-text
                    v-else
                    class="font-italic no-slot-item-selected"
                >
                    No slot item selected
                </v-card-text>
            </v-card>
        </template>

        <template #default>
            <v-card>
                <v-tabs
                    v-model="currentTab"
                    align-tabs="center"
                    style="min-height: 3rem"
                >
                    <v-tab value="traps">
                        <v-icon>mdi-cog</v-icon>
                        <span class="ml-1">Traps</span>
                    </v-tab>
                    <v-tab value="gear">
                        <v-icon>mdi-ring</v-icon>
                        <span class="ml-1">Gear</span>
                    </v-tab>
                </v-tabs>

                <v-card-text class="pt-2">
                    <v-tabs-window
                        v-model="currentTab"
                        class="pa-1"
                    >
                        <v-tabs-window-item value="traps">
                            <v-row dense>
                                <v-col
                                    v-for="trap in traps"
                                    :key="trap.id"
                                    align="center"
                                >
                                    <trap-card
                                        :trap="trap"
                                        :class="{'selected': trap.id === selectedSlotItemId}"
                                        @click="selectSlotItem(trap)"
                                        show-image
                                        show-name
                                        show-stats
                                        show-description
                                    />
                                </v-col>
                            </v-row>
                        </v-tabs-window-item>
                        <v-tabs-window-item value="gear">
                            <v-row dense>
                                <v-col
                                    v-for="gearItem in gear"
                                    :key="gearItem.id"
                                    align="center"
                                >
                                    <gear-card
                                        :gear="gearItem"
                                        :class="{'selected': gearItem.id === selectedSlotItemId}"
                                        @click="selectSlotItem(gearItem)"
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
import GearCard from '../GearCard.vue';
import TrapCard from '../TrapCard.vue';

export default {
    components:{
        TrapCard,
        GearCard
    },
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
            type:String,
            default: null
        }
    },
    data() {
        return {
            isOpen: false,
            currentTab: "traps",
            selectedSlotItemId: null
        }
    },
    mounted(){
        this.selectedSlotItemId = this.modelValue;
    },
    computed: {
        slotItemType(){
            if(this.selectedSlotItemId >= 100 && this.selectedSlotItemId <= 200) {
                return "trap"
            } else if(this.selectedSlotItemId >= 201 && this.selectedSlotItemId < 300) {
                return "gear"
            } else{
                return null;
            }
        },
        selectedSlotItem() {
            if(this.slotItemType === "trap") {
                return this.dataStore.traps.find(trap => trap.id === this.selectedSlotItemId) ?? null;
            } else if(this.slotItemType === "gear") {
                return this.dataStore.gear.find(gear => gear.id === this.selectedSlotItemId) ?? null;
            } else{
                return null;
            }
        },

        traps() {
            return JSON.parse(JSON.stringify(this.dataStore.traps))
                .sort((a, b) => a.name > b.name);
        },
        gear(){
            return JSON.parse(JSON.stringify(this.dataStore.gear))
                .sort((a, b) => a.name > b.name);
        }
    },
    methods:{
        selectSlotItem(slotItem) {
            this.selectedSlotItemId = slotItem.id;
            this.isOpen = false;
        }
    },
    watch: {
        // All this is to keep the v-model synced
        selectedSlotItem() {
            this.$emit("update:model-value", this.selectedSlotItem?.id);
        },
        modelValue(slotItemId) {
            this.selectedSlotItemId = slotItemId;
        }
    }
}
</script>

<style scoped>
.slot-item-card {
    width: 100%;
    height: 7.5rem;
    line-height: 0;
}

.slot-item-card img {
    height: 100%;
}

.no-slot-item-selected {
    margin-top: calc((7.5rem - 51.95px) / 2);
	opacity: 0.3;
}

.selected {
    outline: rgb(var(--v-theme-on-surface)) 2px solid;
}
</style>