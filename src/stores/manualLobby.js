import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import CookieName from '../enums/cookieName';
import { ref, watch } from 'vue';

export const useManualLobbyStore = defineStore('manual-lobby', () => {
    // State
    const connected = ref(false);
    const isHost = ref(true);
    const hostIp = ref(null);
    const loadouts = ref(["Player-B1n1-000000000000000000-00-00-0000-000000000000000000000000000", null, null, null, null]);
    /** Battleground Id */
    const battleground = ref(null);

    // Load the initial stored settings from the cookie.
    function loadSettings() {
        let cookie = Cookies.get(CookieName.ManualLobbySettings);
        if(cookie === undefined) return;
        cookie = JSON.parse(cookie);

        if(cookie.battleground !== undefined) battleground.value = cookie.battleground;
        if(cookie.loadouts !== undefined) loadouts.value = cookie.loadouts;
    }
    loadSettings();

    // Watch settings and update the cookie if any of them change.
    // Set up watchers after loading in the existing cookie as to not trigger the watches by loading in the initial settings.
    function saveSettings() {
        Cookies.set(
            CookieName.ManualLobbySettings,
            JSON.stringify({
                battleground: battleground.value,
                loadouts: loadouts.value
            }),
            {
                expires: 365,
                sameSite: "Strict",
                secure: true
            }
        );
    }
    watch(loadouts, saveSettings, { deep: true });
    watch(battleground, saveSettings);

    // Actions
    function host() {
        connected.value = true;
        isHost.value = true;
    }
    function join(ip) {
        connected.value = true;
        isHost.value = false;
        hostIp.value = ip;
    }
    function disconnect() {
        connected.value = false;
        isHost.value = false;
        hostIp.value = null;
    }
        
    return {
        connected, isHost, hostIp, loadouts, battleground, // state
        host, join, disconnect // actions
    }
});