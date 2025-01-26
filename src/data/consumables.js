import ConsumableType from '../enums/consumableType';

const consumables = Object.freeze([
    {
        id: 1,
        name: "Discount Scroll",
        type: ConsumableType.Scroll,
        image: "images/consumables/Discount_Scroll_image.webp",
        effect: {
            primary: "-50% to all Trap costs for 10s.",
            secondary: null
        },
        usageLimit: 1,
        flavourText: "Just in time for Riftmas! Get your favorite hero something shiny... and pointy!"
    },
    {
        id: 2,
        name: "Caffeination Potion",
        type: ConsumableType.Potion,
        image: "images/consumables/Caffeination_Potion_image.webp",
        effect: {
            primary: "Instantly makes all abilities available for use.",
            secondary: "-10% cooldown duration."
        },
        usageLimit: 3,
        flavourText: "For when your get up and go has gotten up and went."
    },
    {
        id: 3,
        name: "Empty Rift Scroll",
        type: ConsumableType.Scroll,
        image: "images/consumables/Empty_Rift_Scroll_image.webp",
        effect: {
            primary: "Enemies entering the Rift are worth 0 points for 10s.",
            secondary: null
        },
        usageLimit: 1,
        flavourText: "\"Guys, guys, it's okay. I got this.\" - Maximilian, the War Mage"
    },
    {
        id: 4,
        name: "Guardian Potion",
        type: ConsumableType.Potion,
        image: "images/consumables/Guardian_Potion_image.webp",
        effect: {
            primary: "Grants two extra Guardians from the Hero's loadout.",
            secondary: "+0.6% max health and +1.5 mana per second."
        },
        usageLimit: 1,
        flavourText: "INSTRUCTIONS: Drink. Yes, YOU drink it. Don't try to force-feed it to a guardian. It won't like it."
    },
    {
        id: 5,
        name: "Health Potion",
        type: ConsumableType.Potion,
        image: "images/consumables/Health_Potion_image.webp",
        effect: {
            primary: "Restores full health.",
            secondary: "+1% health per second."
        },
        usageLimit: 10,
        flavourText: "A bottle of good, clean living."
    },
    {
        id: 6,
        name: "Invulnerability Scroll",
        type: ConsumableType.Scroll,
        image: "images/consumables/Invulnerability_Scroll_image.webp",
        effect: {
            primary: "Team takes no damage for 30s.",
            secondary: null
        },
        usageLimit: 1,
        flavourText: "\"All right now, team! Teamwork makes the dead orcs! Let's do it!\" - Maximilian, the War Mage"
    },
    {
        id: 7,
        name: "Luck Potion",
        type: ConsumableType.Potion,
        image: "images/consumables/Luck_Potion_image.webp",
        effect: {
            primary: "+100% coin income for 30s.",
            secondary: "+10% coin from combos."
        },
        usageLimit: 5,
        flavourText: "\"If you see a coin, then pick it up / If you don't, drink potion of luck!\" - Old childhood rhyme."
    },
    {
        id: 8,
        name: "Mana Potion",
        type: ConsumableType.Potion,
        image: "images/consumables/Mana_Potion_image.webp",
        effect: {
            primary: "Restores full mana.",
            secondary: "+2.5% max mana per second."
        },
        usageLimit: 5,
        flavourText: "Not legal in all territories."
    },
    {
        id: 9,
        name: "Rage Potion",
        type: ConsumableType.Potion,
        image: "images/consumables/Rage_Potion_image.webp",
        effect: {
            primary: "+50% damage for 30s.",
            secondary: "+15% primary attack damage."
        },
        usageLimit: 5,
        flavourText: "Ready to get your rage on?"
    },
    {
        id: 10,
        name: "Repair Scroll",
        type: ConsumableType.Scroll,
        image: "images/consumables/Repair_Scroll_image.webp",
        effect: {
            primary: "Repairs damage to all non-destroyed barricades and makes them immune to damage for 30s.",
            secondary: null
        },
        usageLimit: 1,
        flavourText: "We can rebuild them; we have the technology."
    },
    {
        id: 11,
        name: "Resurrection Scroll",
        type: ConsumableType.Scroll,
        image: "images/consumables/Resurrection_Scroll_image.webp",
        effect: {
            primary: "Instantly resurrects all dead allied Heroes. Heroes who are alive when the scroll is used will respawn after 3s on their next death.",
            secondary: null
        },
        usageLimit: 1,
        flavourText: "It isn't a towel, but better take one just to be safe."
    },
    {
        id: 12,
        name: "Slow Scroll",
        type: ConsumableType.Scroll,
        image: "images/consumables/Slow_Scroll_image.webp",
        effect: {
            primary: "Slows nearby Minions by 50% for 30s.",
            secondary: null
        },
        usageLimit: 1,
        flavourText: "For when you want to slow down and enjoy the carnage."
    },
    {
        id: 13,
        name: "Speed Potion",
        type: ConsumableType.Potion,
        image: "images/consumables/Speed_Potion_image.webp",
        effect: {
            primary: "+25% movement speed for 60s.",
            secondary: "+20% movement speed."
        },
        usageLimit: 5,
        flavourText: "WARNING: Use as directed. Increases movement speed ONLY. Will not increase reading, studying, or thinking speed. Sorry, students. If you experience shortness of breath, dizziness, or chest pains, it's because you're running really fast. Take a break."
    },
    {
        id: 14,
        name: "Unchained Scroll",
        type: ConsumableType.Scroll,
        image: "images/consumables/Unchained_Scroll_image.webp",
        effect: {
            primary: "Fills and activates the team's Unchained meters.",
            secondary: null
        },
        usageLimit: 1,
        flavourText: "This Unchained meter goes to ELEVEN!"
    },
    {
        id: 15,
        name: "Experience Potion",
        type: ConsumableType.Potion,
        image: "images/consumables/Experience_Potion_image.webp",
        effect: {
            primary: "+2 Battle Levels.",
            secondary: "+10% XP."
        },
        usageLimit: 1,
        flavourText: "For those too cool for school."
    }
]);
export default consumables;
