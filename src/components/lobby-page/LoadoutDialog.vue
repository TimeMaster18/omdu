<template>
    <v-dialog v-model="isOpen">
        <v-card background="background">
            <v-card-text>
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