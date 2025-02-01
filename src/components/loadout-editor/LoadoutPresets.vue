<template>
    <v-menu
        v-model="importMenuIsOpen"
        :close-on-content-click="false"
    >
        <template #activator="{ props }">
            <v-btn
                :class="activatorClass"
                variant="outlined"
                v-bind="props"
            >
                Loadout Presets
                <v-icon
                    class="ml-1"
                    size="x-large"
                >
                    mdi-apps
                </v-icon>
            </v-btn>
        </template>
        <template #default>
            <v-card>
                <!-- Saving a new loadout -->
                <loadout-preview-card
                    class="elevation-0 preview-card"
                    :loadout-code="currentLoadoutCode"
                >
                    <template #name>
                        <v-text-field
                            variant="solo"
                            density="compact"
                            class="name-text-field"
                            placeholder="Loadout name"
                            @keyup.enter="addLoadout()"
                            hide-details
                            v-model="loadoutName"
                        />
                    </template>
                    <template #actions>
                        <v-icon @click="addLoadout()">
                            mdi-content-save
                        </v-icon>
                    </template>
                </loadout-preview-card>

                <!-- Saved loadouts the user can import -->
                <span v-if="loadouts.length > 0">
                    <divider-title class="mt-4 mx-2">
                        Saved loadouts
                    </divider-title>

                    <div class="saved-loadouts">
                        <loadout-preview-card
                            v-for="(loadout, index) in sortedLoadouts"
                            :key="index"
                            class="elevation-0 preview-card"
                            :loadout-code="loadout.code"
                            @click="importLoadout(loadout.code)"
                        >
                            <template #name>
                                {{ loadout.name }}
                            </template>
                            <template #actions>
                                <copy-to-clipboard-icon
                                    :value="`${baseShareLink}${loadout.code}`" 
                                    copy-icon="mdi-share-variant"
                                />
                                <v-icon
                                    class="ml-2"
                                    @click.stop="deleteLoadout(index)"
                                >
                                    mdi-delete
                                </v-icon>
                            </template>
                        </loadout-preview-card>
                    </div>
                </span>
            </v-card>
        </template>
    </v-menu>
</template>

<script>
import Cookies from 'js-cookie';
import CookieName from '../../enums/cookieName';
import LoadoutPreviewCard from '../lobby-page/LoadoutPreviewCard.vue';
import DividerTitle from '../DividerTitle.vue';
import CopyToClipboardIcon from '../CopyToClipboardIcon.vue';

export default {
    emits: ["import"],
    components: {
        LoadoutPreviewCard,
        DividerTitle,
        CopyToClipboardIcon
    },
    props: {
        currentLoadoutCode: {
            type: String,
            required: true
        },
        activatorClass: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            importMenuIsOpen: false,
            loadouts: [],
            loadoutName: null,
            baseShareLink: `${window.location.origin}/omdu/loadout?code=`
        }
    },
    mounted() {
        if(Cookies.get(CookieName.LoadoutPresets) !== undefined) {
            this.loadouts = JSON.parse(Cookies.get(CookieName.LoadoutPresets));
        }
    },
    computed: {
        sortedLoadouts() {
            return JSON.parse(JSON.stringify(this.loadouts)).sort((a, b) => a.name > b.name);
        }
    },
    methods: {
        addLoadout() {
            this.loadouts.push({
                name: this.loadoutName,
                code: this.currentLoadoutCode
            });
            this.updateCookie();
            this.loadoutName = null;
        },
        deleteLoadout(index) {
            this.loadouts.splice(index, 1);
            this.updateCookie();
        },
        importLoadout(loadoutCode) {
            this.$emit("import", loadoutCode);
            this.importMenuIsOpen = false;
        },
        updateCookie() {
            Cookies.set(CookieName.LoadoutPresets, JSON.stringify(this.loadouts), { expires: 365, sameSite: "Strict", secure: true });
        }
    },
}
</script>

<style scoped>
.preview-card {
    width: 450px;
}

.name-text-field:deep(.v-field) {
    box-shadow: none;
}

.name-text-field:deep(input) {
    padding: 0;
    min-height: 28px;
}

.saved-loadouts {
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
}

.save-button {
    width: 100%;
}
</style>