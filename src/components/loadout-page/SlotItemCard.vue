<template>
    <v-card class="text-left">
        <slot-item-selector-dialog
            v-model="slotItemProxy"
            activator-class="elevation-0"
        />
        <v-card-text v-if="isTrap">
            <!-- Components -->
            <div
                v-for="(trapPart, index) in trapParts"
                :key="index"
                :class="{ 'mt-2': index > 0 }"
            >
                <trap-part-slot-icon
                    :trap-part-slot="trapPart"
                    :size="2"
                    show-label
                />
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import { useDataStore } from '../../stores/data';
import SlotItemSelectorDialog from './SlotItemSelectorDialog.vue';
import TrapPartSlotIcon from '../TrapPartSlotIcon.vue';

export default {
    emits: ['update:slot-item-id'],
    components:{
        SlotItemSelectorDialog,
        TrapPartSlotIcon
    },
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    props:{
        slotItemId:{
            type: Number,
            required: true
        },
        trapPartIds:{
            type:Number,
            required: true
        }
    },
    computed:{
        slotItemProxy:{
            get(){
                return this.slotItemId;
            },
            set(value){
                this.$emit("update:slot-item-id", value);
            }
        },

        isTrap(){
            return this.slotItemId >= 100 && this.slotItemId <= 200;
            
        },
        trapParts(){
            if(!this.isTrap) return null;

            return this.dataStore.traps.find(trap => trap.id === this.slotItemId)?.trapPartSlots ?? null;
        }
    }
}
</script>

<style scoped>
.no-slot-item-selected {
	opacity: 0.3;
}
</style>