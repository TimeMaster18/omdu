<template>
    <v-card class="text-left">
        <slot-item-selector-dialog
            :model-value="slotItemId"
            @update:model-value="onSlotItemUpdate"
            activator-class="elevation-0"
        />
        <v-row
            v-if="isTrap"
            no-gutters
            class="text-center"
        >
            <v-col cols="4">
                <trap-part-selector-dialog
                    v-model="trapPart1Proxy"
                    :trap-part-slot="trapParts[0]"
                    class="mb-2"
                    activator-class="elevation-0"
                />
            </v-col>
            <v-col cols="4">
                <trap-part-selector-dialog
                    v-model="trapPart2Proxy"
                    :trap-part-slot="trapParts[1]"
                    class="mb-2"
                    activator-class="elevation-0"
                />
            </v-col>
            <v-col cols="4">
                <trap-part-selector-dialog
                    v-model="trapPart3Proxy" 
                    :trap-part-slot="trapParts[2]"
                    activator-class="elevation-0"
                />
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import { useDataStore } from '../../stores/data';
import SlotItemSelectorDialog from './SlotItemSelectorDialog.vue';
import TrapPartSelectorDialog from './TrapPartSelectorDialog.vue';

export default {
    emits: ['update:model-value'],
    components: {
        SlotItemSelectorDialog,
        TrapPartSelectorDialog
    },
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    props: {
        modelValue: {
            type: Object, // {itemId: int, partIds: int[3]}
            required: true
        },
    },
    data() {
        return {
            slotItemId: null,
            trapPartIds: [null, null, null]
        }
    },
    mounted() {
        this.slotItemId = this.modelValue.itemId;
        this.trapPartIds = this.modelValue.partIds;
    },
    computed: {
        trapPart1Proxy: {
            get() {
                return this.trapPartIds[0];
            },
            set(value) {
                this.trapPartIds[0] = value;
                this.emitModelValueUpdate();
            }
        },
        trapPart2Proxy: {
            get() {
                return this.trapPartIds[1];
            },
            set(value) {
                this.trapPartIds[1] = value;
                this.emitModelValueUpdate();
            }
        },
        trapPart3Proxy: {
            get() {
                return this.trapPartIds[2];
            },
            set(value) {
                this.trapPartIds[2] = value;
                this.emitModelValueUpdate();
            }
        },

        isTrap() {
            return this.modelValue.itemId >= 100 && this.modelValue.itemId <= 200;
        },
        trapParts() {
            if(!this.isTrap) return null;

            return this.dataStore.traps.find(trap => trap.id === this.modelValue.itemId)?.trapPartSlots ?? null;
        }
    },
    methods: {
        onSlotItemUpdate(itemId) {
            if(this.slotItemId === itemId) return;
            this.slotItemId = itemId;
            this.trapPartIds = [null, null, null];
            this.emitModelValueUpdate();
        },
        emitModelValueUpdate() {
            this.$emit("update:model-value", {
                itemId: this.slotItemId,
                partIds: this.trapPartIds
            })
        },
    },
    watch: {
        modelValue: {
            deep: true,
            handler(value) {
                this.slotItemId = value.itemId;
                this.trapPartIds = value.partIds;
            }
        }
    }
}
</script>

<style scoped>
.no-slot-item-selected {
	opacity: 0.3;
}
</style>