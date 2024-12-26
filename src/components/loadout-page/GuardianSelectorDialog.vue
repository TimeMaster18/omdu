<template>
    <v-dialog
        v-model="isOpen"
        transition="scale-transition"
        scrollable
    >
        <template #activator>
            <v-card
                class="guardian-card"
                @click="isOpen = true"
                :class="activatorClass"
            >
                <v-card-text v-if="selectedGuardian !== null">
                    <div>
                        Aura: {{ selectedGuardian.aura.description }}
                    </div>

                    <div class="mt-4">
                        <guardian-home-icon
                            :guardian-home="selectedGuardian.home"
                            :size="2"
                        >
                            <div class="ml-2">
                                Deals 35% more damage and has 35% more health.
                            </div>
                        </guardian-home-icon>
                    </div>
                </v-card-text>
                <v-card-text
                    v-else
                    class="font-italic no-guardian-selected"
                >
                    No guardian selected
                </v-card-text>
            </v-card>
        </template>

        <template #default>
            <v-card>
                <v-card-text class="pt-2">
                    <v-row dense>
                        <v-col>
                            <DeselectCard @click="deselectGuardian()" />
                        </v-col>
                        <v-col
                            v-for="guardian in guardians"
                            :key="guardian.id"
                            align="center"
                        >
                            <guardian-card 
                                :guardian="guardian"
                                :class="{'selected': guardian.id === selectedGuardianId}"
                                @click="selectGuardian(guardian)"
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import { useDataStore } from '../../stores/data';
import GuardianCard from '../GuardianCard.vue';
import DeselectCard from './DeselectCard.vue';
import GuardianHomeIcon from '../GuardianHomeIcon.vue';

export default {
    components: {
        GuardianCard,
        DeselectCard,
        GuardianHomeIcon
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
            type: Number,
            required: true
        },
        activatorClass: {
            type:String,
            default: null
        }
    },
    data() {
        return {
            isOpen: false,
            selectedGuardianId: null
        }
    },
    mounted() {
        this.selectedGuardianId = this.modelValue;
    },
    computed: {
        selectedGuardian() {
            return this.dataStore.guardians.find(guardian => guardian.id === this.selectedGuardianId) ?? null;
        },

        guardians() {
            return JSON.parse(JSON.stringify(this.dataStore.guardians)).sort((a, b) => a.home.name > b.home.name);
        },
    },
    methods:{
        selectGuardian(guardian) {
            this.selectedGuardianId = guardian.id;
            this.isOpen = false;
        },
        deselectGuardian() {
            this.selectedGuardianId = null;
            this.isOpen = false;
        },
    },
    watch: {
        // All this is to keep the v-model synced
        selectedGuardian() {
            this.$emit("update:model-value", this.selectedGuardian?.id);
        },
        modelValue(guardianId) {
            this.selectedGuardianId = guardianId;
        }
    }
}
</script>

<style scoped>
.guardian-card {
    min-width: none;
    max-width: none;
}

.no-guardian-selected {
	opacity: 0.3;
}

.selected {
    outline: rgb(var(--v-theme-on-surface)) 2px solid;
}
</style>