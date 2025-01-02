import Map from "./maps";
import Difficulty from '../enums/difficulty';
import Gamemode from '../enums/gamemode';
import Enemy from './enemies';

const battlegrounds = Object.freeze([
    {
        id: 1,
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