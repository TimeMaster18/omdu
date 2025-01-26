<template>
    <div>
        <div class="d-flex mb-4">
            <v-text-field
                class="loadout-code-text-field"
                v-model="loadoutCode"
                variant="outlined"
                hide-details
            />
            <loadout-presets
                activator-class="ml-4"
                :current-loadout-code="loadoutCode"
                @import="(importedLoadoutCode) => loadoutCode = importedLoadoutCode"
            />
        </div>
        <loadout-editor v-model="loadoutCode" />
    </div>
</template>

<script>
import LoadoutPresets from '../components/loadout-editor/LoadoutPresets.vue';
import LoadoutEditor from '../components/LoadoutEditor.vue';

export default {
    components: {
        LoadoutEditor,
        LoadoutPresets
    },
    data() {
        return {
            loadoutCode: "Player-1091-000000000000000000-00-00-0000-0000000000000000000000000000"
        }
    },
    mounted() {
        if(this.$route.query.code !== undefined) {
            this.loadoutCode = this.$route.query.code;
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