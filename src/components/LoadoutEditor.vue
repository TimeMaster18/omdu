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
                    v-model="heroSkinAndDye"
                />
            </v-col>
            <v-col
                cols="12"
                order="2"
                md="6"
                xl="3"
                order-xl="3"
            >
                <v-row
                    dense
                    class="mb-2"
                >
                    <v-col cols="6">
                        <guardian-selector-dialog v-model="loadout.guardianIds[0]" />
                    </v-col>
                    <v-col cols="6">
                        <guardian-selector-dialog v-model="loadout.guardianIds[1]" />
                    </v-col>
                </v-row>

                <v-row
                    dense
                    class="mb-2"
                >
                    <v-col cols="6">
                        <consumable-selector-dialog v-model="loadout.consumableIds[0]" />
                    </v-col>
                    <v-col cols="6">
                        <consumable-selector-dialog v-model="loadout.consumableIds[1]" />
                    </v-col>
                </v-row>

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
                <trait-selector-dialog v-model="loadout.traits.noBonusTraitId" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { load as loadLoadoutCode, save as saveLoadoutCode } from '../utils/loadoutUtil.js';
import Dye from '../enums/dye.js';
import HeroSelectorDialog from '../components/loadout-editor/HeroSelectorDialog.vue';
import TraitSelectorDialog from '../components/loadout-editor/TraitSelectorDialog.vue';
import SlotItemCard from '../components/loadout-editor/SlotItemCard.vue';
import TraitSlot from '../enums/traitSlot.js';
import GuardianSelectorDialog from './loadout-editor/GuardianSelectorDialog.vue';
import draggable from 'vuedraggable'
import ConsumableSelectorDialog from './loadout-editor/ConsumableSelectorDialog.vue';

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
                heroId: null,
                skinId: null,
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
    mounted() {
        this.loadLoadout(this.modelValue);
    },
    computed:{
        loadoutCode() {
            return saveLoadoutCode(this.loadout);
        },
        heroSkinAndDye: {
            get() {
                return {
                    heroId: this.loadout.heroId,
                    skinId: this.loadout.skinId,
                    dyeId: this.loadout.dyeId
                }
            },
            set(value) {
                this.loadout.heroId = value.heroId;
                this.loadout.skinId = value.skinId;
                this.loadout.dyeId = value.dyeId;
            }
        }
    },
    methods: {
        loadLoadout(loadoutCode) {
            // TODO: Validation
            if(loadoutCode === null) return;

            let newLoadout = loadLoadoutCode(loadoutCode);
            if(newLoadout === null) return;

            // If we set up a fixed name we'll use it
            if(this.fixedPlayerName !== null) newLoadout.playerName = this.fixedPlayerName;

            this.loadout = newLoadout;
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
</style>