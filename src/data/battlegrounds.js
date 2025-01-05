import Map from "./maps";
import Difficulty from '../enums/difficulty';
import Gamemode from '../enums/gamemode';
import Enemy from './enemies';

const battlegrounds = Object.freeze([
    // Apprentice
    {
        id: 1,
        map: Map.BanquetHall,
        difficulty: Difficulty.Apprentice,
        gamemode: Gamemode.Survival,
        waves: 6,
        parTime: {
            minutes: 7,
            seconds: 30
        },
        mercenaries: 0,
        enemies: [
            Enemy.VitalityTheCyclopsResurrector,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.Ogre
        ],
    },
    {
        id: 2,
        map: Map.CliffsideClash,
        difficulty: Difficulty.Apprentice,
        gamemode: Gamemode.Survival,
        waves: 6,
        parTime: {
            minutes: 10,
            seconds: 30
        },
        mercenaries: 0,
        enemies: [
            Enemy.Dread,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.GnollHunter,
            Enemy.Ogre
        ],
    },
    {
        id: 3,
        map: Map.EventideRamparts,
        difficulty: Difficulty.Apprentice,
        gamemode: Gamemode.Survival,
        waves: 8,
        parTime: {
            minutes: 10,
            seconds: 0
        },
        mercenaries: 0,
        enemies: [
            Enemy.BulgodTheArmoredOgre,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.GnollHunter,
            Enemy.HeavyOrc,
            Enemy.Ogre
        ],
    },
    {
        id: 4,
        map: Map.Highlands,
        difficulty: Difficulty.Apprentice,
        gamemode: Gamemode.Survival,
        waves: 6,
        parTime: {
            minutes: 9,
            seconds: 15
        },
        mercenaries: 0,
        enemies: [
            Enemy.Dread,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.GnollHunter,
            Enemy.Ogre
        ],
    },
    {
        id: 5,
        map: Map.TheBaths,
        difficulty: Difficulty.Apprentice,
        gamemode: Gamemode.Survival,
        waves: 6,
        parTime: {
            minutes: 8,
            seconds: 0
        },
        mercenaries: 0,
        enemies: [
            Enemy.BulgodTheArmoredOgre,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.GnollHunter,
            Enemy.Ogre
        ],
    },
    {
        id: 6,
        map: Map.ThroneRoom,
        difficulty: Difficulty.Apprentice,
        gamemode: Gamemode.Survival,
        waves: 8,
        parTime: {
            minutes: 9,
            seconds: 35
        },
        mercenaries: 0,
        enemies: [
            Enemy.Sarge,
            Enemy.LightSoldier,
            Enemy.MediumSoldier,
            Enemy.Crossbowman,
            Enemy.Grizzly,
            Enemy.ShieldGrizzly,
        ],
    },
    {
        id: 7,
        map: Map.TrainingGrounds,
        difficulty: Difficulty.Apprentice,
        gamemode: Gamemode.Survival,
        waves: 7,
        parTime: {
            minutes: 9,
            seconds: 50
        },
        mercenaries: 0,
        enemies: [
            Enemy.GrenwaldeTheNatureLord,
            Enemy.LightSoldier,
            Enemy.MediumSoldier,
            Enemy.Crossbowman,
            Enemy.Grizzly,
            Enemy.ShieldGrizzly,
        ],
    },
    {
        id: 8,
        map: Map.UnchainedFortress,
        difficulty: Difficulty.Apprentice,
        gamemode: Gamemode.Survival,
        waves: 6,
        parTime: {
            minutes: 8,
            seconds: 50
        },
        mercenaries: 0,
        enemies: [
            Enemy.GrenwaldeTheNatureLord,
            Enemy.LightSoldier,
            Enemy.MediumSoldier,
            Enemy.Crossbowman,
            Enemy.Grizzly,
            Enemy.ShieldGrizzly,
        ],
    },
    {
        id: 9,
        map: Map.WaterGarden,
        difficulty: Difficulty.Apprentice,
        gamemode: Gamemode.Survival,
        waves: 6,
        parTime: {
            minutes: 7,
            seconds: 0
        },
        mercenaries: 0,
        enemies: [
            Enemy.BulgodTheArmoredOgre,
            Enemy.VitalityTheCyclopsResurrector,
            Enemy.GrenwaldeTheNatureLord,
            Enemy.WuXingLightSoldier,
            Enemy.WuXingMediumSoldier,
            Enemy.WuXingArcher,
            Enemy.WuXingHunter,
            Enemy.WuXingBear,
            Enemy.Earthling,
        ],
    },

    // War mage
    {
        id: 10,
        map: Map.BanquetHall,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 10,
        parTime: {
            minutes: 12,
            seconds: 45
        },
        mercenaries: 2,
        enemies: [
            Enemy.OrfumTheMountainTroll,
            Enemy.VitalityTheCyclopsResurrector,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.HeavyOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.KoboldPup,
            Enemy.KamikazeKobold,
            Enemy.GnollHunter,
            Enemy.Ogre,
            Enemy.Troll,
            Enemy.CyclopsShaman
        ],
    },
    {
        id: 11,
        map: Map.CrogonKeep,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 10,
        parTime: {
            minutes: 14,
            seconds: 0
        },
        mercenaries: 2,
        enemies: [
            Enemy.VitalityTheCyclopsResurrector,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.HeavyOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.KamikazeKobold,
            Enemy.Ogre,
            Enemy.Troll,
            Enemy.ShieldTroll
        ],
    },
    {
        id: 12,
        map: Map.EventideRamparts,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 10,
        parTime: {
            minutes: 13,
            seconds: 30
        },
        mercenaries: 3,
        enemies: [
            Enemy.OrfumTheMountainTroll,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.HeavyOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.KoboldPup,
            Enemy.KamikazeKobold,
            Enemy.GnollHunter,
            Enemy.GnollGrenadier,
            Enemy.Ogre,
            Enemy.Troll
        ],
    },
    {
        id: 13,
        map: Map.GatesOfThuricvod,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 8,
        parTime: {
            minutes: 7,
            seconds: 5
        },
        mercenaries: 1,
        enemies: [
            Enemy.GaeadinTheEarthLord,
            Enemy.Dread,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.HeavyOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.KamikazeKobold,
            Enemy.GnollHunter,
            Enemy.Ogre,
            Enemy.Troll
        ],
    },
    {
        id: 14,
        map: Map.Highlands,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 8,
        parTime: {
            minutes: 12,
            seconds: 45
        },
        mercenaries: 1,
        enemies: [
            Enemy.VitalityTheCyclopsResurrector,
            Enemy.OrfumTheMountainTroll,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.HeavyOrc,
            Enemy.OrcArcher,
            Enemy.KamikazeKobold,
            Enemy.Ogre,
            Enemy.Troll,
            Enemy.ShieldTroll
        ],
    },
    {
        id: 15,
        map: Map.MidnightMarket,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 8,
        parTime: {
            minutes: 8,
            seconds: 30
        },
        mercenaries: 2,
        enemies: [
            Enemy.GrenwaldeTheNatureLord,
            Enemy.WuXingLightSoldier,
            Enemy.WuXingMediumSoldier,
            Enemy.WuXingHeavySoldier,
            Enemy.WuXingArcher,
            Enemy.WuXingHunter,
            Enemy.WuXingBear,
            Enemy.Earthling
        ],
    },
    {
        id: 16,
        map: Map.RestrictedSection,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 8,
        parTime: {
            minutes: 10,
            seconds: 30
        },
        mercenaries: 1,
        enemies: [
            Enemy.BulgodTheArmoredOgre,
            Enemy.Dread,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.HeavyOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.KamikazeKobold,
            Enemy.GnollHunter,
            Enemy.Ogre,
            Enemy.Troll,
            Enemy.ShieldTroll
        ],
    },
    {
        id: 17,
        map: Map.SharkIsland,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 10,
        parTime: {
            minutes: 12,
            seconds: 30
        },
        mercenaries: 3,
        enemies: [
            Enemy.Dread,
            Enemy.ScurvyRumrudder,
            Enemy.PirateMediumOrc,
            Enemy.PirateHeavyOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.KoboldPup,
            Enemy.KamikazeKobold,
            Enemy.PirateOgre,
            Enemy.PirateShieldTroll
        ],
    },
    {
        id: 18,
        map: Map.StablesAtEventide,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 8,
        parTime: {
            minutes: 10,
            seconds: 30
        },
        mercenaries: 2,
        enemies: [
            Enemy.GaeadinTheEarthLord,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.HeavyOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.KoboldPup,
            Enemy.GnollHunter,
            Enemy.Ogre,
            Enemy.Troll,
            Enemy.ShieldTroll,
            Enemy.PirateMediumOrc,
            Enemy.PirateHeavyOrc,
            Enemy.FrostClanKobold,
            Enemy.EarthElemental,
            Enemy.Earthling
        ],
    },
    {
        id: 19,
        map: Map.TempleGraveyard,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 10,
        parTime: {
            minutes: 11,
            seconds: 30
        },
        mercenaries: 4,
        enemies: [
            Enemy.VitalityTheCyclopsResurrector,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.HeavyOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.KamikazeKobold,
            Enemy.GnollHunter,
            Enemy.Ogre,
            Enemy.Troll,
            Enemy.ShieldTroll
        ],
    },
    {
        id: 20,
        map: Map.TheWall,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 10,
        parTime: {
            minutes: 15,
            seconds: 0
        },
        mercenaries: 2,
        enemies: [
            Enemy.Dread,
            Enemy.GaeadinTheEarthLord,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.HeavyOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.KoboldPup,
            Enemy.KamikazeKobold,
            Enemy.GnollHunter,
            Enemy.GnollGrenadier,
            Enemy.Ogre,
            Enemy.Troll,
            Enemy.PirateMediumOrc,
            Enemy.PirateHeavyOrc,
            Enemy.EarthElemental,
            Enemy.Earthling
        ],
    },
    {
        id: 21,
        map: Map.ThroneRoom,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 10,
        parTime: {
            minutes: 14,
            seconds: 30
        },
        mercenaries: 2,
        enemies: [
            Enemy.GaeadinTheEarthLord,
            Enemy.Sarge,
            Enemy.LightSoldier,
            Enemy.MediumSoldier,
            Enemy.HeavySoldier,
            Enemy.Crossbowman,
            Enemy.SatyrRunner,
            Enemy.GnomeDestroyer,
            Enemy.Grizzly,
            Enemy.ShieldGrizzly,
            Enemy.EarthElemental,
            Enemy.Earthling
        ],
    },
    {
        id: 22,
        map: Map.ThuricvodVillage,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 8,
        parTime: {
            minutes: 9,
            seconds: 15
        },
        mercenaries: 2,
        enemies: [
            Enemy.GrenwaldeTheNatureLord,
            Enemy.LightOrc,
            Enemy.MediumOrc,
            Enemy.HeavyOrc,
            Enemy.OrcArcher,
            Enemy.KoboldRunner,
            Enemy.KoboldPup,
            Enemy.GnollHunter,
            Enemy.Ogre,
            Enemy.Troll,
            Enemy.ShieldTroll,
            Enemy.HobgoblinShaman
        ],
    },
    {
        id: 23,
        map: Map.TrainingGrounds,
        difficulty: Difficulty.WarMage,
        gamemode: Gamemode.Survival,
        waves: 9,
        parTime: {
            minutes: 11,
            seconds: 45
        },
        mercenaries: 2,
        enemies: [
            Enemy.Sarge,
            Enemy.LightSoldier,
            Enemy.MediumSoldier,
            Enemy.HeavySoldier,
            Enemy.Crossbowman,
            Enemy.SatyrRunner,
            Enemy.GnomeDestroyer,
            Enemy.PrideHunter,
            Enemy.Grizzly,
            Enemy.ShieldGrizzly,
            Enemy.EarthElemental,
            Enemy.Earthling
        ],
    },

    // Master

    // Rift lord
    {
        id: null,
        map: Map.AcademySewers,
        difficulty: Difficulty.RiftLord,
        gamemode: Gamemode.Survival,
        waves: 14,
        parTime: {
            minutes: 13,
            seconds: 30
        },
        mercenaries: 1,
        enemies: [
            Enemy.Sarge,
            Enemy.Swiftyhooves,
            Enemy.LightSoldier,
            Enemy.MediumSoldier,
            Enemy.HeavySoldier,
            Enemy.Crossbowman,
            Enemy.SatyrRunner,
            Enemy.PrideHunter,
            Enemy.Grizzly,
            Enemy.ShieldGrizzly,
            Enemy.Giant,
            Enemy.DwarfShaman,
            Enemy.ArmoredGrizzly,
            Enemy.ForestGiant,
            Enemy.OrderMage
        ],
    }
]);
export default battlegrounds;