<template>
    <v-dialog
        v-model="isOpen"
        transition="scale-transition"
        scrollable
    >
        <template #activator>
            <component-with-tooltip
                height="calc(1rem + 4rem + 1rem)"
                width="100%"
                :disabled-tooltip="selectedGuardian === null"
                class="wrapper"
            >
                <template #activator="{ props }">
                    <v-card
                        class="guardian-card d-flex text-center align-center"
                        @click="isOpen = true"
                        v-bind="props"
                    >
                        <img
                            v-if="selectedGuardian !== null"
                            class="guardian-image mx-auto"
                            :src="selectedGuardian.image"
                        >
                        <v-card-text
                            v-else
                            class="font-italic no-guardian-selected"
                        >
                            No guardian selected
                        </v-card-text>
                    </v-card>
                </template>

                <template #tooltip>
                    <guardian-card
                        v-if="selectedGuardian !== null"
                        :guardian="selectedGuardian"
                        class="elevation-0"
                    />
                </template>
            </component-with-tooltip>
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
                                show-image
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
import ComponentWithTooltip from '../ComponentWithTooltip.vue';

export default {
    components: {
        GuardianCard,
        DeselectCard,
        ComponentWithTooltip
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
    min-width: unset;
    max-width: none;
    height: calc(1rem + 4rem + 1rem);
}

.no-guardian-selected {
	opacity: 0.3;
}

.selected {
    outline: rgb(var(--v-theme-on-surface)) 2px solid;
}

.guardian-image {
    height: 100%;
}

.wrapper {
    background-color: rgb(var(--v-theme-surface));
    border-radius: 4px;
}
</style>