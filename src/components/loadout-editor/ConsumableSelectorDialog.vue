<template>
    <v-dialog
        v-model="isOpen"
        transition="scale-transition"
        scrollable
        max-width="1300"
    >
        <template #activator>
            <component-with-tooltip
                height="calc(1rem + 4rem + 1rem)"
                width="100%"
                :disabled-tooltip="selectedConsumable === null"
            >
                <template #activator="{ props }">
                    <v-card
                        class="consumable-card d-flex text-center align-center"
                        @click="isOpen = true"
                        v-bind="props"
                    >
                        <v-card-text v-if="selectedConsumable !== null">
                            <img
                                class="consumable-image"
                                :src="selectedConsumable.image"
                            >
                        </v-card-text>
                        <v-card-text
                            v-else
                            class="font-italic no-consumable-selected"
                        >
                            No consumable selected
                        </v-card-text>
                    </v-card>
                </template>

                <template #default>
                    <consumable-card
                        v-if="selectedConsumable !== null"
                        :consumable="selectedConsumable"
                        class="elevation-0"
                    />
                </template>
            </component-with-tooltip>
        </template>

        <template #default>
            <v-card>
                <v-tabs
                    v-model="currentTab"
                    align-tabs="center"
                    style="min-height: 3rem"
                >
                    <v-tab value="potions">
                        <v-icon>mdi-flask-round-bottom</v-icon>
                        <span class="ml-1">Potions</span>
                    </v-tab>
                    <v-tab value="scrolls">
                        <v-icon>mdi-script</v-icon>
                        <span class="ml-1">Scrolls</span>
                    </v-tab>
                </v-tabs>
                <v-card-text class="pt-2">
                    <v-tabs-window
                        v-model="currentTab"
                        class="pa-1"
                    >
                        <v-tabs-window-item value="potions">
                            <v-row dense>
                                <v-col>
                                    <DeselectCard @click="deselectConsumable()" />
                                </v-col>
                                <v-col
                                    v-for="potion in potions"
                                    :key="potion.id"
                                    align="center"
                                >
                                    <consumable-card 
                                        :consumable="potion"
                                        :class="{'selected': potion.id === selectedConsumableId}"
                                        @click="selectConsumable(potion)"
                                    />
                                </v-col>
                            </v-row>
                        </v-tabs-window-item>
                        <v-tabs-window-item value="scrolls">
                            <v-row dense>
                                <v-col>
                                    <DeselectCard @click="deselectConsumable()" />
                                </v-col>
                                <v-col
                                    v-for="scroll in scrolls"
                                    :key="scroll.id"
                                    align="center"
                                >
                                    <consumable-card 
                                        :consumable="scroll"
                                        :class="{'selected': scroll.id === selectedConsumableId}"
                                        @click="selectConsumable(scroll)"
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
import ConsumableCard from '../ConsumableCard.vue';
import DeselectCard from './DeselectCard.vue';
import ConsumableType from '../../enums/consumableType.js';
import ComponentWithTooltip from '../ComponentWithTooltip.vue';

export default {
    components: {
        ConsumableCard,
        DeselectCard,
        ComponentWithTooltip
    },
    emits: ['update:model-value'],
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    props: {
        modelValue: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            ConsumableType,
            currentTab: "potions",
            isOpen: false,
            selectedConsumableId: null
        }
    },
    mounted() {
        this.selectedConsumableId = this.modelValue;
    },
    computed: {
        selectedConsumable() {
            return this.dataStore.consumables.find(guardian => guardian.id === this.selectedConsumableId) ?? null;
        },

        potions() {
            return JSON.parse(JSON.stringify(this.dataStore.consumables))
                .filter(consumable => consumable.type === ConsumableType.Potion)
                .sort((a, b) => a.name > b.name);
        },
        scrolls() {
            return JSON.parse(JSON.stringify(this.dataStore.consumables))
                .filter(consumable => consumable.type === ConsumableType.Scroll)
                .sort((a, b) => a.name > b.name);
        },
    },
    methods:{
        selectConsumable(consumable) {
            this.selectedConsumableId = consumable.id;
            this.isOpen = false;
        },
        deselectConsumable() {
            this.selectedConsumableId = null;
            this.isOpen = false;
        },
    },
    watch: {
        // All this is to keep the v-model synced
        selectedConsumable() {
            this.$emit("update:model-value", this.selectedConsumable?.id);
        },
        modelValue(guardianId) {
            this.selectedConsumableId = guardianId;
        }
    }
}
</script>

<style scoped>
.consumable-card {
    min-width: unset;
    max-width: none;
    height: calc(1rem + 4rem + 1rem);
}

.no-consumable-selected {
	opacity: 0.3;
}

.selected {
    outline: rgb(var(--v-theme-on-surface)) 2px solid;
}

.consumable-image {
    height: 4rem;
}
</style>