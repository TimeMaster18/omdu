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
    },
    ArmoredGiant: {
        name: "Armored Giant",
        description: "Giants may be slow but they are heavy-hitting, dealing massive physical damage. At low health, they move and attack more quickly.",
        image: "images/enemies/Armored_Giant_image.webp",
        type: EnemyType.Minion,
        hp: 1500,
        abilities: [
            Ability.Enraged,
            Ability.Large,
            Ability.Slow
        ],
        faction: Faction.Order,
        riftPoints: 4
    },
    ArmoredGrizzly: {
        name: "Armored Grizzly",
        description: "These grizzlies are veteran fighters girded in both physical and frost armor. Their medium-range melee attacks rip through its enemies' armor, temporarily reducing it.",
        image: "images/enemies/Armored_Grizzly_image.webp",
        type: EnemyType.Minion,
        hp: 1232,
        abilities: [
            Ability.Vindictive,
            Ability.Large
        ],
        faction: Faction.Order,
        riftPoints: 4
    },
    ArmoredOgre: {
        name: "Armored Ogre",
        description: "These stout ogre soldiers are protected by physical armor. Like other ogres, they charge and slow their foes and are not affected by physics traps. They have +100 Physical Armor which translates to 50% damage reduction of physical attacks received.",
        image: "images/enemies/Armored_Ogre_image.webp",
        type: EnemyType.Minion,
        hp: 1120,
        abilities: [
            Ability.PhysicalArmor,
            Ability.Stunning,
            Ability.Large
        ],
        faction: Faction.Unchained,
        riftPoints: 3
    },
    ArmoredSatyr: {
        name: "Armored Satyr",
        description: "Slightly slowed by the heavy armor but known for their distinctive call, armored satyrs are small and fast but unlike regular satyr runners, they aren't weak. They ignore heroes, avoid damage, and run straight for rifts.",
        image: "images/enemies/Armored_Satyr_image.webp",
        type: EnemyType.Minion,
        hp: 250,
        abilities: [
            Ability.Phasing,
            Ability.Fast,
            Ability.Swarming
        ],
        faction: Faction.Order,
        riftPoints: 1
    },
    Crossbowman: {
        name: "Crossbowman",
        description: "Archers pepper their enemies with crossbow bolts, having low health and dealing damage at range. They are deadly in groups.",
        image: "images/enemies/Crossbowman_image.webp",
        type: EnemyType.Minion,
        hp: 128,
        abilities: [
            Ability.Steady,
            Ability.Ranged
        ],
        faction: Faction.Order,
        riftPoints: 1
    },
    CyclopsShaman: {
        name: "Cyclops Shaman",
        description: "As disciples of Stinkeye and Oasis, cyclops shamans defend their beliefs by unleashing magical, heat-seeking missiles at non-believers who get in their way.",
        image: "images/enemies/Cyclops_Shaman_image.webp",
        type: EnemyType.Minion,
        hp: 896,
        abilities: [
            Ability.Large,
            Ability.Homing,
            Ability.HighDamage
        ],
        faction: Faction.Unchained,
        riftPoints: 3
    },
    DwarfGrenadier: {
        name: "Dwarf Grenadier",
        description: "These dwarven explosive experts lob grenades that deal area fire and physical damage. Due to explosive familiarity, they are very resistant to fire damage.",
        image: "images/enemies/Dwarf_Grenadier_image.webp",
        type: EnemyType.Minion,
        hp: 200,
        abilities: [
            Ability.Grenadier,
            Ability.Leaping
        ],
        faction: Faction.Order,
        riftPoints: 0
    },
    DwarfShaman: {
        name: "Dwarf Shaman",
        description: "Dwarf shamans cast a mystical magic shield that protects their allies against all damage types, but they have low health themselves.",
        image: "images/enemies/Dwarf_Shaman_image.webp",
        type: EnemyType.Minion,
        hp: 128,
        abilities: [
            Ability.Protective,
            Ability.TrapResistant
        ],
        faction: Faction.Order,
        riftPoints: 1
    },
    EarthElemental: {
        name: "Earth Elemental",
        description: "Earth elementals are born from fragments of the Earth Lord, Gaeadin. In battle, they can overwhelm heroes when in groups.",
        image: "images/enemies/Earth_Elemental_image.webp",
        type: EnemyType.Minion,
        hp: 775,
        abilities: [
            Ability.Replication,
            Ability.Unstoppable
        ],
        faction: Faction.Elementals,
        riftPoints: 2
    },
    EarthLord: {
        name: "Earth Lord",
        description: "The Earth Lords, are immune to slows and stuns and splits into smaller elementals when destroyed, making them very hard to kill.",
        image: "images/enemies/Earth_Lord_image.webp",
        type: EnemyType.Minion,
        hp: 3000,
        abilities: [
            Ability.Replication,
            Ability.Unstoppable
        ],
        faction: Faction.Elementals,
        riftPoints: 6
    },
    Earthling: {
        name: "Earthling",
        description: "Earthlings cleave from earth elementals when they die. They are small and hard to kill, and can overwhelm heroes when in groups.",
        image: "images/enemies/Earthling_image.webp",
        type: EnemyType.Minion,
        hp: 77,
        abilities: [
            Ability.Fast,
            Ability.Unstoppable
        ],
        faction: Faction.Elementals,
        riftPoints: 1
    },
    FireElemental: {
        name: "Fire Elemental",
        description: "Fire elementals are the most dangerous of all the elementals. They are unstable and have a disregard for the other elements.",
        image: "images/enemies/Fire_Elemental_image.webp",
        type: EnemyType.Minion,
        hp: 1075,
        abilities: [
            Ability.Replication,
            Ability.FlameRetardant
        ],
        faction: Faction.Elementals,
        riftPoints: 1
    },
    FireFiendImp: {
        name: "Fire Fiend Imp",
        description: "As familiars of the fire lords, these mischievous imps not only deal fire damage, but are quick and rush to enemy rifts ignoring heroes and guardians. They are resistant to fire damage but susceptible to frost damage.",
        image: "images/enemies/Fire_Fiend_Imp_image.webp",
        type: EnemyType.Minion,
        hp: 80,
        abilities: [
            Ability.Fast,
            Ability.FlameRetardant
        ],
        faction: Faction.FireFiends,
        riftPoints: 1
    },
    FireFiendWarlock: {
        name: "Fire Fiend Warlock",
        description: "Anointed by the fire lords, fire fiend warlocks wield elemental fire magic in the form of powerful ranged fire damage spells. They have low health and are susceptible to frost damage, but are resistant to fire damage.",
        image: "images/enemies/Fire_Fiend_Warlock_image.webp",
        type: EnemyType.Minion,
        hp: 448,
        abilities: [
            Ability.Ranged,
            Ability.HighDamage,
            Ability.TrapResistant,
            Ability.FlameRetardant
        ],
        faction: Faction.FireFiends,
        riftPoints: 4
    },
    FireLord: {
        name: "Fire Lord",
        description: "Loyal servants of Urza, Fire Lords resist fire damage and burst into Fire Elementals upon death. They are also vulnerable to ice damage, and than splits into smaller elementals when getting destroyed.",
        image: "images/enemies/Fire_Lord_image.webp",
        type: EnemyType.Minion,
        hp: 5040,
        abilities: [
            Ability.Large,
            Ability.Replication,
            Ability.FlameRetardant
        ],
        faction: Faction.Elementals,
        riftPoints: 6
    },
    FireOgre: {
        name: "Fire Ogre",
        description: "Blessed by the fire lords, fire ogres deal fire damage, slow their enemies, and ignore physics traps, but are susceptible to frost damage.",
        image: "images/enemies/Fire_Ogre_image.webp",
        type: EnemyType.Minion,
        hp: 990,
        abilities: [
            Ability.Stunning,
            Ability.Large,
            Ability.Immolating,
            Ability.FlameRetardant
        ],
        faction: Faction.Unchained,
        riftPoints: 3
    },
    Fireling: {
        name: "Fireling",
        description: "Firelings kindle from fire elementals when they die. They are small and hard to kill, and can overwhelm heroes when in groups.",
        image: "images/enemies/Fireling_image.webp",
        type: EnemyType.Minion,
        hp: 77,
        abilities: [
            Ability.Fast,
            Ability.BarricadeBash,
            Ability.FlameRetardant
        ],
        faction: Faction.Elementals,
        riftPoints: 0
    },
    ForestGiant: {
        name: "Forest Giant",
        description: "Forest giants may be slow but they are heavy-hitting, dealing massive physical damage. At low health, they move and attack more quickly.",
        image: "images/enemies/Forest_Giant_image.webp",
        type: EnemyType.Minion,
        hp: 2060,
        abilities: [
            Ability.Enraged,
            Ability.Large,
            Ability.Slow
        ],
        faction: Faction.Order,
        riftPoints: 3
    },
    FrostClanArcher: {
        name: "Frost Clan Archer",
        description: "With the frost magic of Tundra but little to no training, these orcs archers deal moderate ranged damage but have low health. They can also freeze their enemies and are resistant to frost damage.",
        image: "images/enemies/Frost_Clan_Archer_image.webp",
        type: EnemyType.Minion,
        hp: 175,
        abilities: [
            Ability.FrostResistance,
            Ability.Freezing,
            Ability.Ranged
        ],
        faction: Faction.FrostClan,
        riftPoints: 1
    },
    FrostClanHeavyOrc: {
        name: "Frost Clan Heavy Orc",
        description: "Inadvertently imbued with frost magic by Tundra, these orcs have high health and deal frost damage. They can also freeze their enemies and are resistant to frost damage. However, they are susceptible to fire damage.",
        image: "images/enemies/Frost_Clan_Heavy_Orc_image.webp",
        type: EnemyType.Minion,
        hp: 616,
        abilities: [
            Ability.Swarming,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.FrostClan,
        riftPoints: 1
    },
    FrostClanKamikazeKobold: {
        name: "Frost Clan Kamikaze Kobold",
        description: "These chilly kobolds carry dynamite on their backs, detonating it and themselves to stop heroes and destroy barricades.",
        image: "images/enemies/Frost_Clan_Kamikaze_Kobold_image.webp",
        type: EnemyType.Minion,
        hp: 24,
        abilities: [
            Ability.Fast,
            Ability.BarricadeBash
        ],
        faction: Faction.FrostClan,
        riftPoints: 1
    },
    FrostClanKobold: {
        name: "Frost Clan Kobold",
        description: "Frost Clan Kobolds are fast--very fast. However, because they are weak, they rely on speed to get behind enemy lines. Large groups are difficult to keep out of rifts. They are resistant to frost damage but susceptible to fire damage.",
        image: "images/enemies/Frost_Clan_Kobold_image.webp",
        type: EnemyType.Minion,
        hp: 48,
        abilities: [
            Ability.Fast,
            Ability.Swarming,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.FrostClan,
        riftPoints: 1
    },
    FrostClanLightOrc: {
        name: "Frost Clan Light Orc",
        description: "Inadvertently imbued with frost magic by Tundra, these orcs are new, inexperienced recruits who deal light damage, wear light armor, and have low health, but tend to fight in groups. They can also freeze their enemies and are resistant to frost damage. However, they are susceptible to fire damage.",
        image: "images/enemies/Frost_Clan_Light_Orc_image.webp",
        type: EnemyType.Minion,
        hp: 96,
        abilities: [
            Ability.Swarming,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.FrostClan,
        riftPoints: 1
    },
    FrostClanMediumOrc: {
        name: "Frost Clan Medium Orc",
        description: "Inadvertently imbued with frost magic by Tundra, these orcs are slightly more experienced than light orcs. They deal moderate damage and have moderate health and armor. They can also freeze their enemies and are resistant to frost damage. However, they are susceptible to fire damage.",
        image: "images/enemies/Frost_Clan_Medium_Orc_image.webp",
        type: EnemyType.Minion,
        hp: 230,
        abilities: [
            Ability.Swarming,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.FrostClan,
        riftPoints: 1
    },
    FrostClanShieldTroll: {
        name: "Frost Clan Shield Troll",
        description: "Empowered by Tundra's magic, these large trolls use frosty shields. They shield themselves from frontal assaults, ignore heroes, regenerate health, and focus on guardians. They also ignore physics traps, are resistant to frost damage but susceptible to fire damage.",
        image: "images/enemies/Frost_Clan_Shield_Troll_image.webp",
        type: EnemyType.Minion,
        hp: 716,
        abilities: [
            Ability.Regenerating,
            Ability.Large,
            Ability.Blocking,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.FrostClan,
        riftPoints: 3
    },
    FrostClanTNTArcher: {
        name: "Frost Clan TNT Archer",
        description: "Although, imbued with frost magic, These orcs angered someone and were given a suicidal mission: shoot dynamite-laden arrows that explode after a few seconds. Arrows may be destroyed before detonation by attacking them. They are susceptible to fire damage.",
        image: "images/enemies/Frost_Clan_TNT_Archer_image.webp",
        type: EnemyType.Minion,
        hp: 255,
        abilities: [
            Ability.Grenadier,
            Ability.Ranged,
            Ability.FrostResistance
        ],
        faction: Faction.FrostClan,
        riftPoints: 1
    },
    FrostClanTroll: {
        name: "Frost Clan Troll",
        description: "Frost Clan trolls deal massive frost damage and regenerate their health. They are also unaffected by physics traps and resistant to frost damage.",
        image: "images/enemies/Frost_Clan_Troll_image.webp",
        type: EnemyType.Minion,
        hp: 1276,
        abilities: [
            Ability.Regenerating,
            Ability.Large,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.FrostClan,
        riftPoints: 2
    },
    FrostGiant: {
        name: "Frost Giant",
        description: "Slow but heavy-hitting, giants deal massive physical damage but are quick to anger. At low health, they move and attack more quickly.",
        image: "images/enemies/Frost_Giant_image.webp",
        type: EnemyType.Minion,
        hp: 1232,
        abilities: [
            Ability.Enraged,
            Ability.Large,
            Ability.Slow,
            Ability.Freezing,
            Ability.FrostResistance
        ],
        faction: Faction.Order,
        riftPoints: 3
    },
    FrostOgre: {
        name: "Frost Ogre",
        description: "Blessed by the ice lords, frost ogres deal frost damage and slow enemies. They ignore physics traps, are resistant to frost damage but susceptible to fire damage.",
        image: "images/enemies/Frost_Ogre_image.webp",
        type: EnemyType.Minion,
        hp: 990,
        abilities: [
            Ability.Stunning,
            Ability.Large,
            Ability.Freezing,
            Ability.FrostResistance
        ],
        faction: Faction.Unchained,
        riftPoints: 3
    },
    Giant: {
        name: "Giant",
        description: "Slow but heavy-hitting, giants deal massive physical damage but are quick to anger. At low health, they move and attack more quickly.",
        image: "images/enemies/Giant_image.webp",
        type: EnemyType.Minion,
        hp: 1232,
        abilities: [
            Ability.Enraged,
            Ability.Large,
            Ability.Slow
        ],
        faction: Faction.Order,
        riftPoints: 3
    },
    GnollGrenadier: {
        name: "Gnoll Grenadier",
        description: "These gnolls are playing with fire. They lob fire-damage dealing grenades at heroes and guardians, but are worth no rift points.",
        image: "images/enemies/Gnoll_Grenadier_image.webp",
        type: EnemyType.Minion,
        hp: 285,
        abilities: [
            Ability.BigGameHunting,
            Ability.Grenadier,
            Ability.Leaping
        ],
        faction: Faction.Unchained,
        riftPoints: 0
    },
    GnollHunter: {
        name: "Gnoll Hunter",
        description: "These gnolls are bloodthirsty hunters, looking to take down heroes and guardians. They deal massive physical damage but are worth no rift points. Sporting razor-sharp teeth, a fast loping gait, and powerful claws, gnoll hunters aren’t interested in getting through the rift – they’re interested in killing you! (They’re also interested in killing archers and paladins, but everyone knows tender young war mage is the sweetest meat of all.)",
        image: "images/enemies/Gnoll_Hunter_image.webp",
        type: EnemyType.Minion,
        hp: 400,
        abilities: [
            Ability.BigGameHunting,
            Ability.Maiming,
            Ability.Leaping,
            Ability.TrapResistant
        ],
        faction: Faction.Unchained,
        riftPoints: 0
    },
    GnomeDestroyer: {
        name: "Gnome Destroyer",
        description: "Crafty gnome destroyers bolt towards rifts, leaving everyone but kobolds in the dust. They are hearty for their size and hard to keep out of rifts.",
        image: "images/enemies/Gnome_Destroyer_image.webp",
        type: EnemyType.Minion,
        hp: 62,
        abilities: [
            Ability.BarricadeBash,
            Ability.Phasing
        ],
        faction: Faction.Order,
        riftPoints: 1
    },
    Grizzly: {
        name: "Grizzly",
        description: "Always ready and roaring for a fight, grizzly minions are large in size, have moderate health, and are angered when their allies fall.",
        image: "images/enemies/Grizzly_image.webp",
        type: EnemyType.Minion,
        hp: 425,
        abilities: [
            Ability.Vindictive,
            Ability.Large
        ],
        faction: Faction.Order,
        riftPoints: 2
    },
    HeavyFireFiend: {
        name: "Heavy Fire Fiend",
        description: "Called by the fire lords to fight, heavy fire fiends are veteran fighters who can take a lot of punishment and deal massive physical and fire damage. They are also resistant to fire damage but susceptible to frost damage.",
        image: "images/enemies/Heavy_Fire_Fiend_image.webp",
        type: EnemyType.Minion,
        hp: 616,
        abilities: [
            Ability.FlameRetardant,
            Ability.Swarming
        ],
        faction: Faction.FireFiends,
        riftPoints: 1
    },
    HeavyOrc: {
        name: "Heavy Orc",
        description: "Heavy orcs have more health and armor than all their orcish brethren and withstand punishing damage from traps and attacks.",
        image: "images/enemies/Heavy_Orc_image.webp",
        type: EnemyType.Minion,
        hp: 616,
        abilities: [
            Ability.Swarming
        ],
        faction: Faction.Unchained,
        riftPoints: 1
    },
    HeavySoldier: {
        name: "Heavy Soldier",
        description: "Veteran heavy soldiers are equipped with the finest weaponry and armor and have high health. They also resist damage at low health.",
        image: "images/enemies/Heavy_Soldier_image.webp",
        type: EnemyType.Minion,
        hp: 700,
        abilities: [
            Ability.Steady
        ],
        faction: Faction.Order,
        riftPoints: 1
    },
    HobgoblinShaman: {
        name: "Hobgoblin Shaman",
        description: "These hobgoblins have secret healing techniques known only by their cabal and loyally heal their allies. However, they have low health themselves.",
        image: "images/enemies/Hobgoblin_Shaman_image.webp",
        type: EnemyType.Minion,
        hp: 225,
        abilities: [
            Ability.TrapResistant,
            Ability.Healing
        ],
        faction: Faction.Unchained,
        riftPoints: 1
    },
    IceElemental: {
        name: "Ice Elemental",
        description: "Hailing from the frozen frost caverns of Arctos, Ice elementals are born from fragments of the Ice Lord, Iceberg. They are resistant to frost damage, but susceptible to fire damage, and splits into Icelings when damaged.",
        image: "images/enemies/Ice_Elemental_image.webp",
        type: EnemyType.Minion,
        hp: 940,
        abilities: [
            Ability.Replication,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.Elementals,
        riftPoints: 2
    },
    Iceling: {
        name: "Iceling",
        description: "Icelings cleave from ice elementals when they die. They are fast, small and hard to kill, and can overwhelm heroes when in groups. They are also resistant to frost damage, but susceptible to fire damage.",
        image: "images/enemies/Iceling_image.webp",
        type: EnemyType.Minion,
        hp: 120,
        abilities: [
            Ability.FrostResistance,
            Ability.Freezing,
            Ability.Fast
        ],
        faction: Faction.Elementals,
        riftPoints: 1
    },
    KamikazeKobold: {
        name: "Kamikaze Kobold",
        description: "These kobolds carry dynamite on their backs, detonating it and themselves to stop heroes and destroy barricades.",
        image: "images/enemies/Kamikaze_Kobold_image.webp",
        type: EnemyType.Minion,
        hp: 24,
        abilities: [
            Ability.Fast,
            Ability.BarricadeBash
        ],
        faction: Faction.Unchained,
        riftPoints: 1
    },
    KoboldPup: {
        name: "Kobold Pup",
        description: "Kobold pups are young, very fast kobolds. Because of their small size, they are hard to catch and keep out of rifts but have low health.",
        image: "images/enemies/Kobold_Pup_image.webp",
        type: EnemyType.Minion,
        hp: 10,
        abilities: [
            Ability.Fast,
            Ability.Swarming
        ],
        faction: Faction.Unchained,
        riftPoints: 1
    },
    KoboldRunner: {
        name: "Kobold Runner",
        description: "Kobold runners are fast and drawn to rifts. They have low health and are easy to kill, but large groups are difficult to keep out of rifts.",
        image: "images/enemies/Kobold_Runner_image.webp",
        type: EnemyType.Minion,
        hp: 48,
        abilities: [
            Ability.Swarming,
            Ability.Fast
        ],
        faction: Faction.Unchained,
        riftPoints: 1
    },
    LightFireFiend: {
        name: "Light Fire Fiend",
        description: "Called by the fire lords to fight, these are inexperienced warriors who deal light damage, wear light armor, and have low health, but tend to fight in groups. They are also resistant to fire damage but susceptible to frost damage.",
        image: "images/enemies/Light_Fire_Fiend_image.webp",
        type: EnemyType.Minion,
        hp: 96,
        abilities: [
            Ability.FlameRetardant,
            Ability.Swarming
        ],
        faction: Faction.FireFiends,
        riftPoints: 1
    },
    LightOrc: {
        name: "Light Orc",
        description: "Light orcs are new, inexperienced Unchained recruits who deal light damage, wear light armor, and have low health, but tend to fight in groups.",
        image: "images/enemies/Light_Orc_image.webp",
        type: EnemyType.Minion,
        hp: 96,
        abilities: [
            Ability.Swarming
        ],
        faction: Faction.Unchained,
        riftPoints: 1
    },
    LightSoldier: {
        name: "Light Soldier",
        description: "Light soldiers are average in every way, dealing average damage, and having average health and armor. They gain damage resistance at low health.",
        image: "images/enemies/Light_Soldier_image.webp",
        type: EnemyType.Minion,
        hp: 118,
        abilities: [
            Ability.Steady
        ],
        faction: Faction.Order,
        riftPoints: 1
    },
    MediumFireFiend: {
        name: "Medium Fire Fiend",
        description: "As servants of the fire lords, these warriors are the fiery heart of the fiend army. They deal moderate physical and fire damage, have moderate health, and are resistant to fire damage. However, they are susceptible to frost damage.",
        image: "images/enemies/Medium_Fire_Fiend_image.webp",
        type: EnemyType.Minion,
        hp: 230,
        abilities: [
            Ability.FlameRetardant,
            Ability.Swarming
        ],
        faction: Faction.FireFiends,
        riftPoints: 1
    },
    MediumOrc: {
        name: "Medium Orc",
        description: "Medium orcs are slightly more experienced than light orcs. They deal moderate damage and have moderate health and armor. They’re ugly, they’re dumb, they stink, and they have a terrible dental plan. They’re determined to get to the rifts, no matter what stands in the way. Clearly they must die - and fortunately they die easily and in large numbers. Just don’t get too close; their swords are rusty enough to cause a nasty case of lockjaw.",
        image: "images/enemies/Medium_Orc_image.webp",
        type: EnemyType.Minion,
        hp: 230,
        abilities: [
            Ability.Swarming
        ],
        faction: Faction.Unchained,
        riftPoints: 1
    },
    MediumSoldier: {
        name: "Medium Soldier",
        description: "As experienced soldiers, medium soldiers have moderate armor and health, and deal moderate damage. They gain damage resistance at low health.",
        image: "images/enemies/Medium_Soldier_image.webp",
        type: EnemyType.Minion,
        hp: 294,
        abilities: [
            Ability.Steady
        ],
        faction: Faction.Order,
        riftPoints: 1
    },
    MountainTroll: {
        name: "Mountain Troll",
        description: "Once thought to be a myth, mountain trolls deal massive physical damage and regenerate health. They also ignore physics traps.",
        image: "images/enemies/Mountain_Troll_image.webp",
        type: EnemyType.Minion,
        hp: 1680,
        abilities: [
            Ability.Regenerating,
            Ability.Large
        ],
        faction: Faction.Unchained,
        riftPoints: 4
    },
    NorthmunCrossbowman: {
        name: "Northmun Crossbowman",
        description: "As the ranged guard of Deg Itan, these archers deal massive frost damage. They are deadly in groups. They have low health but damage resistance at low health. They are resistant to frost damage, but susceptible to fire damage.",
        image: "images/enemies/Northmun_Crossbowman_image.webp",
        type: EnemyType.Minion,
        hp: 128,
        abilities: [
            Ability.Ranged,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.Northmun,
        riftPoints: 1
    },
    NorthmunHeavySoldier: {
        name: "Northmun Heavy Soldier",
        description: "As the elite guard of Deg Itan, these soldiers deal massive frost and physical damage. They have high health but also damage resistance at low health. They are resistant to frost damage, but susceptible to fire damage.",
        image: "images/enemies/Northmun_Heavy_Soldier_image.webp",
        type: EnemyType.Minion,
        hp: 700,
        abilities: [
            Ability.Swarming,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.Northmun,
        riftPoints: 1
    },
    NorthmunLightSoldier: {
        name: "Northmun Light Soldier",
        description: "As the lowest ranks in the guard of Deg Itan, these soldiers are average in every way, dealing average frost damage, and having average health and armor. Although they gain damage resistance at low health and they are resistant to frost damage, but susceptible to fire damage.",
        image: "images/enemies/Northmun_Light_Soldier_image.webp",
        type: EnemyType.Minion,
        hp: 118,
        abilities: [
            Ability.Swarming,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.Northmun,
        riftPoints: 1
    },
    NorthmunMediumSoldier: {
        name: "Northmun Medium Soldier",
        description: "As part of the guard of Deg Itan, these soldiers have moderate armor and health, and deal moderate frost damage. They gain damage resistance at low health and they are resistant to frost damage, but susceptible to fire damage.",
        image: "images/enemies/Northmun_Medium_Soldier_image.webp",
        type: EnemyType.Minion,
        hp: 294,
        abilities: [
            Ability.Swarming,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.Northmun,
        riftPoints: 1
    },
    Ogre: {
        name: "Ogre",
        description: "Angry, lumbering ogres charge in, heavily slowing their enemies with their blows. They are also not affected by physics traps.",
        image: "images/enemies/Ogre_image.webp",
        type: EnemyType.Minion,
        hp: 750,
        abilities: [
            Ability.Large,
            Ability.Stunning
        ],
        faction: Faction.Unchained,
        riftPoints: 2
    },
    OrcArcher: {
        name: "Orc Archer",
        description: "Having little training other than pointy end that way, orc archers deal moderate ranged damage but have low health. Five brain cells smarter and a head taller than the average orc, these guys have been trained to point a crossbow at their enemies and pull the little trigger (the one by their finger). Given that orcs have the eyesight of an aged mole, their aim is pretty good. They’re more dangerous than their sword-wielding buddies; obviously, all orcs must die, but maybe these orcs should die first.",
        image: "images/enemies/Orc_Archer_image.webp",
        type: EnemyType.Minion,
        hp: 175,
        abilities: [
            Ability.Ranged
        ],
        faction: Faction.Unchained,
        riftPoints: 1
    },
    OrcTNTArcher: {
        name: "Orc TNT Archer",
        description: "These orcs angered someone and were given a suicidal mission: shoot dynamite-laden arrows that explode after a few seconds. Arrows may be destroyed before detonation.",
        image: "images/enemies/Orc_TNT_Archer_image.webp",
        type: EnemyType.Minion,
        hp: 255,
        abilities: [
            Ability.Grenadier,
            Ability.Ranged
        ],
        faction: Faction.Unchained,
        riftPoints: 1
    },
    OrderMage: {
        name: "Order Mage",
        description: "These mages are masters of fire magic, casting high-damage, ranged fire spells. They have low health, but are resistant to trap damage.",
        image: "images/enemies/Order_Mage_image.webp",
        type: EnemyType.Minion,
        hp: 448,
        abilities: [
            Ability.Ranged,
            Ability.HighDamage,
            Ability.TrapResistant
        ],
        faction: Faction.Order,
        riftPoints: 4
    },
    PirateHeavyOrc: {
        name: "Pirate Heavy Orc",
        description: "Murderous orc pirates maraude the seas of Centre. These orcs are faster and better at fighting, dealing more damage than other heavy orcs but have less health.",
        image: "images/enemies/Pirate_Heavy_Orc_image.webp",
        type: EnemyType.Minion,
        hp: 297,
        abilities: [
            Ability.Swarming
        ],
        faction: Faction.Pirates,
        riftPoints: 1
    },
    PirateLightOrc: {
        name: "Pirate Light Orc",
        description: "Murderous orc pirates maraude the seas of Centre. These orcs are faster and better at fighting, dealing more damage than other light orcs but have less health.",
        image: "images/enemies/Pirate_Light_Orc_image.webp",
        type: EnemyType.Minion,
        hp: 48,
        abilities: [
            Ability.Swarming
        ],
        faction: Faction.Pirates,
        riftPoints: 1
    },
    PirateMediumOrc: {
        name: "Pirate Medium Orc",
        description: "These salty sea orcs have less health than medium orcs but are faster and deal more damage.",
        image: "images/enemies/Pirate_Medium_Orc_image.webp",
        type: EnemyType.Minion,
        hp: 90,
        abilities: [
            Ability.Swarming
        ],
        faction: Faction.Pirates,
        riftPoints: 1
    },
    PirateOgre: {
        name: "Pirate Ogre",
        description: "Ogre pirates have a little less health but are faster and deal more damage than other ogres. Like all ogres, they slow their enemies.",
        image: "images/enemies/Pirate_Ogre_image.webp",
        type: EnemyType.Minion,
        hp: 750,
        abilities: [
            Ability.Large,
            Ability.Stunning
        ],
        faction: Faction.Pirates,
        riftPoints: 2
    },
    PirateShieldTroll: {
        name: "Pirate Shield Troll",
        description: "As expected, trolls make great pirates. Shield troll pirates deal more damage than normal shield trolls and regenerate health, but have less overall health. Blocks Frontal Attacks and only Attacks Guardians.",
        image: "images/enemies/Pirate_Shield_Troll_image.webp",
        type: EnemyType.Minion,
        hp: 728,
        abilities: [
            Ability.Regenerating,
            Ability.Large,
            Ability.Blocking
        ],
        faction: Faction.Pirates,
        riftPoints: 3
    },
    PirateTroll: {
        name: "Pirate Troll",
        description: "Unsurprisingly, trolls make pretty good pirates. Troll pirates deal more damage than normal trolls and regenerate health, but have less overall health.",
        image: "images/enemies/Pirate_Troll_image.webp",
        type: EnemyType.Minion,
        hp: 1344,
        abilities: [
            Ability.Regenerating,
            Ability.Large
        ],
        faction: Faction.Pirates,
        riftPoints: 2
    },
    PrideHunter: {
        name: "Pride Hunter",
        description: "Vengeful pride hunters pursue and take down heroes. They also regain health when nearby allies die. They are worth no rift points.",
        image: "images/enemies/Pride_Hunter_image.webp",
        type: EnemyType.Minion,
        hp: 400,
        abilities: [
            Ability.Vindictive,
            Ability.BigGameHunting,
            Ability.Leaping,
            Ability.TrapResistant
        ],
        faction: Faction.Order,
        riftPoints: 0
    },
    SatyrRunner: {
        name: "Satyr Runner",
        description: "Known for their distinctive call, satyr runners are small and weak but fast. They ignore heroes, avoid damage, and run straight for rifts.",
        image: "images/enemies/Satyr_Runner_image.webp",
        type: EnemyType.Minion,
        hp: 80,
        abilities: [
            Ability.Phasing,
            Ability.Fast,
            Ability.Swarming
        ],
        faction: Faction.Order,
        riftPoints: 1
    },
    ShieldGrizzly: {
        name: "Shield Grizzly",
        description: "What's worse than a grizzly? A grizzly with a shield. Shielded from the front, these large minions target guardians and ignore heroes.",
        image: "images/enemies/Shield_Grizzly_image.webp",
        type: EnemyType.Minion,
        hp: 403,
        abilities: [
            Ability.Large,
            Ability.Blocking
        ],
        faction: Faction.Order,
        riftPoints: 2
    },
    ShieldTroll: {
        name: "Shield Troll",
        description: "These large trolls have discovered shields. They shield themselves from frontal assaults, ignore heroes, regenerate health, and focus on guardians.",
        image: "images/enemies/Shield_Troll_image.webp",
        type: EnemyType.Minion,
        hp: 728,
        abilities: [
            Ability.Regenerating,
            Ability.Large,
            Ability.Blocking
        ],
        faction: Faction.Unchained,
        riftPoints: 3
    },
    StiltOrc: {
        name: "Stilt Orc",
        description: "These acrobatically-inclined orcs are immune to floor traps due to their stilt-bound legs. They also carry long spears with which they deal physical melee damage. Although they are hard to hit and have a long reach, they have low health.",
        image: "images/enemies/Stilt_Orc_image.webp",
        type: EnemyType.Minion,
        hp: 400,
        abilities: [
            Ability.Overstepping
        ],
        faction: Faction.Unchained,
        riftPoints: 1
    },
    Troll: {
        name: "Troll",
        description: "Large and thankfully solitary, trolls deal massive physical damage and regenerate health. They are also large enough to ignore physics traps.",
        image: "images/enemies/Troll_image.webp",
        type: EnemyType.Minion,
        hp: 1344,
        abilities: [
            Ability.Regenerating,
            Ability.Large
        ],
        faction: Faction.Unchained,
        riftPoints: 2
    },
    WuXingArcaneMage: {
        name: "Wu Xing Arcane Mage",
        description: "These powerful mages are schooled in an extremely powerful version of arcane magic. Firing arcane grenades these mages can pile up the damage fast in numbers.",
        image: "images/enemies/Wu_Xing_Arcane_Mage_image.webp",
        type: EnemyType.Minion,
        hp: 448,
        abilities: [
            Ability.Homing,
            Ability.HighDamage,
            Ability.TrapResistant
        ],
        faction: Faction.WuXingDynasty,
        riftPoints: 4
    },
    WuXingArcher: {
        name: "Wu Xing Archer",
        description: "These heavily trained archers have Magic Armor and fire a small rockets that can damage things around its target.",
        image: "images/enemies/Wu_Xing_Archer_image.webp",
        type: EnemyType.Minion,
        hp: 263,
        abilities: [
            Ability.Ranged,
            Ability.MagicArmor
        ],
        faction: Faction.WuXingDynasty,
        riftPoints: 1
    },
    WuXingBear: {
        name: "Wu Xing Bear",
        description: "These ferocious, bear minions are intimidating in size and heal when their allies fall.",
        image: "images/enemies/Wu_Xing_Bear_image.webp",
        type: EnemyType.Minion,
        hp: 390,
        abilities: [
            Ability.Vindictive,
            Ability.Large
        ],
        faction: Faction.WuXingDynasty,
        riftPoints: 2
    },
    WuXingHeavySoldier: {
        name: "Wu Xing Heavy Soldier",
        description: "Heavy Wu Xing soldiers have more health and Magic Armor than other soldiers and withstand punishing damage from traps and attacks.",
        image: "images/enemies/Wu_Xing_Heavy_Soldier_image.webp",
        type: EnemyType.Minion,
        hp: 650,
        abilities: [
            Ability.MagicArmor
        ],
        faction: Faction.WuXingDynasty,
        riftPoints: 1
    },
    WuXingHunter: {
        name: "Wu Xing Hunter",
        description: "With the swiftness of a cat these dragon assassins move in quickly and attack heroes without any warning at all.",
        image: "images/enemies/Wu_Xing_Hunter_image.webp",
        type: EnemyType.Minion,
        hp: 400,
        abilities: [
            Ability.BigGameHunting,
            Ability.Leaping
        ],
        faction: Faction.WuXingDynasty,
        riftPoints: 0
    },
    WuXingLightSoldier: {
        name: "Wu Xing Light Soldier",
        description: "These inexperienced soldiers have an average amount of health but have Magic Armor. They deal an average amount of physical damage can wreck enemy defenses in large groups.",
        image: "images/enemies/Wu_Xing_Light_Soldier_image.webp",
        type: EnemyType.Minion,
        hp: 107,
        abilities: [
            Ability.MagicArmor
        ],
        faction: Faction.WuXingDynasty,
        riftPoints: 1
    },
    WuXingLightningMage: {
        name: "Wu Xing Lightning Mage",
        description: "These powerful mages are schooled in an extremely powerful version of lightning magic. Like their arcane counterparts, Wu Xing lightning grenades can pile up the damage fast if ignored.",
        image: "images/enemies/Wu_Xing_Lightning_Mage_image.webp",
        type: EnemyType.Minion,
        hp: 448,
        abilities: [
            Ability.Homing,
            Ability.HighDamage,
            Ability.TrapResistant
        ],
        faction: Faction.WuXingDynasty,
        riftPoints: 4
    },
    WuXingMediumSoldier: {
        name: "Wu Xing Medium Soldier",
        description: "Medium Wu Xing soldiers are slightly more experienced than their light counterparts. They deal moderate damage and have moderate health and also have Magic Armor.",
        image: "images/enemies/Wu_Xing_Medium_Soldier_image.webp",
        type: EnemyType.Minion,
        hp: 263,
        abilities: [
            Ability.MagicArmor
        ],
        faction: Faction.WuXingDynasty,
        riftPoints: 1
    },
    WuXingRedPanda: {
        name: "Wu Xing Red Panda",
        description: "These magical creatures have the power to drastically speed up their allies increasing the chances of a rift breach.",
        image: "images/enemies/Wu_Xing_Red_Panda_image.webp",
        type: EnemyType.Minion,
        hp: 128,
        abilities: [
            Ability.Swifty,
            Ability.TrapResistant
        ],
        faction: Faction.WuXingDynasty,
        riftPoints: 1
    },
    WuXingTerracottaGiant: {
        name: "Wu Xing Terracotta Giant",
        description: "The heavy walk of these high hit point clay monsters shakes the earth so violently that that it can be very hard to move when near them.",
        image: "images/enemies/Wu_Xing_Terracotta_Giant_image.webp",
        type: EnemyType.Minion,
        hp: 1232,
        abilities: [
            Ability.Large,
            Ability.Slow,
            Ability.Slowing
        ],
        faction: Faction.WuXingDynasty,
        riftPoints: 3
    },
    BulgodTheArmoredOgre: {
        name: "Bulgod the Armored Ogre",
        description: "As an armored ogre general, Bulgod disables traps in a wide area with his attacks, giving his troops a better chance at surviving.",
        image: "images/enemies/Bulgod_the_Armored_Ogre_image.webp",
        type: EnemyType.Boss,
        hp: 3920,
        abilities: [
            Ability.Stunning,
            Ability.Large,
            Ability.Shockwave
        ],
        faction: Faction.Unchained,
        riftPoints: 4
    },    
    CommanderTower: {
        name: "Commander Tower",
        description: "Commander Tower leads his army to victory by leading the charge and protecting all minions behind him with towering shield.",
        image: "images/enemies/Commander_Tower_image.webp",
        type: EnemyType.Boss,
        hp: 3800,
        abilities: [
            Ability.Large,
            Ability.Blocking
        ],
        faction: Faction.Order,
        riftPoints: 6
    },
    Dread: {
        name: "Dread",
        description: "His name is what the Order feels when they see him on the battlefield. Dread, an orc general, buffs his compatriots with health to help them survive.",
        image: "images/enemies/Dread_image.webp",
        type: EnemyType.Boss,
        hp: 2240,
        abilities: [
            Ability.Large,
            Ability.Dread
        ],
        faction: Faction.Unchained,
        riftPoints: 4
    },
    GaeadinTheEarthLord: {
        name: "Gaeadin the Earth Lord",
        description: "The Earth Lord, Gaeadin, is immune to slows and stuns and splits into smaller versions of herself when destroyed, making her very hard to kill.",
        image: "images/enemies/Gaeadin_the_Earth_Lord_image.webp",
        type: EnemyType.Boss,
        hp: 3000,
        abilities: [
            Ability.Unstoppable,
            Ability.Large,
            Ability.Replication
        ],
        faction: Faction.Elementals,
        riftPoints: 6
    },
    GrenwaldeTheNatureLord: {
        name: "Grenwalde the Nature Lord",
        description: "The Nature Lord, Grenwalde, blesses those who respect nature by using his powers to heal his allies. He also steals life from his foes.",
        image: "images/enemies/Grenwalde_the_Nature_Lord_image.webp",
        type: EnemyType.Boss,
        hp: 2800,
        abilities: [
            Ability.Large,
            Ability.Healing,
            Ability.Lifesteal
        ],
        faction: Faction.Elementals,
        riftPoints: 4
    },
    IcebergTheIceLord: {
        name: "Iceberg the Ice Lord",
        description: "He is resistant to frost damage, but susceptible to fire damage, and splits into smaller elementals when damaged. The Ice Lord, Iceberg, hails from the frozen frost caverns of Arctos. The release of frost magic has also attracted the attention of Iceberg. Always vigilant, Iceberg will seek out and punish those who misuse ice magic. He is not happy that the Unchained now have the power to use frost magic.",
        image: "images/enemies/Iceberg_the_Ice_Lord_image.webp",
        type: EnemyType.Boss,
        hp: 3800,
        abilities: [
            Ability.Large,
            Ability.Replication,
            Ability.FrostResistance,
            Ability.Freezing
        ],
        faction: Faction.Elementals,
        riftPoints: 6
    },
    LyzanderCultOfDeathResurrector: {
        name: "Lyzander, Cult of Death Resurrector",
        description: "'Death is as impermanent as life if you know the secrets of resurrection.' - Stallid, High Priest of the Cult of Death",
        image: "images/enemies/Lyzander,_Cult_of_Death_Resurrector_image.webp",
        type: EnemyType.Boss,
        hp: 2800,
        abilities: [
            Ability.Large,
            Ability.Resurrecting
        ],
        faction: Faction.Unchained,
        riftPoints: 4
    },
    MrMoneybags: {
        name: "Mr. Moneybags",
        description: "A well-heeled ogre from old ogre money, Mr. Moneybags runs to the Rift ignoring everything but also leaves a generous amount of coin behind when killed. He is also completely harmless and doesn't give any damage to the Rift, which making him very easy to kill.",
        image: "images/enemies/Mr._Moneybags_image.webp",
        type: EnemyType.Boss,
        hp: 3920,
        abilities: [
            Ability.Large,
            Ability.Rich
        ],
        faction: Faction.Unchained,
        riftPoints: 0
    },
    OrfumTheMountainTroll: {
        name: "Orfum the Mountain Troll",
        description: "A venerated mountain troll warrior, Orfum deals an impressive amount of damage and regenerates his health quickly. He ignores physics traps.",
        image: "images/enemies/Orfum_the_Mountain_Troll_image.webp",
        type: EnemyType.Boss,
        hp: 3360,
        abilities: [
            Ability.Large,
            Ability.BarricadeBash,
            Ability.Regenerating
        ],
        faction: Faction.Unchained,
        riftPoints: 6
    },
    Sarge: {
        name: "Sarge",
        description: "Sarge is a legend among Order soldiers, and his mere presence inspires them to fight more fiercely. Soldiers near Sarge deal increased damage.",
        image: "images/enemies/Sarge_image.webp",
        type: EnemyType.Boss,
        hp: 2576,
        abilities: [
            Ability.Large,
            Ability.Steady,
            Ability.Sarge
        ],
        faction: Faction.Order,
        riftPoints: 4
    },
    ScurvyRumrudder: {
        name: "Scurvy Rumrudder",
        description: "As a full-time pirate and part-time guardian, Scurvy Rumrudder knows how to hit a guardian where it hurts. As a boss, Scurvy deals increased damage to guardians.",
        image: "images/enemies/Scurvy_Rumrudder_image.webp",
        type: EnemyType.Boss,
        hp: 2240,
        abilities: [
            Ability.Large,
            Ability.Scurvy
        ],
        faction: Faction.Pirates,
        riftPoints: 4
    },
    SnowflakeTheYeti: {
        name: "Snowflake the Yeti",
        description: "When angered, Snowflake loves to lob deadly snowballs at her enemies, freezing them as she angrily stomps towards their rifts. Snowflake is not as gentle as her name implies. The frosty conditions have made the climate more comfortable for the yeti, who have made their way into the region. The most notorious of these yeti is the incorrigible Snowflake. If encountered, it is best to get out of her way! She is resistant to frost damage but susceptible to fire damage.",
        image: "images/enemies/Snowflake_the_Yeti_image.webp",
        type: EnemyType.Boss,
        hp: 3920,
        abilities: [
            Ability.Enraged,
            Ability.Large,
            Ability.Slow
        ],
        faction: Faction.FrostClan,
        riftPoints: 4
    },
    Swiftyhooves: {
        name: "Swiftyhooves",
        description: "A very large and very fast satyr, Swiftyhooves dashes quickly towards enemy rifts, jumping any walls or barricades in his path.",
        image: "images/enemies/Swiftyhooves_image.webp",
        type: EnemyType.Boss,
        hp: 2464,
        abilities: [
            Ability.Large,
            Ability.Leaping,
            Ability.Fast
        ],
        faction: Faction.Order,
        riftPoints: 6
    },
    TikLikTheHobgoblinShaman: {
        name: "TikLik the Hobgoblin Shaman",
        description: "The leader of the hobgoblin shamans, TikLik, wears the mysteriously powerful chieftain mask. TikLik uses his powers to heal his allies and steal life from his enemies.",
        image: "images/enemies/TikLik_the_Hobgoblin_Shaman_image.webp",
        type: EnemyType.Boss,
        hp: 672,
        abilities: [
            Ability.Large,
            Ability.Healing,
            Ability.Lifesteal
        ],
        faction: Faction.Unchained,
        riftPoints: 4
    },
    Tubifore: {
        name: "Tubifore",
        description: "The son Bionka never speaks of, Tubifore, attacks barricades and regenerates health when he is not taking damage. Nobody knows for sure what this four-armed, two-headed boss is, but he is as effective as he is strange-looking. Using his four, giant fists, he smashes through barricades. He's a resilient boss too, regenerating his health when out of combat. Rumor has it that this boss is another of Bionka's sons, but she's not talking and we're not rude enough to ask.",
        image: "images/enemies/Tubifore_image.webp",
        type: EnemyType.Boss,
        hp: 3360,
        abilities: [
            Ability.Large,
            Ability.BarricadeBash,
            Ability.Regenerating
        ],
        faction: Faction.Unchained,
        riftPoints: 6
    },
    UrzaTheFireLord: {
        name: "Urza the Fire Lord",
        description: "As king of the fire lords, Urza is very hard to kill. When Urza's main form is destroyed, he splits into smaller, explosive versions of himself. Urza also resists fire damage.",
        image: "images/enemies/Urza_the_Fire_Lord_image.webp",
        type: EnemyType.Boss,
        hp: 5040,
        abilities: [
            Ability.Large,
            Ability.Replication,
            Ability.FlameRetardant
        ],
        faction: Faction.Elementals,
        riftPoints: 6
    },
    VitalityTheCyclopsResurrector: {
        name: "Vitality the Cyclops Resurrector",
        description: "As a disciple of Stinkeye, Vitality has learned the secrets of resurrection. On the battlefield, Vitality resurrects allied minions and steals life from his foes.",
        image: "images/enemies/Vitality_the_Cyclops_Resurrector_image.webp",
        type: EnemyType.Boss,
        hp: 2800,
        abilities: [
            Ability.Large,
            Ability.Resurrecting
        ],
        faction: Faction.Unchained,
        riftPoints: 4
    },
    BouncerBear: {
        name: "Bouncer Bear",
        description: "Bouncing Bear is a Mercenary that defends the minions, he escorts the minions to the rift attacking enemy heroes that are in the way. He charges against nearby Heroes knocking them back on hit and dealing damage to barricades in the way of his charge. If he reaches the Rift or there are no minions left, he will charge all the way back to the Minion Portal. Mercenaries can leap over Barricades. The last thing a hero wants is to be bounced by the Bouncer Bear. This bear acts as a bodyguard to allied minions and escorts them to the rift. When heroes get too close, he charges them, knocking them back (potentially into battleground hazards) and dealing damage to any barricades in his way. Be careful around the Bouncer Bear, or your hero may find themselves bounced out of the battleground.",
        image: "images/enemies/Bouncer_Bear_image.webp",
        type: EnemyType.Mercenary,
        hp: 0,
        abilities: [
            Ability.Charge,
            Ability.Retreat
        ],
        faction: Faction.Order,
        riftPoints: 0
    },
    ChaoticKobold: {
        name: "Chaotic Kobold",
        description: "Chaotic Kobold is a Mercenary that runs around the map ignoring heroes and disabling traps, they are very fast Mercenaries that run around the map creating energy crystals that disable nearby traps. Mercenaries can leap over Barricades. Rushing onto the battleground at great speed, the Chaotic Kobold is hard to hit and kill. What makes him an even more challenging is his penchant for 'gifting' crystals all over the battleground that disable nearby traps and slow nearby heroes. But disabling the crystals won't do a hero much good; until he's dead, he will continue to speed around the map placing and re-placing crystals.",
        image: "images/enemies/Chaotic_Kobold_image.webp",
        type: EnemyType.Mercenary,
        hp: 0,
        abilities: [
            Ability.ChaosCrystals,
            Ability.Fast
        ],
        faction: Faction.Unchained,
        riftPoints: 0
    },
    DwarfPriest: {
        name: "Dwarf Priest",
        description: "Dwarf Priest is a Mercenary that escorts minions, he can create a bubble shield around him that prevents minions inside from taking damage coming from outside the shield. He also has a very powerful spell that heals nearby minions over time, a long and powerful regeneration buff. He retreats to the Minion Portal when he reaches the rift or no minions are remaining Mercenaries can leap over Barricades. Equipped with the ability to shield minions, heal them, and buff them with damage dealing and reduction spells, this slow-moving mercenary, the Dwarf Shaman, protects allied minions while escorting them to the rift. Heroes must either stand inside the shield or kill the Dwarf Shaman to damage his minion allies. Once he reaches the rift, he will go back to the start of a lane to escort more minions.",
        image: "images/enemies/Dwarf_Priest_image.webp",
        type: EnemyType.Mercenary,
        hp: 0,
        abilities: [
            Ability.ArcaneShield,
            Ability.ArcaneRegeneration
        ],
        faction: Faction.Order,
        riftPoints: 0
    },
    GnollBreeder: {
        name: "Gnoll Breeder",
        description: "Gnoll Breeder is a Mercenary that hunts Heroes, he throws cages near enemy heroes that spawn 4 Teacup Gnolls which hunt heroes down by their high damage and slow debuff on hit. The mercenary is unable to directly attack. Mercenaries can leap over Barricades.",
        image: "images/enemies/Gnoll_Breeder_image.webp",
        type: EnemyType.Mercenary,
        hp: 0,
        abilities: [
            Ability.Leaping,
            Ability.OutofGnollwhere
        ],
        faction: Faction.Unchained,
        riftPoints: 0
    },
    HumaniMage: {
        name: "Human iMage",
        description: "Human iMages are masters of disguise who create iMages of themselves to confuse and hunt down heroes. The iMages use magic of all 4 elements to attack the Heroes, each of the clones uses a different type of magic. If the heroes take down a fake iMage, the iMage will respawn. But if heroes are able to kill the real Mage, all the iMages will fall with him. It spawns as many clones as players are in the match. Mercenaries can leap over Barricades.",
        image: "images/enemies/Human_iMage_image.webp",
        type: EnemyType.Mercenary,
        hp: 0,
        abilities: [
            Ability.Clones
        ],
        faction: Faction.Order,
        riftPoints: 0
    },
    PrideAssassin: {
        name: "Pride Assassin",
        description: "Pride Assassin is a Mercenary that hunts Heroes. These highly-trained, stealthy assassins hunt random heroes. They use cloak to get close to their prey, attack, and then cloak again to retreat and heal. They can heal up to 50% when entering stealth. Chased Hero will see a mark in their screen. Mercenaries can leap over Barricades. Cloaked in shadow, the Pride Assassin stalks the battleground invisible to its enemies, hunting down heroes and 'marking' them for assassination. When he goes in for the kill, he reveals himself at close range and launches a devastating melee attack. If the hero puts up a fight, the Pride Assassin retreats to the shadows to heal its wounds. Once healed enough, it will return to attack and will keep retreating and attacking until he is killed.",
        image: "images/enemies/Pride_Assassin_image.webp",
        type: EnemyType.Mercenary,
        hp: 0,
        abilities: [
            Ability.Cloak
        ],
        faction: Faction.Order,
        riftPoints: 0
    },
    TeacupGnoll: {
        name: "Teacup Gnoll",
        description: "Teacup Gnoll is a Mercenary that hunts Heroes, teacup gnolls are used as weapons by Gnoll Breeders, they only spawn when a Breeder encounters enemy heroes and release them. Teacup Gnolls have high damage attacks but low health, they also heavily slow enemies on hit. They are temporal minions and disappear after some seconds. Mercenaries can leap over Barricades.",
        image: "images/enemies/Teacup_Gnoll_image.webp",
        type: EnemyType.Mercenary,
        hp: 0,
        abilities: [
            Ability.Maiming
        ],
        faction: Faction.Unchained,
        riftPoints: 0
    }
});

export default enemies;
