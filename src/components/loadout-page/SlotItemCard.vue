<template>
    <v-card class="text-left">
        <slot-item-selector-dialog
            v-model="slotItemProxy"
            activator-class="elevation-0"
        />
        <div v-if="isTrap">
            <!-- Trap Parts -->
            <trap-part-selector-dialog
                v-model="trapPart1Proxy"
                :trap-part-slot="trapParts[0]"
                class="mb-2"
                activator-class="elevation-0"
            />
            <trap-part-selector-dialog
                v-model="trapPart2Proxy"
                :trap-part-slot="trapParts[1]"
                class="mb-2"
                activator-class="elevation-0"
            />
            <trap-part-selector-dialog
                v-model="trapPart3Proxy" 
                :trap-part-slot="trapParts[2]"
                activator-class="elevation-0"
            />
        </div>
    </v-card>
</template>

<script>
import { useDataStore } from '../../stores/data';
import SlotItemSelectorDialog from './SlotItemSelectorDialog.vue';
import TrapPartSelectorDialog from './TrapPartSelectorDialog.vue';

export default {
    emits: ['update:slot-item-id', 'update:trap-part-ids'],
    components:{
        SlotItemSelectorDialog,
        TrapPartSelectorDialog
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
        trapPart1Proxy:{
            get(){
                return this.trapPartIds[0];
            },
            set(value){
                let temp = this.trapPartIds;
                temp[0] = value;
                this.$emit("update:trap-part-ids", temp);
            }
        },
        trapPart2Proxy:{
            get(){
                return this.trapPartIds[1];
            },
            set(value){
                let temp = this.trapPartIds;
                temp[1] = value;
                this.$emit("update:trap-part-ids", temp);
            }
        },
        trapPart3Proxy:{
            get(){
                return this.trapPartIds[2];
            },
            set(value){
                let temp = this.trapPartIds;
                temp[2] = value;
                this.$emit("update:trap-part-ids", temp);
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