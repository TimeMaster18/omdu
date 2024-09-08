<template>
    <v-card class="card text-start">
        <img
            :src="image"
            class="portrait"
        >
        <v-card-title>{{ hero.name }}</v-card-title>
        <v-card-text>
            <!-- Stats -->
            <div v-if="showStats">
                <div>
                    <v-icon>mdi-heart</v-icon>
                    <span class="value ml-2">
                        {{ hero.hp }}
                    </span>
                </div>
                <div>
                    <v-icon>mdi-water</v-icon>
                    <span class="value ml-2">
                        {{ hero.mana }}
                    </span>
                </div>
                <div>
                    <v-icon v-if="hero.range === Range.Melee">
                        mdi-sword
                    </v-icon>
                    <v-icon v-else>
                        mdi-bow-arrow
                    </v-icon>
                    <span class="capitalize value ml-2">
                        {{ hero.damageType }}
                    </span>
                </div>
                <div v-if="hero.trapAffinity">
                    <v-icon>mdi-cog</v-icon>
                    <span class="value ml-2">
                        {{ hero.trapAffinity }}
                    </span>
                </div>
            </div>

            <!-- Abilities -->
            <v-row
                v-if="showAbilities"
                no-gutters
                class="mt-4 text-center"
            >
                <v-col>
                    <ability-icon :ability="hero.abilities.passive" />
                </v-col>
                <v-col>
                    <ability-icon :ability="hero.abilities.primary" />
                </v-col>
                <v-col>
                    <ability-icon :ability="hero.abilities.secondary" />
                </v-col>
                <v-col>
                    <ability-icon :ability="hero.abilities.third" />
                </v-col>
                <v-col>
                    <ability-icon :ability="hero.abilities.forth" />
                </v-col>
                <v-col>
                    <ability-icon
                        v-if="hero.abilities.fifth"
                        :ability="hero.abilities.fifth"
                    />
                </v-col>
            </v-row>

            <!-- Upgrades -->
            <div v-if="showUpgrades">
                <h3 class="mt-4 mb-2">
                    Upgrades
                </h3>
                <div>
                    <upgrade-tier
                        label="Level 2"
                        :upgrade-tier="hero.upgrades.tier1"
                    />
                    <upgrade-tier
                        label="Level 4"
                        :upgrade-tier="hero.upgrades.tier2"
                    />
                    <upgrade-tier
                        label="Level 7"
                        :upgrade-tier="hero.upgrades.tier3"
                    />
                    <upgrade-tier
                        label="Level 10"
                        :upgrade-tier="hero.upgrades.tier4"
                    />
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import Range from "../enums/range.js";
import AbilityIcon from "./AbilityIcon.vue";
import UpgradeTier from "./UpgradeTier.vue";

export default {
    components: { AbilityIcon, UpgradeTier },
    props: {
        hero: {
            type: Object,
            required: true,
        },
        skin: {
            type: Object,
            default: null
        },
        showStats: {
            type: Boolean,
            default: false,
        },
        showAbilities: {
            type: Boolean,
            default: false,
        },
        showUpgrades: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            Range,
        };
    },
    computed:{
        image(){
            if(this.skin) return this.skin.image;
            else return this.hero.skins[0].image;
        }
    }
};
</script>

<style scoped>
.card {
	user-select: none;
    min-width: 420px;
    max-width: 500px;
    line-height: 0;
}

.portrait {
	width: 100%;
	image-rendering: optimizeQuality;
	aspect-ratio: 1000/471;
}

.capitalize {
	text-transform: capitalize;
}

.value {
	display: inline-block;
	vertical-align: middle;
}
</style>