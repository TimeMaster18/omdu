import GuardianHome from '../enums/guardianHome';
const guardians = Object.freeze([
    {
        id: 1,
        name: "Bartender Guardian",
        home: GuardianHome.Kitchen,
        aura: {
            name: "Liquid Courage",
            description: "(In Combat) Reduces all cooldown durations by 20%. Buff granted to all heroes in Barmaid's aura."
        },
        description: "Bartender guardian is at home in the kitchen where she puts up with no nonsense from unruly customers. Pay your tab!",
        image: "images/guardians/Bartender_Guardian_image.webp"
    },
    {
        id: 2,
        name: "Blacksmith Guardian",
        home: GuardianHome.Forge,
        aura: {
            name: "Forged Armor",
            description: "(In Combat) Reduces damage taken by heroes 50%. Increases heroes' aggro max. Lasts only while in Blacksmith's aura."
        },
        description: "At home in the forge, the Blacksmith guardian forges for the Royal Arctos Armory and will gladly armor allies who will help protect his home.",
        image: "images/guardians/Blacksmith_Guardian_image.webp"
    },
    {
        id: 3,
        name: "Cook Guardian",
        home: GuardianHome.Kitchen,
        aura: {
            name: "Serving Up Grub",
            description: "Quickly regenerates heroes' health and grants them the Full Stomach buff which increases their health for 45s when outside the aura. Heroes regain the buff upon re-entering the aura."
        },
        description: "The ogre Cook guardian serves up some mean grub (and it may actually be grubs) in his home, the kitchen, giving free meals to his allies.",
        image: "images/guardians/Cook_Guardian_image.webp"
    },
    {
        id: 4,
        name: "Deckhand Guardian",
        home: GuardianHome.Docks,
        aura: {
            name: "Swashbuckling",
            description: "(In Combat) Kills increase Unchained meter by +3."
        },
        description: "As a pirate, the Deckhand guardian is at home on the docks. For some coin, he'll swab the deck with his allies' enemies and protect their rifts.",
        image: "images/guardians/Deckhand_Guardian_image.webp"
    },
    {
        id: 5,
        name: "Dragon Guardian",
        home: GuardianHome.Default,
        aura: {
            name: "Guardian's Blessing",
            description: "(Permanent) +50 armor and magic armor due to a nearby allied guardian. (Out of Combat) Regenerating health due to an allied guardian's aura."
        },
        description: "Kin to the Sun, Moon, and Lion guardians, the Dragon guardian is at home in default locations and bravely defends his allies' rifts from invaders.",
        image: "images/guardians/Dragon_Guardian_image.webp"
    },
    {
        id: 6,
        name: "Friar Guardian",
        home: GuardianHome.Temple,
        aura: {
            name: "Wiftmaker's Bwessing",
            description: "(In Combat) Primary attacks dealing arcane damage."
        },
        description: "As a devotee of the Riftmaker, the Friar's home is the temple. There, he blesses his followers and fights for the will of the Creator of Rifts.",
        image: "images/guardians/Friar_Guardian_image.webp"
    },
    {
        id: 7,
        name: "Headhunter Guardian",
        home: GuardianHome.Barracks,
        aura: {
            name: "Junior Headhunter",
            description: "(In Combat) Reflecting 30% of incoming damage."
        },
        description: "As a troll headhunter trying to make it in the modern day world, the Headhunter guardian makes his home in the barracks where he recruits only the finest warriors to protect his rifts.",
        image: "images/guardians/Headhunter_Guardian_image.webp"
    },
    {
        id: 8,
        name: "Jade Empire Guardian",
        home: GuardianHome.Jail,
        aura: {
            name: "Blessing of Wealth",
            description: "Generating 3 coin per second."
        },
        description: "As the jailer of the Imperial Prison, the Jade Empire Guardian stands against those who would do the rifts harm. At home in the jail, he keeps allies' rifts secure.",
        image: "images/guardians/Jade_Empire_Guardian_image.webp"
    },
    {
        id: 9,
        name: "Jailer Guardian",
        home: GuardianHome.Jail,
        aura: {
            name: "Soul Shackle",
            description: "(In Combat) Lifestealing with primary attacks."
        },
        description: "At home in the jail, the Jailer keeps his prisoners locked up. Judge, jury, and executioner, the Jailer will \"deal with\" his allies' enemies.",
        image: "images/guardians/Jailer_Guardian_image.webp"
    },
    {
        id: 10,
        name: "Lion Guardian",
        home: GuardianHome.Default,
        aura: {
            name: "Guardian's Blessing",
            description: "(Permanent) +50 armor and magic armor due to a nearby allied guardian. (Out of Combat) Regenerating health due to an allied guardian's aura."
        },
        description: "Kin to the Sun, Moon, and Dragon guardians, the Lion guardian is at home in default locations and bravely defends his allies' rifts from invaders.",
        image: "images/guardians/Lion_Guardian_image.webp"
    },
    {
        id: 11,
        name: "Moon Guardian",
        home: GuardianHome.Default,
        aura: {
            name: "Guardian's Blessing",
            description: "(Permanent) +50 armor and magic armor due to a nearby allied guardian. (Out of Combat) Regenerating health due to an allied guardian's aura."
        },
        description: "Kin to the Sun, Dragon, and Lion guardians, the Moon guardian is at home in default locations and bravely defends his allies' rifts from invaders.",
        image: "images/guardians/Moon_Guardian_image.webp"
    },
    {
        id: 12,
        name: "Priest Guardian",
        home: GuardianHome.Temple,
        aura: {
            name: "Stirring Benediction",
            description: "(Permanent) Mana regeneration increased."
        },
        description: "The Priest guardian is a devote follower of Nature and its powers. At home in the temple, he uses the powers of nature to protect his congregation.",
        image: "images/guardians/Priest_Guardian_image.webp"
    },
    {
        id: 13,
        name: "Quartermaster Guardian",
        home: GuardianHome.Barracks,
        aura: {
            name: "Morale Boost",
            description: "Damage increased by 25%."
        },
        description: "To keep his soldiers safe in his home, the barracks, the Quartermaster demoralizes his enemies and boosts the morale of his allies.",
        image: "images/guardians/Quartermaster_Guardian_image.webp"
    },
    {
        id: 14,
        name: "Ranch Hand Guardian",
        home: GuardianHome.Stables,
        aura: {
            name: "Slowpoke",
            description: "(In Combat) Primary attacks slow enemies."
        },
        description: "The Ranch Hand Guardian defends his allies' rift with a crazed intensity. Rustlers should steer clear of this \"cow boy\" and his stable.",
        image: "images/guardians/Ranch_Hand_Guardian_image.webp"
    },
    {
        id: 15,
        name: "Rumrudder Guardian",
        home: GuardianHome.Docks,
        aura: {
            name: "Plunder",
            description: "(Permanent) Kills yield health, mana, or Unchained pickups."
        },
        description: "A part-time boss and guardian, but full-time pirate, Rumrudder is at home on the docks, defending his allies and rewarding them with booty.",
        image: "images/guardians/Rumrudder_Guardian_image.webp"
    },
    {
        id: 16,
        name: "Serpent Guardian",
        home: GuardianHome.Default,
        aura: {
            name: "Guardian's Blessing",
            description: "(Permanent) +50 Physical Armor and Magic Armor due to a nearby allied guardian. (Out of Combat) Regenerating health due to an allied guardian's aura."
        },
        description: "Constructed from the armor of fallen guardians, the corrupted Serpent guardian is at home in default locations and bravely defends his allies' rifts from invaders.",
        image: "images/guardians/Serpent_Guardian_image.webp"
    },
    {
        id: 17,
        name: "Stablehand Guardian",
        home: GuardianHome.Stables,
        aura: {
            name: "Hoedown",
            description: "(Permanent) Movement speed increased."
        },
        description: "At home at the stables, the Stablehand knows that a chicken in the hand is worth a few deaths on the battlefield for his allies.",
        image: "images/guardians/Stablehand_Guardian_image.webp"
    },
    {
        id: 18,
        name: "Sun Guardian",
        home: GuardianHome.Default,
        aura: {
            name: "Guardian's Blessing",
            description: "(Permanent) +50 armor and magic armor due to a nearby allied guardian. (Out of Combat) Regenerating health due to an allied guardian's aura."
        },
        description: "Kin to the Moon, Dragon, and Lion guardians, the Sun guardian is at home in default locations and bravely defends his allies' rifts from invaders.",
        image: "images/guardians/Sun_Guardian_image.webp"
    },
    {
        id: 19,
        name: "Weaponwright Guardian",
        home: GuardianHome.Forge,
        aura: {
            name: "Forged Weapons",
            description: "(In Combat) Primary attacks dealing fire damage over time."
        },
        description: "A follower of Oasis, the Weaponwright hones weapons for his cyclops brethren and helps those who will defend his forge from unbelievers.",
        image: "images/guardians/Weaponwright_Guardian_image.webp"
    }
]);
export default guardians;
