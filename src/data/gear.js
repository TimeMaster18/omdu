const gear = Object.freeze([
    {
        id: 201,
        name: "Arcane Bubble Blower",
        description: "Creates a bomb that explodes after a time, dealing Arcane damage in that area. It's targets are susceptible to Arcane damage.",
        image: "images/gear/Arcane_Bubble_Blower_image.webp",
        cost: 50,
        cooldown: 8
    },
    {
        id: 202,
        name: "Fire Wall Bracers",
        description: "Creates a wall of Fire igniting enemies who walk through it. Fire damage from the same Hero or Trap-type does not stack.",
        image: "images/gear/Fire_Wall_Bracers_image.webp",
        cost: 40,
        cooldown: 10
    },
    {
        id: 203,
        name: "Freedom Trinket",
        description: "Negates control effects for a short time after use.",
        image: "images/gear/Freedom_Trinket_image.webp",
        cooldown: 30
    },
    {
        id: 204,
        name: "Gnomish Repair Kit",
        description: "Activates a targeted Trap even if it is on cooldown.",
        image: "images/gear/Gnomish_Repair_Kit_image.webp",
        cost: 8,
        cooldown: 1.5
    },
    {
        id: 207,
        name: "Ice Amulet",
        description: "Fires three projectiles at once. Frost damage applies chilled to enemies, which can cause them to become frozen.",
        image: "images/gear/Ice_Amulet_image.webp",
        cost: 20,
        cooldown: 0.65
    },
    {
        id: 209,
        name: "Mage's Clover",
        description: "Grants a short period of increased mana regeneration. Effect is canceled upon taking damage.",
        image: "images/gear/Mage's_Clover_image.webp",
        cooldown: 60
    },
    {
        id: 210,
        name: "Mage's Picnic",
        description: "Creates a totem that increases mana regeneration for nearby allied players.",
        image: "images/gear/Mage's_Picnic_image.webp",
        cooldown: 60
    },
    {
        id: 211,
        name: "Mending Root",
        description: "Grants a short duration of increased health regeneration. Being attacked cancels the regeneration.",
        image: "images/gear/Mending_Root_image.webp",
        cooldown: 60
    },
    {
        id: 212,
        name: "Ring Of Last Stand",
        description: "Grants the Hero damage immunity for a short duration.",
        image: "images/gear/Ring_of_Last_Stand_image.webp",
        cooldown: 30
    },
    {
        id: 213,
        name: "Ring Of Storms",
        description: "Creates a storm that deals Lightning damage to enemies in range. Enemies killed by Lightning explode, dealing damage in an area around them.",
        image: "images/gear/Ring_of_Storms_image.webp",
        cost: 50,
        cooldown: 12
    },
    {
        id: 214,
        name: "Teleportation Ring",
        description: "Teleports the Hero back to its allied rift. Ring takes 1s to cast. Taking damage interrupts cast.",
        image: "images/gear/Teleportation_Ring_image.webp",
        cooldown: 30
    },
    {
        id: 215,
        name: "Flame Bracers",
        description: "Launches a Fireball that deals significant damage over time to the first target hit. Fire damage from the same hero or trap-type does not stack.",
        image: "images/gear/Flame_Bracers_image.webp",
        cost: 20
    }
]);
export default gear;
