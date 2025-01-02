const Ability = Object.freeze({
    BarricadeBash: {
        name: "Barricade Bash",
        description: "Destroys wall and barricade traps.",
        icon: "images/enemy-abilities/Barricade_Bash_icon.webp"
    },
    BigGameHunting: {
        name: "Big Game Hunting",
        description: "Hunts down Heroes.",
        icon: "images/enemy-abilities/Big_Game_Hunting_icon.webp"
    },
    Blocking: {
        name: "Blocking",
        description: "Blocks frontal assaults.",
        icon: "images/enemy-abilities/Blocking_icon.webp"
    },
    Enraged: {
        name: "Enraged",
        description: "Doubles movement and attack speed when below 35% health.",
        icon: "images/enemy-abilities/Enraged_icon.webp"
    },
    Fast: {
        name: "Fast",
        description: "Quick and not easily distracted.",
        icon: "images/enemy-abilities/Fast_icon.webp"
    },
    FlameRetardant: {
        name: "Flame Retardant",
        description: "+50% Fire damage resistance.",
        icon: "images/enemy-abilities/Flame_Retardant_icon.webp"
    },
    Freezing: {
        name: "Freezing",
        description: "Immobilizes enemies with frost magic.",
        icon: "images/enemy-abilities/Freezing_icon.webp"
    },
    FrostResistance: {
        name: "Frost Resistance",
        description: "Protected against frost damage (+100 frost armor).",
        icon: "images/enemy-abilities/Frost_Resistance_icon.webp"
    },
    Grenadier: {
        name: "Grenadier",
        description: "Throws bombs at enemies.",
        icon: "images/enemy-abilities/Grenadier_icon.webp"
    },
    Healing: {
        name: "Healing",
        description: "Heals nearby minions.",
        icon: "images/enemy-abilities/Healing_icon.webp"
    },
    HighDamage: {
        name: "High Damage",
        description: "Deals high damage.",
        icon: "images/enemy-abilities/High_Damage_icon.webp"
    },
    Homing: {
        name: "Homing",
        description: "Fires enemy-seeking projectiles. ",
        icon: "images/enemy-abilities/Homing_icon.webp"
    },
    Immolating: {
        name: "Immolating",
        description: "Damages nearby barricades.",
        icon: "images/enemy-abilities/Immolating_icon.webp"
    },
    Large: {
        name: "Large",
        description: "Unaffected by physics Traps.",
        icon: "images/enemy-abilities/Large_icon.webp"
    },
    Leaping: {
        name: "Leaping",
        description: "Jumps over barricade and wall traps.",
        icon: "images/enemy-abilities/Leaping_icon.webp"
    },
    Lifesteal: {
        name: "Lifesteal",
        description: "Casts a lifestealing spell on nearby enemies.",
        icon: "images/enemy-abilities/Lifesteal_icon.webp"
    },
    Maiming: {
        name: "Maiming",
        description: "Attacks cast slow on enemies.",
        icon: "images/enemy-abilities/Maiming_icon.webp"
    },
    Overstepping: {
        name: "Overstepping",
        description: "Avoids damage from floor Traps.",
        icon: "images/enemy-abilities/Overstepping_icon.webp"
    },
    Phasing: {
        name: "Phasing",
        description: "Gains 2s shield on hit. 20s cooldown.",
        icon: "images/enemy-abilities/Phasing_icon.webp"
    },
    Poison: {
        name: "Poison",
        description: "Deals damage over time.",
        icon: "images/enemy-abilities/Poison_icon.webp"
    },
    Protective: {
        name: "Protective",
        description: "Casts a shield on nearby allied minions.",
        icon: "images/enemy-abilities/Protective_icon.webp"
    },
    Ranged: {
        name: "Ranged",
        description: "Attacks at range.",
        icon: "images/enemy-abilities/Ranged_icon.webp"
    },
    Regenerating: {
        name: "Regenerating",
        description: "+2% health per second out of combat.",
        icon: "images/enemy-abilities/Regenerating_icon.webp"
    },
    Replication: {
        name: "Replication",
        description: "Divides into smaller units upon death.",
        icon: "images/enemy-abilities/Replication_icon.webp"
    },
    Resurrecting: {
        name: "Resurrecting",
        description: "Periodically resurrects nearby fallen Minions.",
        icon: "images/enemy-abilities/Resurrecting_icon.webp"
    },
    Shockwave: {
        name: "Shockwave",
        description: "Concussive waves disable nearby Traps and throw Heroes.",
        icon: "images/enemy-abilities/Shockwave_icon.webp"
    },
    Slow: {
        name: "Slow",
        description: "Moves more slowly than other Minions.",
        icon: "images/enemy-abilities/Slow_icon.webp"
    },
    Steady: {
        name: "Steady",
        description: "Resists damage at low health.",
        icon: "images/enemy-abilities/Steady_icon.webp"
    },
    Stunning: {
        name: "Stunning",
        description: "Attacks heavily slow enemies.",
        icon: "images/enemy-abilities/Stunning_icon.webp"
    },
    Swarming: {
        name: "Swarming",
        description: "Waves spawn in large numbers.",
        icon: "images/enemy-abilities/Swarming_icon.webp"
    },
    TrapResistant: {
        name: "Trap Resistant",
        description: "Resists most damage from Traps.",
        icon: "images/enemy-abilities/Trap_Resistant_icon.webp"
    },
    Unstoppable: {
        name: "Unstoppable",
        description: "Immune to stunning and slowing effects.",
        icon: "images/enemy-abilities/Unstoppable_icon.webp"
    },
    Vindictive: {
        name: "Vindictive",
        description: "Regains 25% health when a nearby ally dies.",
        icon: "images/enemy-abilities/Vindictive_icon.webp"
    },
    Slowing: {
        name: "Slowing",
        description: "Slows players close to him.",
        icon: ""
    },
    Swifty: {
        name: "Swifty",
        description: "Casts a speed buff on nearby allied minions.",
        icon: ""
    },
    MagicArmor: {
        name: "Magic Armor",
        description: "Protected against magic damage (+100 frost/fire/arcane/lightning armor).",
        icon: ""
    },
    PhysicalArmor: {
        name: "Physical Armor",
        description: "Protected against physical damage (+100 physical armor).",
        icon: ""
    },
    Dread: {
        name: "Dread",
        description: "Buffs nearby minions with extra maximum health.",
        icon: ""
    },
    Rich: {
        name: "Rich",
        description: "Leaves 5 coin bags with 1000 coins each when killed.",
        icon: ""
    },
    Sarge: {
        name: "Sarge",
        description: "Buffs nearby minions with increased damage.",
        icon: ""
    },
    Scurvy: {
        name: "Scurvy",
        description: "Deals increased damage to guardians.",
        icon: ""
    },
    Charge: {
        name: "Charge",
        description: "Charges into nearby enemy heroes knocking them back on hit and dealing damage to barricades.",
        icon: ""
    },
    Retreat: {
        name: "Retreat",
        description: "Retreats charging when no minions are left or reaches the rift.",
        icon: ""
    },
    ChaosCrystals: {
        name: "Chaos Crystals",
        description: "Creates crystals that disable traps in an area of 2x2.",
        icon: ""
    },
    ArcaneShield: {
        name: "Arcane Shield",
        description: "Creates a bubble shield around him that protects the inside from all damage coming from outside.",
        icon: ""
    },
    ArcaneRegeneration: {
        name: "Arcane Shield",
        description: "Applies a very powerful regeneration buff to nearby damaged minions.",
        icon: ""
    },
    OutOfGnollwhere: {
        name: "Out of Gnoll-where",
        description: "Throws a cage near enemy heroes that spawn 4 teacup gnolls.",
        icon: ""
    },
    Clones: {
        name: "Clones",
        description: "Creates immortal clones of different elements with same stats as the real one.",
        icon: ""
    },
    Cloak: {
        name: "Cloak",
        description: "Vanishes in the shadows healing up to half of his HP.",
        icon: ""
    },
});
export default Ability;