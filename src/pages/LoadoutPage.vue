<template>
    <div>
        <v-text-field v-model="loadoutCode" />
        <v-row>
            <v-col
                cols="12"
                order="3"
                xl="6"
                order-xl="1"
                align="right"
            >
                <v-row
                    v-for="x in [0,1,2]"
                    :key="x"
                    dense
                >
                    <v-col
                        v-for="y in [0,1,2]"
                        :key="y"
                        cols="4"
                        align="center"
                    >
                        <slot-item-card
                            v-model:slot-item-id="loadout.slotItemIds[x * 3 + y]"
                            v-model:trap-part-ids="loadout.trapPartIds[x * 3 + y]"
                        />
                    </v-col>
                </v-row>
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
                    v-model:hero-id="loadout.heroId"
                    v-model:skin-id="loadout.skinId"
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

export default {
    components: {
        HeroSelectorDialog,
        TraitSelectorDialog,
        SlotItemCard
    },
    data() {
        return {
            TraitSlot,
            
            loadout: {
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
                slotItemIds: [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                ],
                trapPartIds: [
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                ]
            }
        }
    },
    computed: {
        loadoutCode: {
            get(){
                let loadoutCode = "PlayerName-";
                loadoutCode += encode(this.loadout.heroId)
                loadoutCode += encode(this.loadout.skinId, true)
                loadoutCode += encode(this.loadout.dyeId) // Dye id (1, 2, 3)
                loadoutCode += "-"
                for (let index = 0; index < this.loadout.slotItemIds.length; index++) {
                    loadoutCode += encode(this.loadout.slotItemIds[index], true)
                }
                loadoutCode += "-"
                loadoutCode += encode(this.loadout.guardianIds[0])
                loadoutCode += encode(this.loadout.guardianIds[1])
                loadoutCode += "-"
                loadoutCode += encode(null) // Consumable id
                loadoutCode += encode(null) // Consumable id
                loadoutCode += "-"
                loadoutCode += encode(this.loadout.traits.pentagonTraitId)
                loadoutCode += encode(this.loadout.traits.diamondTraitId)
                loadoutCode += encode(this.loadout.traits.triangleTraitId)
                loadoutCode += encode(this.loadout.traits.noBonusTraitId)
                loadoutCode += "-"
                for (let index = 0; index < this.loadout.trapPartIds.length; index++) {
                    loadoutCode += encode(this.loadout.trapPartIds[index][0])
                    loadoutCode += encode(this.loadout.trapPartIds[index][1])
                    loadoutCode += encode(this.loadout.trapPartIds[index][2])
                }
                return loadoutCode;
            },
            set(value){
                const parts = value.split("-");
                this.loadout.heroId = decode(parts[1].substring(0, 1));
                this.loadout.skinId = decode(parts[1].substring(1, 3));
                this.loadout.dyeId = decode(parts[1].substring(3, 4));

                for (let index = 0; index < this.loadout.slotItemIds.length; index++) {
                    this.loadout.slotItemIds[index] = decode(parts[2].substring(index * 2, (index + 1) * 2));
                }
                
                this.loadout.guardianIds[0] = decode(parts[3].substring(0, 1));
                this.loadout.guardianIds[1] = decode(parts[3].substring(1, 2));
                
                
                this.loadout.traits.pentagonTraitId = decode(parts[5].substring(0, 1));
                this.loadout.traits.diamondTraitId = decode(parts[5].substring(1, 2));
                this.loadout.traits.triangleTraitId = decode(parts[5].substring(2, 3));
                this.loadout.traits.noBonusTraitId = decode(parts[5].substring(3, 4));

                for (let index = 0; index < this.loadout.trapPartIds.length; index++) {
                    this.loadout.trapPartIds[index][0] = decode(parts[6].substring(index * 3 + 0, index * 3 + 1));
                    this.loadout.trapPartIds[index][1] = decode(parts[6].substring(index * 3 + 1, index * 3 + 2));
                    this.loadout.trapPartIds[index][2] = decode(parts[6].substring(index * 3 + 2, index * 3 + 3));
                }
            }
        },
    }
};
</script>

<style scoped>
</style>