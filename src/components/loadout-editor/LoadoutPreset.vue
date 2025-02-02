<template>
    <loadout-preview-card
        :loadout-code="loadoutCode"
        @click="$emit('click')"
    >
        <template #name>
            {{ name }}
        </template>
        <template #actions>
            <copy-to-clipboard-icon
                :value="shareLink" 
                copy-icon="mdi-share-variant"
            />
            <v-icon
                class="ml-2"
                @click.stop="initiateDelete"
            >
                mdi-delete
            </v-icon>

            <!-- Delete confirmation dialog -->
            <confirmation-dialog
                ref="confirmationDialog"
                confirm-button-color="error"
                :max-width="500"
                @confirm="confirmDelete"
                title="Are you sure you want to permanently delete this loadout preset?"
            >
                <loadout-preview-card
                    class="elevation-0 mx-auto"
                    :loadout-code="loadoutCode"
                >
                    <template #name>
                        {{ name }}
                    </template>
                </loadout-preview-card>
            </confirmation-dialog>
        </template>
    </loadout-preview-card>
</template>

<script>
import LoadoutPreviewCard from '../lobby-page/LoadoutPreviewCard.vue';
import CopyToClipboardIcon from '../CopyToClipboardIcon.vue';
import ConfirmationDialog from '../ConfirmationDialog.vue';

export default {
    emits: ["click", "delete"],
    components: {
        LoadoutPreviewCard,
        CopyToClipboardIcon,
        ConfirmationDialog
    },
    props: {
        name: {
            type: String,
            required: true
        },
        loadoutCode: {
            type: String,
            required: true
        },
        
    },
    computed: {
        shareLink() {
            return `${window.location.origin}/omdu/loadout?code=${this.loadoutCode}`
        }
    },
    methods: {
        initiateDelete(event) {
            if(event.shiftKey) {
                // We want to give experienced users a way to quickly delete presets, but we don't want inexperienced users to accidentally delete their presets.
                // Shift + clicking delete seemed like a good option for this.
                this.confirmDelete();
            } else {
                console.log(this.$refs.confirmationDialog);
                this.$refs.confirmationDialog.open();
            }
        },
        confirmDelete() {
            this.$emit('delete');
        }
    }
}
</script>

<style scoped>
.name-text-field:deep(.v-field) {
    box-shadow: none;
}

.name-text-field:deep(input) {
    padding: 0;
    min-height: 28px;
}
</style>