import Map from "./maps";
import Difficulty from '../enums/difficulty';
import Gamemode from '../enums/gamemode';
// import Enemy from './enemies';

const battlegrounds = Object.freeze([
    {
        map: Map.AcademySewers,
        difficulty: Difficulty.RiftLord,
        gamemode: Gamemode.Survival,
        waves: 14,
        parTime: [13, 30],
        enemies: [
            
        ]
    }
]);
export default battlegrounds;