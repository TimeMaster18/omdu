import Ability from '../enums/ability';
import EnemyType from '../enums/enemyType';

const enemies = Object.freeze({
    ArctosGrizzly: {
        name: "Arctos Grizzly",
        description: "Hailing from the frozen land of Arctos, grizzly minions are large in size, have moderate health, and are angered when their allies fall.",
        image: "images/enemies/Arctos_Grizzly_image.webp",
        type: EnemyType.Minion,
        abilities: [
            Ability.Vindictive,
            Ability.Large,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        riftPoints: 2
    }
});

export default enemies;