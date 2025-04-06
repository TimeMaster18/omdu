<template>
    <difficulty-card
        class="elevation-0 rounded-0"
        :difficulty="battleground.difficulty"
    >
        <template #append>
            <component-with-tooltip
                v-if="projectRechainedStore.connected"
                width="auto"
                height="auto"
            >
                <template #activator="{ props }">
                    <v-rating
                        v-bind="props"
                        v-model="extraDifficulty"
                        @click.stop
                        :length="amountOfExtraDifficulties"
                        clearable
                        empty-icon="mdi-plus-outline"
                        color="rgba(var(--v-theme-on-surface), 0.3)"
                        full-icon="mdi-plus-thick"
                        :active-color="ratingColor"
                        size="24"
                    />
                </template>
                <template #tooltip>
                    <div class="px-2 py-1 text--warning">
                        Activating extra difficulties (+) will increase enemy levels and wave complexity, while reducing your account and trap levels. Use at your own risk.
                    </div>
                </template>
            </component-with-tooltip>
        </template>
    </difficulty-card>
</template>

<script>
import Difficulty from '../../enums/difficulty';
import Gamemode from '../../enums/gamemode';
import ProjectRechainedDifficulty from '../../enums/project-rechained/difficulty.js';
import { useProjectRechainedStore } from '../../stores/projectRechained';
import DifficultyCard from '../DifficultyCard.vue';
import ComponentWithTooltip from '../ComponentWithTooltip.vue';

export default {
    setup() {
        const projectRechainedStore = useProjectRechainedStore();
        return {
            projectRechainedStore
        };
    },
    components: {
        DifficultyCard,
        ComponentWithTooltip,
    },
    props: {
        battleground: {
            type: Object,
            required: true,
        },
    },
    computed: {
        amountOfExtraDifficulties() {
            if(this.battleground.gamemode === Gamemode.Endless) return 10;
            else if(this.battleground.difficulty === Difficulty.Apprentice) return 1;
            else if(this.battleground.difficulty === Difficulty.WarMage) return 1;
            else if(this.battleground.difficulty === Difficulty.Master) return 2;
            else if(this.battleground.difficulty === Difficulty.RiftLord) return 5;
            else if(this.battleground.difficulty === Difficulty.ArchMage) return 5; // Project Rechained categorizes the two arch mage battlegrounds as rift lord
            else if(this.battleground.difficulty === Difficulty.Endless) return 10;
            else return 0;
        },
        extraDifficulty: {
            get() {
                if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.EndlessPlus) return 1;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.EndlessPlus2) return 2;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.EndlessPlus3) return 3;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.EndlessPlus4) return 4;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.EndlessPlus5) return 5;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.EndlessPlus6) return 6;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.EndlessPlus7) return 7;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.EndlessPlus8) return 8;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.EndlessPlus9) return 9;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.EndlessPlus10) return 10;

                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.ApprenticePlus) return 1;

                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.WarMagePlus) return 1;

                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.MasterPlus) return 1;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.MasterPlus2) return 2;

                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.RiftLordPlus) return 1;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.RiftLordPlus2) return 2;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.RiftLordPlus3) return 3;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.RiftLordPlus4) return 4;
                else if(this.projectRechainedStore.extraDifficulty === ProjectRechainedDifficulty.RiftLordPlus5) return 5;

                else return 0;
            },
            set(value) {
                if(value === 0) this.projectRechainedStore.extraDifficulty = null;
                if(this.battleground.gamemode === Gamemode.Endless){
                    if(value === 1) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.EndlessPlus;
                    else if(value === 2) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.EndlessPlus2;
                    else if(value === 3) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.EndlessPlus3;
                    else if(value === 4) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.EndlessPlus4;
                    else if(value === 5) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.EndlessPlus5;
                    else if(value === 6) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.EndlessPlus6;
                    else if(value === 7) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.EndlessPlus7;
                    else if(value === 8) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.EndlessPlus8;
                    else if(value === 9) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.EndlessPlus9;
                    else if(value === 10) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.EndlessPlus10;
                }
                else if(this.battleground.difficulty === Difficulty.Apprentice) {
                    if(value === 1) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.ApprenticePlus;
                }
                else if(this.battleground.difficulty === Difficulty.WarMage) {
                    if(value === 1) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.WarMagePlus;
                }
                else if(this.battleground.difficulty === Difficulty.Master) {
                    if(value === 1) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.MasterPlus;
                    else if(value === 2) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.MasterPlus2;
                }
                else if(this.battleground.difficulty === Difficulty.RiftLord || this.battleground.difficulty === Difficulty.ArchMage) {
                    if(value === 1) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.RiftLordPlus;
                    else if(value === 2) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.RiftLordPlus2;
                    else if(value === 3) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.RiftLordPlus3;
                    else if(value === 4) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.RiftLordPlus4;
                    else if(value === 5) this.projectRechainedStore.extraDifficulty = ProjectRechainedDifficulty.RiftLordPlus5;
                }
            }
        },
        ratingColor() {
            if(this.extraDifficulty >= 4) return "error";
            else if(this.extraDifficulty >= 2) return "warning";
            else return "on-surface";
        }
    },
    watch: {
        amountOfExtraDifficulties(newAmountOfExtraDifficulties) {
            if(this.extraDifficulty > newAmountOfExtraDifficulties) this.extraDifficulty = newAmountOfExtraDifficulties;
        }
    }
}
</script>

<style scoped>
</style>