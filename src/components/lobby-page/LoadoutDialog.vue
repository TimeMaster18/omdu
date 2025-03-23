<template>
    <v-dialog v-model="isOpen">
        <template #default="{ isActive }">
            <v-card background="background">
                <v-card-text>
                    <loadout-editor
                        v-model="vModelProxy"
                        :fixed-player-name="playerName"
                    />
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        prepend-icon="mdi-close"
                        variant="outlined"
                        text="Close"
                        @click="isActive.value = false"
                    />
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import LoadoutEditor from '../LoadoutEditor.vue';
import CookieName from '../../enums/cookieName.js';
import Cookies from 'js-cookie';

export default {
    emits: ['update:model-value'],
    expose: ["open", "close"],
    components: { LoadoutEditor },
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
    },
    methods: {
        open() {
            this.isOpen = true;
        },
        close() {
            this.isOpen = false;
        },
    }
}
</script>

<style scoped>
</style>