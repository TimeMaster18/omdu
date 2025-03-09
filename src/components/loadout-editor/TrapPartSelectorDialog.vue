<template>
    <v-dialog
        v-model="isOpen"
        transition="scale-transition"
        scrollable
        width="auto"
    >
        <template #activator>
            <component-with-tooltip
                height="auto"
                width="auto"
                :disabled-tooltip="selectedTrapPart === null"
            >
                <template #activator="{ props }">
                    <v-card 
                        class="trap-part-card line-height-0 text-center"
                        @click="isOpen = true"
                        :class="activatorClass"
                        v-bind="props"
                    >
                        <v-card-text class="line-height-0 text-left py-2">
                            <img
                                v-if="selectedTrapPart !== null"
                                class="trap-part-image mx-auto"
                                :src="selectedTrapPart.image"
                            >
                            <trap-part-slot-icon
                                v-else
                                :trap-part-slot="trapPartSlot"
                                :size="4"
                                class="justify-center"
                            />
                        </v-card-text>
                    </v-card>
                </template>

                <template #tooltip>
                    <trap-part-card
                        v-if="selectedTrapPart !== null"
                        :trap-part="selectedTrapPart"
                        class="elevation-0"
                    />
                </template>
            </component-with-tooltip>
        </template>

        <template #default>
            <v-card>
                <v-card-text>
                    <v-row dense>
                        <v-col>
                            <DeselectCard @click="deselectTrapPart()" />
                        </v-col>
                        <v-col
                            v-for="trapPart in trapParts"
                            :key="trapPart.id"
                            align="center"
                        >
                            <trap-part-card
                                :trap-part="trapPart"
                                :class="{'selected': trapPart.id === selectedTrapPartId}"
                                show-image
                                @click="selectTrapPart(trapPart)"
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import { useDataStore } from '../../stores/data';
import TrapPartCard from '../TrapPartCard.vue';
import TrapPartSlotIcon from '../TrapPartSlotIcon.vue';
import DeselectCard from './DeselectCard.vue';
import ComponentWithTooltip from '../ComponentWithTooltip.vue';

export default {
    components:{
        TrapPartSlotIcon,
        TrapPartCard,
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
    props:{
        modelValue:{
            type: Number,
            required: true
        },
        trapPartSlot:{
            type: String,
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
            selectedTrapPartId: null
        }
    },
    mounted(){
        this.selectedTrapPartId = this.modelValue;
    },
    computed: {
        selectedTrapPart() {
            return this.dataStore.trapParts.find(trapPart => trapPart.id === this.selectedTrapPartId) ?? null;
        },

        trapParts() {
            return JSON.parse(JSON.stringify(this.dataStore.trapParts))
                .filter(trapPart => trapPart.partSlot === this.trapPartSlot)
                .sort((a, b) => a.name > b.name);
        },
    },
    methods:{
        selectTrapPart(trapPart) {
            this.selectedTrapPartId = trapPart.id;
            this.isOpen = false;
        },
        deselectTrapPart() {
            this.selectedTrapPartId = null;
            this.isOpen = false;
        }
    },
    watch: {
        // All this is to keep the v-model synced
        selectedTrapPart() {
            this.$emit("update:model-value", this.selectedTrapPart?.id);
        },
        modelValue(trapPartId) {
            this.selectedTrapPartId = trapPartId;
        }
    }
}
</script>

<style scoped>
.trap-part-card {
    width: 100%;
}

.line-height-0 {
    line-height: 0;
}

.trap-part-image {
    min-height: 4rem;
    max-height: 4rem;
    min-width: 4rem;
    max-width: 4rem;
}

.selected {
    outline: rgb(var(--v-theme-on-surface)) 2px solid;
}
</style>