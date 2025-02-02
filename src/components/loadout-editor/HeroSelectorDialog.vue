<template>
    <v-dialog
        v-model="isOpen"
        transition="scale-transition"
        scrollable
    >
        <template #activator>
            <div
                class="hero-selector"
            >
                <hero-card
                    v-if="selectedHero !== null"
                    @click="isOpen = true"
                    :hero="selectedHero"
                    :skin="selectedSkin"
                    show-stats
                    show-abilities
                    show-upgrades
                />
                <v-card
                    v-else
                    @click="isOpen = true"
                    class="no-hero-selected-card d-flex text-center align-center"
                >
                    <v-card-text 
                        class="font-italic transparent justi"
                    >
                        No hero selected
                    </v-card-text>
                </v-card>
            </div>
        </template>

        <template #default>
            <v-card>
                <v-tabs
                    v-model="currentTab"
                    align-tabs="center"
                    style="min-height: 3rem"
                >
                    <v-tab value="hero">
                        Hero
                    </v-tab>
                    <v-tab
                        value="skin"
                        :disabled="selectedHero === null"
                    >
                        Skin
                    </v-tab>
                    <v-tab
                        value="dye"
                        :disabled="selectedHero === null"
                    >
                        Dye
                    </v-tab>
                </v-tabs>

                <v-card-text class="pt-2">
                    <v-tabs-window
                        v-model="currentTab"
                        class="pa-1"
                    >
                        <!-- Select Hero -->
                        <v-tabs-window-item value="hero">
                            <v-row dense>
                                <v-col align="center">
                                    <deselect-card
                                        class="deselect-card"
                                        icon-size="6rem"
                                        @click="deselectHero()"
                                    />
                                </v-col>
                                <v-col
                                    v-for="sortedHero in sortedHeroes"
                                    :key="sortedHero.id"
                                    align="center"
                                >
                                    <hero-selection-card
                                        :image="sortedHero.skins[0].image"
                                        :label="sortedHero.name"
                                        :selected="sortedHero.id === selectedHero?.id"
                                        @click="selectHero(sortedHero)"
                                    />
                                </v-col>
                            </v-row>
                        </v-tabs-window-item>
                    
                        <!-- Select Skin -->
                        <v-tabs-window-item value="skin">
                            <v-row dense>
                                <v-col
                                    v-for="sortedSkin in selectedHero?.skins"
                                    :key="sortedSkin.id"
                                    align="center"
                                >
                                    <hero-selection-card
                                        :image="sortedSkin.image"
                                        :label="sortedSkin.name"
                                        :selected="sortedSkin.id === selectedSkin?.id"
                                        @click="selectSkin(sortedSkin)"
                                    />
                                </v-col>
                            </v-row>
                        </v-tabs-window-item>

                        <v-tabs-window-item value="dye">
                            <v-row dense>
                                <v-col
                                    v-for="dye in [Dye.Normal, Dye.Heroic, Dye.Legendary]"
                                    :key="dye"
                                    align="center"
                                >
                                    <dye-icon
                                        class="cursor-pointer"
                                        :dye="dye"
                                        :selected="dye === selectedDyeId"
                                        @click="selectDye(dye)"
                                        :size="8"
                                    />
                                </v-col>
                            </v-row>
                        </v-tabs-window-item>
                    </v-tabs-window>
                </v-card-text>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import HeroCard from '../HeroCard.vue';
import HeroSelectionCard from './HeroSelectionCard.vue';
import DeselectCard from './DeselectCard.vue';
import { useDataStore } from '../../stores/data';
import Dye from '../../enums/dye';
import DyeIcon from '../DyeIcon.vue';

export default {
    components: {
        HeroSelectionCard,
        HeroCard,
        DeselectCard,
        DyeIcon
    },
    emits: ['update:model-value'],
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    props: {
        modelValue: {
            type: Object, // { heroId: number, skinId: number, dyeId: number }
            required: true
        },
    },
    data() {
        return {
            Dye,
            isOpen: false,
            currentTab: "hero",

            selectedHero: null,
            selectedSkin: null,
            selectedDyeId: null
        }
    },
    mounted(){
        this.syncSelectedHeroSkinAndDye(this.modelValue.heroId, this.modelValue.skinId, this.modelValue.dyeId);
    },
    computed: {
        sortedHeroes() {
            return JSON.parse(JSON.stringify(this.dataStore.heroes)).sort((a, b) => a.name > b.name);
        },
    },
    methods:{
        syncSelectedHeroSkinAndDye(heroId, skinId, dyeId) {
            // Find the hero
            this.selectedHero = this.dataStore.heroes.find(hero => hero.id === heroId) ?? null;

            // Find the skin
            if(this.selectedHero === null) {
                this.selectedSkin = null;
            } else {
                this.selectedSkin = this.selectedHero.skins.find(skin => skin.id === skinId);
            }

            // Set the dye
            this.selectedDyeId = dyeId;
        },

        selectHero(hero) {
            this.selectedHero = hero;
            this.selectedSkin = this.selectedHero.skins[0];
            this.currentTab = "skin";
            this.emitVModelChange();
        },
        selectSkin(skin) {
            this.selectedSkin = skin;
            this.currentTab = "dye";
            this.emitVModelChange();
        },
        selectDye(dyeId) {
            this.selectedDyeId = dyeId;
            this.isOpen = false;
            this.emitVModelChange();
        },

        deselectHero() {
            this.selectedHero = null;
            this.selectedSkin = null;
            this.selectedDye = Dye.Normal;
            this.currentTab = "hero";
            this.isOpen = false;
            this.emitVModelChange();
        },

        emitVModelChange() {
            this.$emit("update:model-value", {
                skinId: this.selectedSkin?.id ?? null,
                heroId: this.selectedHero?.id ?? null,
                dyeId: this.selectedDyeId
            });
        }
    },
    watch:{
        modelValue(modelValue) {
            this.syncSelectedHeroSkinAndDye(modelValue.heroId, modelValue.skinId, modelValue.dyeId);
        },
    }
}
</script>

<style scoped>
.hero-selector {
	border-radius: 0.25rem;
	overflow: hidden;
}

.hero-image {
	aspect-ratio: 1000/471;
	width: 100%;
}

.deselect-card {
    width: 18.75rem;
	aspect-ratio: 1000/471;
}

.no-hero-selected-card {
    aspect-ratio: 466/730.817;
}

.transparent {
    opacity: 0.3;
}
</style>