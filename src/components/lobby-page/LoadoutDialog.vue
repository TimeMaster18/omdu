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
                        class="shrink loadout-code-text-field"
                        reverse
                        max-width="1000"
                        readonly
                    />
                    <v-btn
                        variant="outlined"
                        class="ml-2"
                        @click="$refs.clearConfirmationDialog.open()"
                    >
                        <v-icon>
                            mdi-close-circle-outline
                        </v-icon>
                    </v-btn>
                    <confirmation-dialog
                        ref="clearConfirmationDialog"
                        confirm-button-color="error"
                        @confirm="clearLoadout"
                    >
                        Are you sure you want to clear your loadout?
                    </confirmation-dialog>
                    <copy-to-clipboard-button
                        :value="vModelProxy"
                        class="ml-2"
                        copy-icon="mdi-content-copy"
                    />
                    <copy-to-clipboard-button
                        :value="shareLink"
                        class="ml-2"
                        copy-icon="mdi-share-variant"
                    />
                    <loadout-presets
                        activator-class="ml-2"
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
import ConfirmationDialog from '../ConfirmationDialog.vue';

export default {
    emits: ['update:model-value'],
    expose: ["open", "close"],
    components: { LoadoutEditor, LoadoutPresets, CopyToClipboardButton, ConfirmationDialog },
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
            return `${window.location.origin}/loadout?code=${this.vModelProxy}`;
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
        },
        clearLoadout() {
            this.vModelProxy = `${this.playerName}-0000-000000000000000000-00-00-0000-0000000000000000000000000000`;
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