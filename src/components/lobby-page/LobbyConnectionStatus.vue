<template>
    <div
        v-if="status === LobbyStatus.Disconnected"
        class="status text-error"
    >
        <v-icon size="32">
            mdi-close-circle-outline
        </v-icon>
        Not connected to lobby
    </div>
    <div
        v-else-if="status === LobbyStatus.Connecting"
        class="status text-warning"
    >
        <v-icon size="32">
            mdi-dots-horizontal-circle-outline
        </v-icon>
        Connecting to lobby
    </div>
    <div
        v-else-if="status === LobbyStatus.Connected"
        class="status text-success"
    >
        <v-icon size="32">
            mdi-check-circle-outline
        </v-icon>
        Connected to lobby
    </div>
</template>

<script>
import LobbyStatus from '../../enums/lobbyStatus.js';

export default {
    props: {
        status: {
            type: String,
            default: LobbyStatus.Disconnected
        }
    },
    data() {
        return {
            LobbyStatus
        }
    },
};
</script>

<style scoped>
.status {
    font-size: 16px;
}
</style>