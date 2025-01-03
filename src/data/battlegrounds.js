import Map from "./maps";
import Difficulty from '../enums/difficulty';
import Gamemode from '../enums/gamemode';
import Enemy from './enemies';

const battlegrounds = Object.freeze([
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