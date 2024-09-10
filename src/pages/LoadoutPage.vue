<template>
    <div>
        <v-row>
            <v-col cols="1" />
            <v-col />
            <v-col
                cols="auto"
                align="center"
            >
                <hero-selector-dialog
                    v-model:hero-id="loadout.heroId"
                    v-model:skin-id="loadout.skinId"
                />
            </v-col>
            <v-col>
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
            <v-col cols="1" />
        </v-row>
    </div>
</template>

<script>
import { encode } from '../utils/base62Util.js';
import Dye from '../enums/dye.js';
import HeroSelectorDialog from '../components/loadout-page/HeroSelectorDialog.vue';
import TraitSelectorDialog from '../components/loadout-page/TraitSelectorDialog.vue';
import TraitSlot from '../enums/traitSlot.js';

export default {
    components: {
        HeroSelectorDialog,
        TraitSelectorDialog
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
        loadoutCode() {
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
    }
};
</script>

<style scoped></style>