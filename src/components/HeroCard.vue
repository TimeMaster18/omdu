<template>
    <v-card class="card text-start">
        <div>
            <img
                :src="image"
                class="portrait"
            >
            <span class="name">
                {{ hero.name }}
            </span>
        </div>
        <v-card-text>
            <!-- Stats -->
            <div v-if="showStats">
                <stat-value icon="mdi-heart">
                    {{ hero.hp }}
                </stat-value>
                <stat-value icon="mdi-water">
                    {{ hero.mana }}
                </stat-value>
                <stat-value :icon="hero.range === Range.Melee ? 'mdi-sword' : 'mdi-bow-arrow'">
                    <span class="capitalize">
                        {{ hero.damageType }}
                    </span>
                </stat-value>
                <stat-value
                    v-if="hero.trapAffinity"
                    icon="mdi-cog"
                >
                    {{ hero.trapAffinity }}
                </stat-value>
                <stat-value
                    v-else
                    icon="mdi-cog"
                >
                    <span class="font-italic transparent">
                        None
                    </span>
                </stat-value>
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
                        class="mb-1"
                        label="Level 2"
                        :upgrade-tier="hero.upgrades.tier1"
                    />
                    <upgrade-tier
                        class="mb-1"
                        label="Level 4"
                        :upgrade-tier="hero.upgrades.tier2"
                    />
                    <upgrade-tier
                        class="mb-1"
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
import StatValue from "./StatValue.vue";
import UpgradeTier from "./UpgradeTier.vue";

export default {
    components: { AbilityIcon, UpgradeTier, StatValue },
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
    min-width: 26.25rem;
    max-width: 31.25rem;
    height: fit-content;
    line-height: 0;
}

.portrait {
	width: 100%;
	image-rendering: optimizeQuality;
	aspect-ratio: 1000/471;
    background: rgb(var(--v-theme-on-surface-loading));
}

.capitalize {
	text-transform: capitalize;
}

.transparent {
    opacity: 0.3;
}

.name {
    position: absolute;
    left: 0;
    bottom: 0;
    line-height: 1;
    font-size: 1.25rem;
    padding: 0.25rem 1rem;
    background: rgba(var(--v-theme-surface), 1);
    border-top-right-radius: 0.5rem;
}
</style>