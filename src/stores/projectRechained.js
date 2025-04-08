import { defineStore } from 'pinia';
import { load } from '../utils/loadoutUtil';
import Difficulty from '../enums/difficulty';
import Gamemode from '../enums/gamemode';
import ApiDifficulty from '../enums/project-rechained/difficulty';
import ApiGamemode from '../enums/project-rechained/gamemode';
import Language from '../enums/project-rechained/language';

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

export const useProjectRechainedStore = defineStore('project-rechained', {
    state() {
        return {
            connecting: false,
            connected: false,

            // All settings/mods related to launching Project Rechained
            extraDifficulty: null,
            // selectedLanguage: Language.English,
            // showTrapDamage: false,
            // selectedMods: [],
            // startingCoins: null,
            // trapLevel: null,
            // accountLevel: null,
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
        hostGame(loadouts, battleground, language = Language.English, showTrapDamage = false, activeMods = [], startingCoins = null, trapTier = 7, accountLevel = 50) {
            // Can't create a game without a loadout or battleground
            if(loadouts.length === 0 || battleground === null) return Promise.reject();

            // Filter out empty loadouts as the endpoints don't support those
            loadouts = loadouts.filter((loadout) => loadout !== null && loadout.trim() !== "");

            return new Promise((resolve, reject) => {
                fetch(`${BASE_API_URL}/game/launch`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({
                        "GameLanguage": language, // Language setting for the game, default is "English".

                        "PlayerName": load(loadouts[0]).playerName, // Host or local player's name.
                        "Loadouts": loadouts, // Encoded loadouts for each player, or at least the host/local player.

                        "GameMode": parseApiGamemode(battleground), // "Survival", "Endless", etc.
                        "MapName": battleground.map.name, // Name of the map, e.g. "Cliffside Clash", "The Baths", etc.
                        "Difficulty": parseApiDifficulty(battleground), /// "Apprentice", "WarMage", "Master", "RiftLord" or "Endless".

                        "ExtraDifficulty": this.extraDifficulty, // Additional difficulty settings, if applicable. This may include modifiers or custom challenge settings.
                        "ActiveMods": activeMods, // Names of mods to enable. They must match the internal `Mods.ModList` items by name.
                        "ShowTrapDamage": showTrapDamage, // Determines whether trap damage numbers should be displayed on screen.

                        "StartingCoin": startingCoins === null || startingCoins === '' ? undefined : startingCoins, // If you want a custom starting coin. Defaults to `GameController.DEFAULT_INVALID_VALUE` if not set.
                        "OverrideTrapTier": trapTier === null || trapTier === '' ? undefined : trapTier, // Overrides the default trap tier level if specified. Defaults to `GameController.DEFAULT_INVALID_VALUE` if not set.
                        "OverrideAccountLevel": accountLevel === null || accountLevel === '' ? undefined : accountLevel // Overrides the player's account level if specified. Defaults to `GameController.DEFAULT_INVALID_VALUE` if not set.
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
        joinGame(loadout, hostIp, language = Language.English, showTrapDamage = false) {
            // Can't join a hosted game without a loadout or the host's server ip
            if(loadout === null || hostIp === null) return Promise.reject();

            return new Promise((resolve, reject) => {
                fetch(`${BASE_API_URL}/game/join`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({
                        "GameLanguage": language, // Language setting for the game, default is "English".
                        "Loadout": loadout, // Encoded loadout.
                        "ShowTrapDamage": showTrapDamage, // Determines whether trap damage numbers should be displayed on screen.
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
        }
    },
});

