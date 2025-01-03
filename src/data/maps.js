import Faction from '../enums/faction';

const Map = Object.freeze({
    AcademySewers: {
        name: "Academy Sewers",
        minimap: "images/minimaps/Academy_Sewers_minimap.webp",
        images: [
            "images/map-previews/Academy_Sewers_(Rift_Lord)_preview.webp",
            "images/map-previews/Rolling_in_it_Weekly_Challenge_preview.webp"
        ],
        faction: Faction.Order,
        description: "Sneaking into the Order Academy is hard. Many believe the best way to do it is through the sewers. \"Best\" may be an overstatement. \"Smelliest\" may be more accurate. Prepare to clean out the Academy Sewers by using physics traps to \"unclog\" the hallways of minions. The lanes are separated and must be defended independently. In either case, bring some physics traps and don't let the Order flush you out!"
    },
    Avalanche: {
        name: "Avalanche",
        minimap: "images/minimaps/Avalanche_minimap.webp",
        images: [
            "images/map-previews/Avalanche_(Endless)_preview.webp",
            "images/map-previews/Avalanche_(Master)_preview.webp"
        ],
        faction: Faction.Northmun,
        description: "Tundra and his grizzly warriors have iced down Eventide Fortress to protect it from invaders. Unfortunately, the Unchained have adapted to Eventide Cove's new frigid climate."
    },
    BanquetHall: {
        name: "Banquet Hall",
        minimap: "images/minimaps/Banquet_Hall_minimap.webp",
        images: [
            "images/map-previews/Banquet_Hall_(Apprentice)_preview.webp",
            "images/map-previews/Banquet_Hall_(War_Mage)_preview.webp",
            "images/map-previews/Banquet_Hall_(Rift_Lord)_preview.webp"
        ],
        faction: Faction.Order,
        description: "The Order Academy Banquet Hall is a battleground with a simple layout reminiscent of OMD1 and 2 levels. When playing Banquet Hall, be sure to take a quick look at its walls--you may see some familiar Order luminaries there, and, perhaps, your hero. Don't want your hero to be the first course in the Banquet Hall? Then make enemies take the long way around, protect your barricades."
    },
    CastleGates: {
        name: "Castle Gates",
        minimap: "images/minimaps/Castle_Gates_minimap.webp",
        images: [
            "images/map-previews/Castle_Gates_(Master)_preview.webp",
            "images/map-previews/Castle_Gates_(Rift_Lord)_preview.webp",
            "images/map-previews/Castle_Gates_(Endless)_preview.webp"
        ],
        faction: Faction.WuXingDynasty,
        description: "Breaching the Castle Gates is a solid strategy for the Wu Xing Dynasty. Once inside, defending this open map will be a challenge. Funneling the front gates to one side is imperative."
    },
    CliffsideClash: {
        name: "Cliffside Clash",
        minimap: "images/minimaps/Cliffside_Clash_minimap.webp",
        images: [
            "images/map-previews/Cliffside_Clash_(Apprentice)_preview.webp",
            "images/map-previews/Cliffside_Clash_(Master)_preview.webp"
        ],
        faction: Faction.Order,
        description: "Used as a training ground for Order Academy apprentices, this abandoned fortress in contested territory is a great place to skirmish with enemies. Its many cliffs make for satisfying physics kills, but take heed--heroes can fall off cliffs just as well as minions."
    },
    Confluence: {
        name: "Confluence",
        minimap: "images/minimaps/Confluence_minimap.webp",
        images: [
            "images/map-previews/Confluence_(Rift_Lord)_preview.webp",
            "images/map-previews/The_Merc's_Litter_Weekly_Challenge_preview.webp"
        ],
        faction: Faction.Order,
        description: "A confluence of bad circumstances are happening in the Order Academy canals. Pirates are attacking the nearby village and a sewer-lurking fire lord is chasing kobolds into the Academy. Good luck slowing them down!"
    },
    CrogonKeep: {
        name: "Crogon Keep",
        minimap: "images/minimaps/Crogon_Keep_minimap.webp",
        images: [
            "images/map-previews/Crogon_Keep_(War_Mage)_preview.webp",
            "images/map-previews/Crogon_Keep_(Master)_preview.webp",
            "images/map-previews/Crogon_Keep_(Rift_Lord)_preview.webp"
        ],
        faction: Faction.Order,
        description: "Crogon Keep lies deep in the darkest corner of the Greenthorn Swamp, the mythical crogon's native territory. This winding fortress was once captured by Bloodspike, but the Order has wrested it from the grip of the Unchained who desperately want it back."
    },
    DocksAtEventide: {
        name: "Docks at Eventide",
        minimap: "images/minimaps/Docks_at_Eventide_minimap.webp",
        images: [
            "images/map-previews/Docks_at_Eventide_(Master)_preview.webp",
            "images/map-previews/We_Can_Rebuild_It_Weekly_Challenge_preview.webp",
        ],
        faction: Faction.Order,
        description: "Most of the goods that supply the Order come through Eventide Fortress's docks. Unfortunately, pirates want a piece of the Order's sweet, sweet booty. Protect Eventide and tell those pirates to keep their hands--and hooks--to themselves."
    },
    EventideFortress: {
        name: "Eventide Fortress",
        minimap: "images/minimaps/Eventide_Fortress_minimap.webp",
        images: [
            "images/map-previews/Eventide_Fortress_(Rift_Lord)_preview.webp",
            "images/map-previews/Eventide_Fortress_(Endless)_preview.webp",
        ],
        faction: Faction.Order,
        description: "Eventide Fortress protects the capital of the Territories Humaine from sea-borne invaders. Unfortunately, this fortress is often surrounded by orc pirates looking to pillage the Order Academy and the capital. Only a true hero can protect it on all fronts! "
    },
    EventideRamparts: {
        name: "Eventide Ramparts",
        minimap: "images/minimaps/Eventide_Ramparts_minimap.webp",
        images: [
            "images/map-previews/Eventide_Ramparts_(War_Mage)_preview.webp",
            "images/map-previews/Eventide_Ramparts_(Apprentice)_preview.webp",
        ],
        faction: Faction.Order,
        description: "The orcs have renewed their attack on Eventide Fortress, using ladders and bombs to overrun its southeastern ramparts. Use barricades wisely and remember that your enemies can attack you from multiple fronts."
    },
    Frostbite: {
        name: "Frostbite",
        minimap: "images/minimaps/Frostbite_minimap.webp",
        images: [
            "images/map-previews/Frostbite_(Master)_preview.webp",
            "images/map-previews/Frostbite_(Rift_Lord)_preview.webp",
        ],
        faction: Faction.Northmun,
        description: "Frostridge or \"Frostbite\" Fortress once protected the Territories Humaine from attacks from the north. Now, it is disputed territory and fought over by the Order, mercenaries, and the Northmun. Its many attack vectors make it hard to defend, as does its blizzard-scarred facade."
    },
    GatesOfThuricvod: {
        name: "Gates of Thuricvod",
        minimap: "images/minimaps/Gates_of_Thuricvod_minimap.webp",
        images: [
            "images/map-previews/Gates_of_Thuricvod_(Rift_Lord)_preview.webp",
            "images/map-previews/Gates_of_Thuricvod_(War_Mage)_preview.webp",
        ],
        faction: Faction.Order,
        description: "Feel the heat in the newly unearthed ruins of Thuricvod. Bring your physics traps to send your enemies for a refreshing dip in hot, boiling lava. It's a short trip from the gate to your rift, so be sure to think about your barricade strategy. Be prepared for a these corridors to be filled from very possible entry point. Funnel the enemy hordes wherever possible, and use your barricades wisely or your hero may not survive for long."
    },
    Highlands: {
        name: "Highlands",
        minimap: "images/minimaps/Highlands_minimap.webp",
        images: [
            "images/map-previews/Highlands_(Apprentice)_preview.webp",
            "images/map-previews/Highlands_(War_Mage)_preview.webp",
            "images/map-previews/Highlands_(Rift_Lord)_preview.webp",
        ],
        faction: Faction.Order,
        description: "Standing tall above the bustling town of Weston-under-Mountain, Castle Weston protects the town's inhabitants from invaders. The castle's three winding lanes provide many exciting killbox combinations and opportunities to generate combos."
    },
    MaximumSecurity: {
        name: "Maximum Security",
        minimap: "images/minimaps/Maximum_Security_minimap.webp",
        images: [
            "images/map-previews/Maximum_Security_(Rift_Lord)_preview.webp"
        ],
        faction: Faction.Order,
        description: "Your hero will never find a more wretched hive of scum and villainy than in the maximum security wing of the Order Academy Dungeon. This map is perfect for ceiling traps and crossfiring wall traps. Don't forget to bring guardians! For your hero's \"maximum security,\" change your barricade strategy after waves, keep your guardians alive, and try not to flip minions up on to the rift's platform."
    },
    MidnightMarket: {
        name: "Midnight Market",
        minimap: "images/minimaps/Midnight_Market_minimap.webp",
        images: [
            "images/map-previews/Midnight_Market_(War_Mage)_preview.webp",
            "images/map-previews/Midnight_Market_(Rift_Lord)_preview.webp",
        ],
        faction: Faction.WuXingDynasty,
        description: "These marketplaces of the White Tiger Empire are popular night spots. This seems to be exactly why the Wu Xing Dynasty has chosen to attack them so aggressively."
    },
    Orcatraz: {
        name: "Orcatraz",
        minimap: "images/minimaps/Orcatraz_minimap.webp",
        images: [
            "images/map-previews/Orcatraz_(Master)_preview.webp",
            "images/map-previews/Gotta_Go_Fast_Weekly_Challenge_preview.webp",
        ],
        faction: Faction.Unchained,
        description: "Orcatraz is an infamous Unchained prison filled with vile Order miscreants that can barely be contained. Help the Unchained quell the riots there and stop them from escaping."
    },
    OrcriLa: {
        name: "Orcri-La",
        minimap: "images/minimaps/Orcri-La_minimap.webp",
        images: [
            "images/map-previews/Orcri-La_(Master)_preview.webp",
        ],
        faction: Faction.Unchained,
        description: "The orcs worshipping at Orcri-La have an odd tradition: they use boulder chutes to sacrifice unbelievers. Use the boulders to keep Order interlopers out and bring your own priest to guard the temple's rift!"
    },
    RestrictedSection: {
        name: "Restricted Section",
        minimap: "images/minimaps/Restricted_Section_minimap.webp",
        images: [
            "images/map-previews/Restricted_Section_(War_Mage)_preview.webp",
            "images/map-previews/Restricted_Section_(Rift_Lord)_preview.webp",
            "images/map-previews/One_and_Done_Weekly_Challenge_preview.webp",
        ],
        faction: Faction.Order,
        description: "Not many are allowed into the Order Academy Library's Restricted Section, much less the army of the Unchained. Enforce quiet hours by guiding your enemies through this multilevel map and to their doom. To be successful in the Restricted Section, place barricades to make minions take a winding route through the battlegrounds' main stacks."
    },
    SharkIsland: {
        name: "Shark Island",
        minimap: "images/minimaps/Shark_Island_minimap.webp",
        images: [
            "images/map-previews/Shark_Island_(War_Mage)_preview.webp",
            "images/map-previews/Shark_Island_(Master)_preview.webp",
        ],
        faction: Faction.Order,
        description: "Perched precariously over shark infested waters, this keep is easier to defend the more enemies can be thrown into the water--but be careful. The sharks get as chummy with heroes as they do with minions."
    },
    StablesAtEventide: {
        name: "Stables at Eventide",
        minimap: "images/minimaps/Stables_at_Eventide_minimap.webp",
        images: [
            "images/map-previews/Stables_at_Eventide_(War_Mage)_preview.webp",
            "images/map-previews/Stables_at_Eventide_(Master)_preview.webp",
        ],
        faction: Faction.Order,
        description: "Because of Eventide Fortress's strategic significance as the capital's main port, the enemies of the Territories Humaine are trying any way they can to get in--even the fortress's stables."
    },
    StormDrain: {
        name: "Storm Drain",
        minimap: "images/minimaps/Storm_Drain_minimap.webp",
        images: [
            "images/map-previews/Storm_Drain_(Master)_preview.webp",
        ],
        faction: Faction.Order,
        description: "Storm the massive drainage system of the capital of the Territories Humaine. Beware of the Order as it tries to wash you out. Bring your physics traps and wall traps, but beware that your barricades may not help you much!"
    },
    TempleGraveyard: {
        name: "Temple Graveyard",
        minimap: "images/minimaps/Temple_Graveyard_minimap.webp",
        images: [
            "images/map-previews/Temple_Graveyard_(War_Mage)_preview.webp",
            "images/map-previews/Do_The_Trap_Shuffle_Weekly_Challenge_preview.webp",
        ],
        faction: Faction.Order,
        description: "The Unchained have defiled the Riftmaker's Temple cemetery on their visit, and its undead residents are not amused. Use your barricades to funnel the Unchained into their spooky grasp, and they'll make their visit permanent."
    },
    TheBaths: {
        name: "The Baths",
        minimap: "images/minimaps/The_Baths_minimap.webp",
        images: [
            "images/map-previews/The_Baths_(Apprentice)_preview.webp",
            "images/map-previews/The_Baths_(Rift_Lord)_preview.webp",
            "images/map-previews/The_Baths_(Endless)_preview.webp",
        ],
        faction: Faction.Order,
        description: "Someone has poisoned the water in the Order Academy Baths, and Cygnus is pretty sure the Unchained are to blame. Pay them back by obliterating their forces on this simple, one-lane, one-door battleground. Don't forget to bring your floor traps, physics traps, and barricades! Don't let your hero get under water in the Baths! But don't forget to defend yourself by setting up guardians."
    },
    TheFallingFolly: {
        name: "The Falling Folly",
        minimap: "images/minimaps/The_Falling_Folly_minimap.webp",
        images: [
            "images/map-previews/The_Falling_Folly_(Master)_preview.webp",
            "images/map-previews/Inferiority_Complex_Weekly_Challenge_preview.webp",
        ],
        faction: Faction.Order,
        description: "High in the clouds, this tower is crumbling under the onslaught of attacks against it. A simple map with two doors, two guardian spots, and steep stairways, make sure to bring physics traps to make your enemies take the quick way down. On this battleground, be sure to balance heroes' time between both lanes and to keep a guardian up at all times. It would also be folly not to bring physics traps and pay too much attention to Mr. Moneybags."
    },
    TheWall: {
        name: "The Wall",
        minimap: "images/minimaps/The_Wall_minimap.webp",
        images: [
            "images/map-previews/The_Wall_(War_Mage)_preview.webp",
            "images/map-previews/The_Wall_(Master)_preview.webp",
        ],
        faction: Faction.Order,
        description: "Be prepared for a frontal assault. The Wall, the only fortress keeping the Unchained from landing on the shores of the Territories Humaine, is under constant attack by siege towers and large numbers of enemy minions."
    },
    ThroneRoom: {
        name: "Throne Room",
        minimap: "images/minimaps/Throne_Room_minimap.webp",
        images: [
            "images/map-previews/Throne_Room_(Apprentice)_preview.webp",
            "images/map-previews/Throne_Room_(War_Mage)_preview.webp",
            "images/map-previews/Throne_Room_(Rift_Lord)_preview.webp.webp",
        ],
        faction: Faction.Unchained,
        description: "As the main room of Bionka's Dark World Palace, the throne room features a beautiful statue of the Queen Momma, vats of acid, perilous bridges, and some nasty surprises left by Bionka for the Order. The Queen Momma's not home, so don't be afraid to play with her \"toys,\" the swinging maces. Using them can mean the difference between surviving and losing a wave. Also, keep a close eye on your barricades."
    },
    ThuricvodVillage: {
        name: "Thuricvod Village",
        minimap: "images/minimaps/Thuricvod_Village_minimap.webp",
        images: [
            "images/map-previews/Thuricvod_Village_(War_Mage)_preview.webp",
            "images/map-previews/Fun_with_Physics_Weekly_Challenge_preview.webp",
        ],
        faction: Faction.Order,
        description: "The Order has just finished excavating the gates of ancient dwarven city of Thuricvod, hoping to learn its secrets. Unfortunately, they're not the only ones. Use physics traps and barricades to play a friendly game of \"the floor is lava\" with the Unchained. To protect the village, both lanes must be protected, meaning one hero will have to hold one lane alone for a few waves. The environmental traps on this map are very effective, so don't forget to use them!"
    },
    TrainingGrounds: {
        name: "Training Grounds",
        minimap: "images/minimaps/Training_Grounds_minimap.webp",
        images: [
            "images/map-previews/Training_Grounds_(Apprentice)_preview.webp",
            "images/map-previews/Training_Grounds_(War_Mage)_preview.webp",
            "images/map-previews/Training_Grounds_(Master)_preview.webp",
        ],
        faction: Faction.Unchained,
        description: "Bionka trains only the most formidable of her warriors in the grueling conditions of her Training Grounds. Protect the Training grounds by fighting both the Order and the elements. Has your hero trained for Training Grounds? Plan ahead for the inevitable opening of the door behind the rift. Funnel multiple lanes into one area to deal with enemy hordes and make sure your barricades are not too close to the front lines."
    },
    UnchainedFortress: {
        name: "Unchained Fortress",
        minimap: "images/minimaps/Unchained_Fortress_minimap.webp",
        images: [
            "images/map-previews/Unchained_Fortress_(Master)_preview.webp",
            "images/map-previews/Unchained_Fortress_(Apprentice)_preview.webp",
        ],
        faction: Faction.Unchained,
        description: "As the new headquarters for the Unchained on Centre, the Unchained Fortress is a strategic foothold for the Unchained. To be successful, the Unchained's allies must protect it from wave after wave of Order units."
    },
    WaterGarden: {
        name: "Water Garden",
        minimap: "images/minimaps/Water_Garden_minimap.webp",
        images: [
            "images/map-previews/Water_Garden_(Apprentice)_preview.webp",
            "images/map-previews/Water_Garden_(Master)_preview.webp",
        ],
        faction: Faction.WuXingDynasty,
        description: "The water gardens of the White Tiger Empire appear to be closest to the first attacks by the Wu Xing Dynasty. Defend three breaches to the best of your ability without too much help from wall traps."
    },
});

export default Map;