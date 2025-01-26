<template>
    <div>
        <v-row dense>
            <v-col
                cols="12"
                order="3"
                xl="6"
                order-xl="1"
                align="right"
            >
                <draggable
                    class="v-row v-row--dense"
                    v-model="loadout.slots"
                >
                    <template #item="{index}">
                        <v-col
                            cols="4"
                            align="center"
                        >
                            <slot-item-card
                                v-model="loadout.slots[index]"
                                :ripple="draggingSlotItem"
                            />
                        </v-col>
                    </template>
                </draggable>
            </v-col>
            <v-col
                cols="12"
                order="1"
                md="6"
                xl="3"
                order-xl="2"
                align="center"
            >
                <hero-selector-dialog
                    v-model="heroAndSkin"
                />
            </v-col>
            <v-col
                cols="12"
                order="2"
                md="6"
                xl="3"
                order-xl="3"
            >
                <trait-selector-dialog
                    v-model="loadout.traits.pentagonTraitId"
                    :bonus-slot="TraitSlot.Pentagon"
                    activator-class="mb-2"
                />
                <trait-selector-dialog
                    v-model="loadout.traits.diamondTraitId"
                    :bonus-slot="TraitSlot.Diamond"
                    activator-class="mb-2"
                />
                <trait-selector-dialog
                    v-model="loadout.traits.triangleTraitId"
                    :bonus-slot="TraitSlot.Triangle"
                    activator-class="mb-2"
                />
                <trait-selector-dialog
                    v-model="loadout.traits.noBonusTraitId"
                    activator-class="mb-8"
                />

                <guardian-selector-dialog
                    v-model="loadout.guardianIds[0]"
                    activator-class="mb-2"
                />
                <guardian-selector-dialog
                    v-model="loadout.guardianIds[1]"
                    activator-class="mb-8"
                />

                <consumable-selector-dialog
                    v-model="loadout.consumableIds[0]"
                    activator-class="mb-2"
                />
                <consumable-selector-dialog
                    v-model="loadout.consumableIds[1]"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { encode, decode } from '../utils/base62Util.js';
import Dye from '../enums/dye.js';
import HeroSelectorDialog from '../components/loadout-page/HeroSelectorDialog.vue';
import TraitSelectorDialog from '../components/loadout-page/TraitSelectorDialog.vue';
import SlotItemCard from '../components/loadout-page/SlotItemCard.vue';
import TraitSlot from '../enums/traitSlot.js';
import GuardianSelectorDialog from './loadout-page/GuardianSelectorDialog.vue';
import draggable from 'vuedraggable'
import ConsumableSelectorDialog from './loadout-page/ConsumableSelectorDialog.vue';

export default {
    emits: ['update:model-value'],
    components: {
        HeroSelectorDialog,
        TraitSelectorDialog,
        SlotItemCard,
        GuardianSelectorDialog,
        ConsumableSelectorDialog,
        draggable
    },
    props: {
        modelValue: {
            type: String,
            default: null
        },
        fixedPlayerName: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            TraitSlot,
            
            loadout: {
                playerName: this.fixedPlayerName ?? 'Player',
                heroId: 1,
                skinId: 9,
                dyeId: Dye.Normal,
                traits: {
                    pentagonTraitId: null,
                    diamondTraitId: null,
                    triangleTraitId: null,
                    noBonusTraitId: null,
                },
                guardianIds: [
                    null,
                    null
                ],
                consumableIds: [
                    null,
                    null
                ],
                slots: [
                    {
                        itemId: null,
                        partIds: [null, null, null]
                    },
                    {
                        itemId: null,
                        partIds: [null, null, null]
                    },
                    {
                        itemId: null,
                        partIds: [null, null, null]
                    },
                    {
                        itemId: null,
                        partIds: [null, null, null]
                    },
                    {
                        itemId: null,
                        partIds: [null, null, null]
                    },
                    {
                        itemId: null,
                        partIds: [null, null, null]
                    },
                    {
                        itemId: null,
                        partIds: [null, null, null]
                    },
                    {
                        itemId: null,
                        partIds: [null, null, null]
                    },
                    {
                        itemId: null,
                        partIds: [null, null, null]
                    }
                ],
            }
        }
    },
    mounted(){
        this.loadLoadout(this.modelValue);
    },
    computed:{
        loadoutCode() {
            let loadoutCode = this.loadout.playerName;
            loadoutCode += "-";
            loadoutCode += encode(this.loadout.heroId)
            loadoutCode += encode(this.loadout.skinId, true)
            loadoutCode += encode(this.loadout.dyeId) // Dye id (1, 2, 3)
            loadoutCode += "-"
            this.loadout.slots.forEach(slot => {
                loadoutCode += encode(slot.itemId, true);
            });
            loadoutCode += "-"
            loadoutCode += encode(this.loadout.guardianIds[0])
            loadoutCode += encode(this.loadout.guardianIds[1])
            loadoutCode += "-"
            loadoutCode += encode(this.loadout.consumableIds[0])
            loadoutCode += encode(this.loadout.consumableIds[1])
            loadoutCode += "-"
            loadoutCode += encode(this.loadout.traits.pentagonTraitId)
            loadoutCode += encode(this.loadout.traits.diamondTraitId)
            loadoutCode += encode(this.loadout.traits.triangleTraitId)
            loadoutCode += encode(this.loadout.traits.noBonusTraitId)
            loadoutCode += "-"
            this.loadout.slots.forEach(slot => {
                loadoutCode += encode(slot.partIds[0]);
                loadoutCode += encode(slot.partIds[1]);
                loadoutCode += encode(slot.partIds[2]);
            });
            return loadoutCode;
        },
        heroAndSkin: {
            get() {
                return {
                    heroId: this.loadout.heroId,
                    skinId: this.loadout.skinId
                }
            },
            set(value) {
                this.loadout.heroId = value.heroId;
                this.loadout.skinId = value.skinId;
            }
        }
    },
    methods: {
        loadLoadout(loadoutCode) {
            // TODO: Validation
            if(loadoutCode === null) return;

            // Turn the loadout code into loadout data
            const parts = loadoutCode.split("-");
            if(this.fixedPlayerName !== null) this.loadout.playerName = this.fixedPlayerName;
            else this.loadout.playerName = parts[0];

            this.loadout.heroId = decode(parts[1].substring(0, 1));
            this.loadout.skinId = decode(parts[1].substring(1, 3));
            this.loadout.dyeId = decode(parts[1].substring(3, 4));

            for (let index = 0; index < this.loadout.slots.length; index++) {
                this.loadout.slots[index].itemId = decode(parts[2].substring(index * 2, (index + 1) * 2));
            }
                
            this.loadout.guardianIds[0] = decode(parts[3].substring(0, 1));
            this.loadout.guardianIds[1] = decode(parts[3].substring(1, 2));

            this.loadout.consumableIds[0] = decode(parts[4].substring(0, 1));
            this.loadout.consumableIds[1] = decode(parts[4].substring(1, 2));
            
            this.loadout.traits.pentagonTraitId = decode(parts[5].substring(0, 1));
            this.loadout.traits.diamondTraitId = decode(parts[5].substring(1, 2));
            this.loadout.traits.triangleTraitId = decode(parts[5].substring(2, 3));
            this.loadout.traits.noBonusTraitId = decode(parts[5].substring(3, 4));

            for (let index = 0; index < this.loadout.slots.length; index++) {
                this.loadout.slots[index].partIds[0] = decode(parts[6].substring(index * 3 + 0, index * 3 + 1));
                this.loadout.slots[index].partIds[1] = decode(parts[6].substring(index * 3 + 1, index * 3 + 2));
                this.loadout.slots[index].partIds[2] = decode(parts[6].substring(index * 3 + 2, index * 3 + 3));
            }
        },
    },
    watch:{
        modelValue(newLoadoutCode) {
            if(this.loadoutCode === newLoadoutCode) {
                // When an update is triggered from inside this component it causes the parent component to update the data for the v-model which in turn triggers this watch.
                // But as we know this value to be the same as it already is (since we triggered the update), we don't load in the data again.
                return;
            }
            this.loadLoadout(newLoadoutCode);
        },
        loadoutCode(newLoadoutCode) {
            this.$emit("update:model-value", newLoadoutCode);
        }
    }
};
</script>

<style scoped>
.disabled {
    background: red;
    user-select: none;
}
</style>