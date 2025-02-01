<template>
    <v-dialog v-model="isOpen">
        <v-card background="background">
            <v-card-text>
                <div class="d-flex justify-end mb-4">
                    <!-- TODO: fix autosizing of loadout code field -->
                    <v-text-field
                        v-model="vModelProxy"
                        variant="outlined"
                        hide-details
                        class="mr-2 shrink loadout-code-text-field"
                        reverse
                        max-width="1000"
                        readonly
                    />
                    <copy-to-clipboard-button
                        :value="shareLink"
                        class="mr-2"
                        copy-icon="mdi-share-variant"
                    />
                    <loadout-presets
                        :current-loadout-code="vModelProxy"
                        @import="importLoadoutCode"
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
import LoadoutPresets from '../loadout-editor/LoadoutPresets.vue';
import CopyToClipboardButton from '../CopyToClipboardButton.vue';

export default {
    emits: ['update:model-value'],
    expose: ["open", "close"],
    components: { LoadoutEditor, LoadoutPresets, CopyToClipboardButton },
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
        },
        shareLink() {
            return `${window.location.origin}/omdu/loadout?code=${this.vModelProxy}`;
        }
    },
    methods: {
        open() {
            this.isOpen = true;
        },
        close() {
            this.isOpen = false;
        },
        importLoadoutCode(importedLoadoutCode) {
            let parts = importedLoadoutCode.split('-');
            parts[0] = this.playerName; // Use the player's name instead of the imported loadout's player name
            this.vModelProxy = parts.join('-');
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