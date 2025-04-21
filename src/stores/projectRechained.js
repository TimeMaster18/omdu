import { defineStore } from 'pinia';
import { load } from '../utils/loadoutUtil';
import Difficulty from '../enums/difficulty';
import Gamemode from '../enums/gamemode';
import ApiDifficulty from '../enums/project-rechained/difficulty';
import ApiGamemode from '../enums/project-rechained/gamemode';
import Language from '../enums/project-rechained/language';
import Cookies from 'js-cookie';
import CookieName from '../enums/cookieName';
import { ref, watch } from 'vue';

const BASE_API_URL = " http://localhost:5001/api";

export const useProjectRechainedStore = defineStore('project-rechained', () => {
    // State
    const connecting = ref(false);
    const connected = ref(false);
    
    const extraDifficulty = ref(null);
    const language = ref(Language.English);
    const showTrapDamage = ref(false);
    const mods = ref([]);
    const startingCoins = ref(null);
    const trapTier = ref(null);
    const accountLevel = ref(null);

    // Load the initial stored settings from the cookie.
    function loadSettings() {
        let cookie = Cookies.get(CookieName.ProjectRechainedLaunchSettings);
        if(cookie === undefined) return;
        cookie = JSON.parse(cookie);

        language.value = cookie.language ?? Language.English;
        showTrapDamage.value = cookie.showTrapDamage ?? false;
        mods.value = cookie.mods ?? [];
        startingCoins.value = cookie.coins ?? null;
        trapTier.value = cookie.trapLevel ?? null;
        accountLevel.value = cookie.accountLevel ?? null;
    }
    loadSettings();

    // Watch settings and update the cookie if any of them change.
    // Set up watchers after loading in the existing cookie as to not trigger the watches by loading in the initial settings.
    function saveSettings() {
        Cookies.set(
            CookieName.ProjectRechainedLaunchSettings,
            JSON.stringify({
                language: language.value,
                showTrapDamage: showTrapDamage.value,
                mods: mods.value,
                coins: startingCoins.value,
                trapLevel: trapTier.value,
                accountLevel: accountLevel.value
            }),
            {
                expires: 365,
                sameSite: "Strict",
                secure: true
            }
        );
    }
    watch(language, saveSettings);
    watch(showTrapDamage, saveSettings);
    watch(mods, saveSettings, { deep: true });
    watch(startingCoins, saveSettings);
    watch(trapTier, saveSettings);
    watch(accountLevel, saveSettings);

    // General functions & actions
    function checkConnection() {
        if(this.connecting) return;

        this.connecting = true;
        fetch(`${BASE_API_URL}/game/status`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET"
        }).then((response) => {
            this.connected = response.ok;
        }).catch(() => {
            this.connected = false;
        }).finally(()=>{
            this.connecting = false;
        });
    }
    function toggleMod(mod, enable) {
        if(enable) {
            mods.value.push(mod);
        } else {
            mods.value = mods.value.filter((selectedMod) => selectedMod !== mod);
        }
    }
    function parseApiDifficulty(battleground) {
        if(battleground.gamemode === Gamemode.Endless) return ApiDifficulty.Endless; // For whatever reason the api sees endless as a seperate difficulty
        if(battleground.difficulty === Difficulty.Apprentice) return ApiDifficulty.Apprentice;
        else if(battleground.difficulty === Difficulty.WarMage) return ApiDifficulty.WarMage;
        else if(battleground.difficulty === Difficulty.Master) return ApiDifficulty.Master;
        else if(battleground.difficulty === Difficulty.RiftLord) return ApiDifficulty.RiftLord;
        else if(battleground.difficulty === Difficulty.ArchMage) return ApiDifficulty.RiftLord; // Api categorizes the two arch mage battlegrounds as rift lord
    }
    function parseApiGamemode(battleground) {
        if(battleground.gamemode === Gamemode.Survival) return ApiGamemode.Survival;
        else if(battleground.gamemode === Gamemode.Endless) return ApiGamemode.Endless;
    }
    function hostGame(loadouts, battleground) {
        // Can't create a game without a loadout or battleground
        if(loadouts.length === 0 || battleground === null) return Promise.reject();

        // Filter out empty loadouts as the endpoints don't support those
        loadouts = loadouts.filter((loadout) => loadout !== null && loadout.trim() !== "");

        // Filter out bad characters from loadout codes (only alphanumeric character and "-" are allowed)
        loadouts = loadouts.map((loadout) => loadout.replace(/[^a-zA-Z0-9-]/g, ""));

        return new Promise((resolve, reject) => {
            fetch(`${BASE_API_URL}/game/launch`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    "GameLanguage": language.value, // Language setting for the game, default is "English".

                    "PlayerName": load(loadouts[0]).playerName, // Host or local player's name.
                    "Loadouts": loadouts, // Encoded loadouts for each player, or at least the host/local player.

                    "GameMode": parseApiGamemode(battleground), // "Survival", "Endless", etc.
                    "MapName": battleground.map.name, // Name of the map, e.g. "Cliffside Clash", "The Baths", etc.
                    "Difficulty": parseApiDifficulty(battleground), /// "Apprentice", "WarMage", "Master", "RiftLord" or "Endless".

                    "ExtraDifficulty": extraDifficulty.value, // Additional difficulty settings, if applicable. This may include modifiers or custom challenge settings.
                    "ActiveMods": mods.value, // Names of mods to enable. They must match the internal `Mods.ModList` items by name.
                    "ShowTrapDamage": showTrapDamage.value, // Determines whether trap damage numbers should be displayed on screen.

                    "StartingCoin": startingCoins.value === null || startingCoins.value === '' ? undefined : startingCoins.value, // If you want a custom starting coin. Defaults to `GameController.DEFAULT_INVALID_VALUE` if not set.
                    "OverrideTrapTier": trapTier.value === null || trapTier.value === '' ? undefined : trapTier.value, // Overrides the default trap tier level if specified. Defaults to `GameController.DEFAULT_INVALID_VALUE` if not set.
                    "OverrideAccountLevel": accountLevel.value === null || accountLevel.value === '' ? undefined : accountLevel.value // Overrides the player's account level if specified. Defaults to `GameController.DEFAULT_INVALID_VALUE` if not set.
                })
            }).then(async (response) => {
                if(response.ok) resolve();
                else reject(await response.json());
            }).catch((error) => {
                this.checkConnection(); // Check the connection in case it's the connection that went wrong
                reject(error);
            });
        });
    }
    function joinGame(loadout, hostIp) {
        // Can't join a hosted game without a loadout or the host's server ip
        if(loadout === null || loadout.trim() === "" || hostIp === null) return Promise.reject();

        // Filter out bad characters from loadout codes (only alphanumeric character and "-" are allowed)
        loadout = loadout.replace(/[^a-zA-Z0-9-]/g, "");

        return new Promise((resolve, reject) => {
            fetch(`${BASE_API_URL}/game/join`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    "GameLanguage": language.value, // Language setting for the game, default is "English".
                    "Loadout": loadout, // Encoded loadout.
                    "ShowTrapDamage": showTrapDamage.value, // Determines whether trap damage numbers should be displayed on screen.
                    "HostIP": hostIp // The IP address of the host in a multiplayer session.
                })
            }).then(async (response) => {
                if(response.ok) resolve();
                else reject(await response.json());
            }).catch((error) => {
                this.checkConnection(); // Check the connection in case it's the connection that went wrong
                reject(error);
            });
        });
    }

    return {
        connecting, connected, extraDifficulty, language, showTrapDamage, mods, startingCoins, trapTier, accountLevel, // state
        checkConnection, toggleMod, hostGame, joinGame // actions
    }
});

