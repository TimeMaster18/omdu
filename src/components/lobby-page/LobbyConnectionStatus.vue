<template>
    <div
        v-if="connectionStatus === LobbyStatus.Disconnected"
        class="text-error"
    >
        <v-icon size="32">
            mdi-close-circle-outline
        </v-icon>
        Not connected to lobby
    </div>
    <div
        v-else-if="connectionStatus === LobbyStatus.Connecting"
        class="text-warning"
    >
        <v-icon size="32">
            mdi-dots-horizontal-circle-outline
        </v-icon>
        Connecting to lobby
    </div>
    <div
        v-else-if="connectionStatus === LobbyStatus.Connected"
        class="text-success"
    >
        <v-icon size="32">
            mdi-check-circle-outline
        </v-icon>
        Connected to lobby
    </div>
</template>

<script>
import LobbyStatus from '../../enums/lobbyStatus.js';
import { useLobbyStore } from '../../stores/lobby.js';

export default {
    setup() {
        const lobbyStore = useLobbyStore();
        return { lobbyStore };
    },
    data() {
        return {
            LobbyStatus
        }
    },
    computed: {
        connectionStatus() {
            return this.lobbyStore.connectionStatus;
        }
    }
};
</script>

<style scoped></style>