<template>
    <v-dialog
        v-model="isOpen"
        transition="scale-transition"
        scrollable
        max-width="1400"
        width="auto"
    >
        <template #activator="{ props: activatorProps }">
            <div
                class="hero-selector"
                v-bind="activatorProps"
            >
                <hero-card
                    :hero="hero"
                    :skin="skin"
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
                    style="min-height: 48px"
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
                            <v-row>
                                <v-col
                                    v-for="(sortedHero, index) in sortedHeroes"
                                    :key="sortedHero.id"
                                    align="center"
                                >
                                    <selection-card
                                        :image="sortedHero.skins[0].image"
                                        :label="sortedHero.name"
                                        :selected="index === selectedHeroIndex"
                                        @click="selectHero(index)"
                                    />
                                </v-col>
                            </v-row>
                        </v-tabs-window-item>
                    
                        <!-- Select Skin -->
                        <v-tabs-window-item value="skin">
                            <v-row>
                                <v-col
                                    v-for="(sortedSkin, index) in skins"
                                    :key="sortedSkin.id"
                                    align="center"
                                >
                                    <selection-card
                                        :image="sortedSkin.image"
                                        :label="sortedSkin.name"
                                        :selected="index === selectedSkinIndex"
                                        @click="selectSkin(index)"
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
import SelectionCard from './SelectionCard.vue';
import { useDataStore } from '../../stores/data';

export default {
    emits: ['update:hero-id', 'update:skin-id'],
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    props:{

    },
    components:{
        SelectionCard,
        HeroCard
    },
    data() {
        return {
            isOpen: false,
            currentTab: "hero",

            selectedHeroIndex: 0,
            selectedSkinIndex: 0
        }
    },
    computed: {
        sortedHeroes() {
            return JSON.parse(JSON.stringify(this.dataStore.heroes)).sort((a, b) => a.name > b.name);
        },
        hero() {
            return this.dataStore.heroes[this.selectedHeroIndex] ?? null;
        },
        skins(){
            return this.hero?.skins;
        },
        skin() {
            return this.hero?.skins[this.selectedSkinIndex];
        },
    },
    methods:{
        selectHero(index){
            this.selectedHeroIndex = index;
            this.selectedSkinIndex = 0;
            this.currentTab = "skin";
        },
        selectSkin(index){
            this.selectedSkinIndex = index;
            this.isOpen = false;
        }
    }
}
</script>

<style scoped>
.hero-selector {
	border-radius: 4px;
	overflow: hidden;
    cursor: pointer;
}

.hero-image {
	aspect-ratio: 1000/471;
	width: 100%;
}
</style>