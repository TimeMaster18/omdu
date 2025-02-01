<template>
    <div>
        <v-alert
            v-if="sharedLoadout"
            type="warning"
            variant="outlined"
            class="mb-2"
            density="compact"
        >
            You're viewing a shared loadout. Any changes will be lost if you reload or leave the page. To keep this loadout, you can save it to your loadout presets manually.
        </v-alert>
        <div class="d-flex mb-4">
            <v-text-field
                class="loadout-code-text-field"
                v-model="loadoutCode"
                variant="outlined"
                hide-details
            />
            <copy-to-clipboard-button
                :value="loadoutCode"
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
                :current-loadout-code="loadoutCode"
                @import="(importedLoadoutCode) => loadoutCode = importedLoadoutCode"
            />
        </div>
        <loadout-editor v-model="loadoutCode" />
    </div>
</template>

<script>
import CopyToClipboardButton from '../components/CopyToClipboardButton.vue';
import LoadoutPresets from '../components/loadout-editor/LoadoutPresets.vue';
import LoadoutEditor from '../components/LoadoutEditor.vue';
import CookieName from '../enums/cookieName';
import Cookies from 'js-cookie';

export default {
    components: {
        LoadoutEditor,
        LoadoutPresets,
        CopyToClipboardButton
    },
    data() {
        return {
            loadoutCode: null,
            sharedLoadout: false
        }
    },
    mounted() {
        if(this.$route.query.code !== undefined) {
            this.sharedLoadout = true;
            this.loadoutCode = this.$route.query.code;
        } else {
            this.sharedLoadout = false;
            this.loadoutCode = Cookies.get(CookieName.Loadout) ?? "Player-1091-000000000000000000-00-00-0000-0000000000000000000000000000"
        }
    },
    computed: {
        shareLink() {
            return `${window.location.origin}/omdu/loadout?code=${this.loadoutCode}`;
        }
    },
    watch: {
        loadoutCode(loadoutCode) {
            if(this.sharedLoadout) return;
            Cookies.set(CookieName.Loadout, loadoutCode, { expires: 365, sameSite: "Strict", secure: true });
        }
    }
};
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