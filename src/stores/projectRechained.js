import { defineStore } from 'pinia';
import { load } from '../utils/loadoutUtil';
import Difficulty from '../enums/difficulty';
import Gamemode from '../enums/gamemode';
import ApiDifficulty from '../enums/project-rechained/difficulty';
import ApiGamemode from '../enums/project-rechained/gamemode';
import Language from '../enums/project-rechained/language';
import Cookies from 'js-cookie';
import CookieName from '../enums/cookieName';

const BASE_API_URL = " http://localhost:5001/api";

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

// Turn this into a setup store (https://pinia.vuejs.org/core-concepts/) so we can watch settings and automatically update cookies accordingly.
export const useProjectRechainedStore = defineStore('project-rechained', {
    
    state() {
        return {
            connecting: false,
            connected: false,

            // All settings/mods related to launching Project Rechained
            extraDifficulty: null,
            language: Language.English,
            showTrapDamage: false,
            mods: [],
            startingCoins: null,
            trapLevel: null,
            accountLevel: null,
        };
    },
    actions: {
        checkConnection() {
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
        },
        hostGame(loadouts, battleground) {
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
                        "GameLanguage": this.language, // Language setting for the game, default is "English".

                        "PlayerName": load(loadouts[0]).playerName, // Host or local player's name.
                        "Loadouts": loadouts, // Encoded loadouts for each player, or at least the host/local player.

                        "GameMode": parseApiGamemode(battleground), // "Survival", "Endless", etc.
                        "MapName": battleground.map.name, // Name of the map, e.g. "Cliffside Clash", "The Baths", etc.
                        "Difficulty": parseApiDifficulty(battleground), /// "Apprentice", "WarMage", "Master", "RiftLord" or "Endless".

                        "ExtraDifficulty": this.extraDifficulty, // Additional difficulty settings, if applicable. This may include modifiers or custom challenge settings.
                        "ActiveMods": this.mods, // Names of mods to enable. They must match the internal `Mods.ModList` items by name.
                        "ShowTrapDamage": this.showTrapDamage, // Determines whether trap damage numbers should be displayed on screen.

                        "StartingCoin": this.startingCoins === null || this.startingCoins === '' ? undefined : this.startingCoins, // If you want a custom starting coin. Defaults to `GameController.DEFAULT_INVALID_VALUE` if not set.
                        "OverrideTrapTier": this.trapTier === null || this.trapTier === '' ? undefined : this.trapTier, // Overrides the default trap tier level if specified. Defaults to `GameController.DEFAULT_INVALID_VALUE` if not set.
                        "OverrideAccountLevel": this.accountLevel === null || this.accountLevel === '' ? undefined : this.accountLevel // Overrides the player's account level if specified. Defaults to `GameController.DEFAULT_INVALID_VALUE` if not set.
                    })
                }).then((response) => {
                    if(response.ok) resolve();
                    else reject();
                }).catch(() => {
                    this.checkConnection(); // Check the connection in case it's the connection that went wrong
                    reject();
                });
            });
        },
        joinGame(loadout, hostIp) {
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
                        "GameLanguage": this.language, // Language setting for the game, default is "English".
                        "Loadout": loadout, // Encoded loadout.
                        "ShowTrapDamage": this.showTrapDamage, // Determines whether trap damage numbers should be displayed on screen.
                        "HostIP": hostIp // The IP address of the host in a multiplayer session.
                    })
                }).then((response) => {
                    if(response.ok) resolve();
                    else reject();
                }).catch(() => {
                    this.checkConnection(); // Check the connection in case it's the connection that went wrong
                    reject();
                });
            });
        },

        loadSettings() {
            let cookie = Cookies.get(CookieName.ProjectRechainedLaunchSettings);
            if(cookie === undefined) return;
            cookie = JSON.parse(cookie);

            this.language = cookie.language ?? Language.English;
            this.showTrapDamage = cookie.showTrapDamage ?? false;
            this.mods = cookie.mods ?? [];
            this.startingCoins = cookie.coins ?? null;
            this.trapLevel = cookie.trapLevel ?? null;
            this.accountLevel = cookie.accountLevel ?? null;
        },
        saveSettings() {
            Cookies.set(
                CookieName.ProjectRechainedLaunchSettings,
                JSON.stringify({
                    language: this.language,
                    showTrapDamage: this.showTrapDamage,
                    mods: this.mods,
                    coins: this.startingCoins,
                    trapLevel: this.trapLevel,
                    accountLevel: this.accountLevel
                }),
                {
                    expires: 365,
                    sameSite: "Strict",
                    secure: true
                }
            );
        },
    },
});

