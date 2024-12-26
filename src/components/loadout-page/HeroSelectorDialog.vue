<template>
    <v-dialog
        v-model="isOpen"
        transition="scale-transition"
        scrollable
        width="auto"
    >
        <template #activator>
            <div
                class="hero-selector"
            >
                <hero-card
                    v-if="selectedHero"
                    @click="isOpen = true"
                    class="cursor-pointer"
                    :hero="selectedHero"
                    :skin="selectedSkin"
                    show-stats
                    show-abilities
                    show-upgrades
                />
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
                    <v-tab value="skin">
                        Skin
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
                                <v-col
                                    v-for="sortedHero in sortedHeroes"
                                    :key="sortedHero.id"
                                    align="center"
                                >
                                    <selection-card
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
                                    <selection-card
                                        :image="sortedSkin.image"
                                        :label="sortedSkin.name"
                                        :selected="sortedSkin.id === selectedSkin?.id"
                                        @click="selectSkin(sortedSkin)"
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
import SelectionCard from './HeroSelectionCard.vue';
import { useDataStore } from '../../stores/data';

export default {
    components:{
        SelectionCard,
        HeroCard
    },
    emits: ['update:model-value'],
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    props:{
        modelValue: {
            type: Object, // { heroId: int, skinId: int }
            required: true
        },
    },
    data() {
        return {
            isOpen: false,
            currentTab: "hero",

            selectedHero: null,
            selectedSkin: null
        }
    },
    mounted(){
        this.syncSelectedHeroAndSkin(this.modelValue.heroId, this.modelValue.skinId);
    },
    computed: {
        sortedHeroes() {
            return JSON.parse(JSON.stringify(this.dataStore.heroes)).sort((a, b) => a.name > b.name);
        },
    },
    methods:{
        syncSelectedHeroAndSkin(heroId, skinId) {
            // Find the hero
            this.selectedHero = this.dataStore.heroes.find(hero => hero.id === heroId) ?? null;

            // Find the skin
            if(this.selectHero === null) {
                this.selectedSkin = null;
            } else {
                this.selectedSkin = this.selectedHero.skins.find(skin => skin.id === skinId);
            }
        },

        selectHero(hero) {
            this.selectedHero = hero;
            this.selectedSkin = this.selectedHero.skins[0];
            this.currentTab = "skin";
            this.emitHeroOrSkinChange();
        },
        selectSkin(skin) {
            this.selectedSkin = skin;
            this.isOpen = false;
            this.emitHeroOrSkinChange();
        },

        emitHeroOrSkinChange() {
            this.$emit("update:model-value", {
                skinId: this.selectedSkin?.id ?? null,
                heroId: this.selectedHero?.id ?? null
            });
        }
    },
    watch:{
        modelValue(modelValue) {
            this.syncSelectedHeroAndSkin(modelValue.heroId, modelValue.skinId);
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
</style>