<template>
    <div>
        <v-row>
            <v-col cols="4">
                <hero-selector />
            </v-col>
            <v-col cols="5">
                Coming Soon!
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { encode } from '../utils/base62Util.js';
import Dye from '../enums/dye.js';
import HeroSelector from '../components/loadout-page/HeroSelector.vue';

export default {
    components: {
        HeroSelector
    },
    data() {
        return {
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