<template>
    <lobby-settings-form class="settings mx-auto" />
</template>

<script>
import LobbySettingsForm from '../components/lobby-page/LobbySettingsForm.vue';
import { firebaseApp } from '../firebase.js';
import { useLobbyStore } from '../stores/lobby.js';

export default {
    components: {
        LobbySettingsForm,
    },
    setup() {
        const lobbyStore = useLobbyStore();
        return {
            lobbyStore
        };
    },
    data() {
        return {
            firebaseCorrectlySetup: firebaseApp !== null
        }
    },
    computed:{
        loadoutCode: {
            get() {
                return this.lobbyStore.playerLoadout;
            },
            set(value) {
                return this.lobbyStore.setPlayerLoadout(value);
            }
        }
    }
};
</script>

<style scoped>
.settings {
    max-width: 500px;
}
</style>