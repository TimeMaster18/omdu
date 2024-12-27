import Ability from '../enums/ability';
import EnemyType from '../enums/enemyType';
import Faction from '../enums/faction';

const enemies = Object.freeze({
    ArctosGrizzly: {
        name: "Arctos Grizzly",
        description: "Hailing from the frozen land of Arctos, grizzly minions are large in size, have moderate health, and are angered when their allies fall.",
        image: "images/enemies/Arctos_Grizzly_image.webp",
        type: EnemyType.Minion,
        hp: 425,
        abilities: [
            Ability.Vindictive,
            Ability.Large,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.Northmun,
        riftPoints: 2
    },
    ArctosShieldGrizzly: {
        name: "Arctos Shield Grizzly",
        description: "Carrying the standard of Arctos, these grizzlies are protected from frontal assaults, are highly resistant to frost damage, susceptible to fire damage, and have powerful medium-range melee attacks. They ignore heroes and physics traps, and attack guardians.",
        image: "images/enemies/Arctos_Shield_Grizzly_image.webp",
        type: EnemyType.Minion,
        hp: 425,
        abilities: [
            Ability.Blocking,
            Ability.Large,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.Northmun,
        riftPoints: 2
    },
    ArmoredArctosGrizzly: {
        name: "Armored Arctos Grizzly",
        description: "As veterans of the army of Arctos, these grizzlies are protected against physical and frost damage but are susceptible to fire damage. Their attacks deal significant medium-range damage and reduce armor.",
        image: "images/enemies/Armored_Arctos_Grizzly_image.webp",
        type: EnemyType.Minion,
        hp: 1232,
        abilities: [
            Ability.Vindictive,
            Ability.Large,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.Northmun,
        riftPoints: 4
    }
});

export default enemies;