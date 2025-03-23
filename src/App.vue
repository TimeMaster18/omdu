<template>
    <v-layout>
        <v-main>
            <v-container fluid>
                <router-view :key="$route.fullPath" />
            </v-container>
        </v-main>
        <v-bottom-navigation>
            <router-link
                to="."
                class="logo px-2"
            >
                <img 
                    src="./assets/images/logo.webp"
                >
            </router-link>
            <v-menu open-on-hover>
                <template #activator="{ props }">
                    <v-btn v-bind="props">
                        <v-icon>mdi-book-open-blank-variant</v-icon>
                        <span>Encyclopedia</span>
                    </v-btn>
                </template>
                <v-list class="menu-dropdown">
                    <v-list-item
                        to="heroes"
                        prepend-icon="mdi-account"
                        title="Heroes"
                    />
                    <v-list-item
                        to="traits"
                        prepend-icon="mdi-lightning-bolt"
                        title="Traits"
                    />
                    <v-list-item
                        to="gear"
                        prepend-icon="mdi-ring"
                        title="Gear"
                    />
                    <v-list-item
                        to="traps"
                        prepend-icon="mdi-cog"
                        title="Traps"
                    />
                    <v-list-item
                        to="trap-parts"
                        prepend-icon="mdi-wrench"
                        title="Trap Parts"
                    />
                    <v-list-item
                        to="consumables"
                        prepend-icon="mdi-flask-round-bottom"
                        title="Consumables"
                    />
                    <v-list-item
                        to="guardians"
                        prepend-icon="mdi-shield"
                        title="Guardians"
                    />
                    <v-list-item
                        to="enemies"
                        prepend-icon="mdi-target-account"
                        title="Enemies"
                    />
                    <v-list-item
                        to="battlegrounds"
                        prepend-icon="mdi-map"
                        title="Battlegrounds"
                    />
                </v-list>
            </v-menu>
            <v-btn to="loadout">
                <v-icon>mdi-package</v-icon>
                <span>Loadout</span>
            </v-btn>
            <v-btn
                v-if="isConnectedToProjectRechained"
                to="project-rechained-lobby"
            >
                <v-icon>mdi-account-group</v-icon>
                <span>Manual Lobby</span>
            </v-btn>
            <v-btn to="lobby">
                <v-icon>mdi-account-group</v-icon>
                <span>Lobby</span>
            </v-btn>
        </v-bottom-navigation>
    </v-layout>
</template>

<script>
import { useProjectRechainedStore } from './stores/projectRechained';

export default {
    setup() {
        const projectRechainedStore = useProjectRechainedStore();
        return {
            projectRechainedStore
        };
    },
    mounted() {
        this.projectRechainedStore.checkConnection();
    },
    computed: {
        isConnectedToProjectRechained() {
            return this.projectRechainedStore.connected;
        },
    }
};
</script>

<style scoped>
.menu-dropdown:deep(.v-list-item__prepend) {
    max-width: 36px;
}

.logo {
    height: 100%;
    max-width: fit-content;
}

.logo img {
    height: 100%;
}
</style>