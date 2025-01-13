<template>
    <v-dialog v-model="isOpen">
        <v-card>
            <v-card-text>
                <div class="d-flex justify-end mb-4">
                    <!-- TODO: fix autosizing of loadout code field -->
                    <v-text-field
                        v-model="vModelProxy"
                        variant="outlined"
                        hide-details
                        class="mr-2 shrink loadout-code-text-field"
                        reverse
                        max-width=" 1000px"
                        readonly
                    />
                    <loadout-presets
                        :current-loadout-code="vModelProxy"
                        @import="(importedLoadoutCode) => vModelProxy = importedLoadoutCode"
                    />
                </div>
                <loadout-editor
                    v-model="vModelProxy"
                    :fixed-player-name="playerName"
                />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import LoadoutEditor from '../LoadoutEditor.vue';
import CookieName from '../../enums/cookieName.js';
import Cookies from 'js-cookie';
import LoadoutPresets from '../loadout-page/LoadoutPresets.vue';

export default {
    emits: ['update:model-value'],
    expose: ["open", "close"],
    components: { LoadoutEditor, LoadoutPresets },
    props: {
        modelValue: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            isOpen: false,
            
            playerName: Cookies.get(CookieName.PlayerName) ?? null,
        }
    },
    computed: {
        vModelProxy: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit("update:model-value", value);
            }
        }
    },
    methods: {
        open() {
            this.isOpen = true;
        },
        close() {
            this.isOpen = false;
        }
    }
}
</script>

<style scoped>
.loadout-code-text-field:deep(.v-field) {
    box-shadow: none;
}

.loadout-code-text-field:deep(input) {
    padding-top: 4px;
    padding-bottom: 4px;
    min-height: 28px;
}
</style>