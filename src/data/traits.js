import TraitSlot from '../enums/traitSlot';
const Traits = Object.freeze([
	{
		id: 1,
		name: "Easily Excited",
		trait: "Combos fill the Unchained meter by 20% more.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+1 coin per second.",
		image: "images/traits/Easily_Excited_image.webp"
	},
	{
		id: 2,
		name: "Making It Rain",
		trait: "+30% to bonus coin granted by combos.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+1 coin per second.",
		image: "images/traits/Making_it_Rain_image.webp"
	},
	{
		id: 3,
		name: "Natural Born Sprinter",
		trait: "+50% movement speed while Unchained.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "Regenerates 1% max health per second.",
		image: "images/traits/Natural_Born_Sprinter_image.webp"
	},
	{
		id: 4,
		name: "Kidnapped a Leprechaun",
		trait: "+500 starting coin.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+1 coin per second.",
		image: "images/traits/Kidnapped_a_Leprechaun_image.webp"
	},
	{
		id: 5,
		name: "Over Reacting",
		trait: "Regenerates +1 mana regeneration per second when below 50% health.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+2.5% movement speed.",
		image: "images/traits/Over-Reacting_image.webp"
	},
	{
		id: 6,
		name: "Avoids Pain",
		trait: "Regenerates 0.5% max health per second when below 50% health.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+1 coin per second.",
		image: "images/traits/Avoids_Pain_image.webp"
	},
	{
		id: 7,
		name: "Fire Sale",
		trait: "-15% fire trap cost.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+1 coin per second.",
		image: "images/traits/Fire_Sale_image.webp"
	},
	{
		id: 8,
		name: "Ice Cold Deals",
		trait: "-15% ice trap cost.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+2.5% movement speed.",
		image: "images/traits/Ice_Cold_Deals_image.webp"
	},
	{
		id: 9,
		name: "Insane Arcane Sale",
		trait: "-15% arcane trap cost.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+12.0% mana regeneration.",
		image: "images/traits/Insane_Arcane_Sale_image.webp"
	},
	{
		id: 10,
		name: "Lightning Deals",
		trait: "-15% lightning trap cost.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "Regenerates 1% max health per second.",
		image: "images/traits/Lightning_Deals_image.webp"
	},
	{
		id: 11,
		name: "Big Spender",
		trait: "+250 coin at the beginning of each wave.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+1 coin per second.",
		image: "images/traits/Big_Spender_image.webp"
	},
	{
		id: 12,
		name: "Never Pays Retail",
		trait: "-25% hero respawn buyback cost.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+1 coin per second.",
		image: "images/traits/Never_Pays_Retail_image.webp"
	},
	{
		id: 13,
		name: "One With The Traps",
		trait: "+1 per second mana regeneration near allied traps.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+1 coin per second.",
		image: "images/traits/One_with_the_Traps_image.webp"
	},
	{
		id: 14,
		name: "Overachiever",
		trait: "+1 battle level at the start of the matches.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+2.5% movement speed.",
		image: "images/traits/Overachiever_image.webp"
	},
	{
		id: 15,
		name: "Overprotective",
		trait: "-25% damage taken by traps near the hero.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "Regenerates 1% max health per second.",
		image: "images/traits/Overprotective_image.webp"
	},
	{
		id: 16,
		name: "Rift Gift",
		trait: "+100% mana and health after destroying an unstable rift.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+12.0% mana regeneration.",
		image: "images/traits/Rift_Gift_image.webp"
	},
	{
		id: 17,
		name: "Rift Rocket",
		trait: "+50% movement speed for 5s after destroying an unstable rift.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+2.5% movement speed.",
		image: "images/traits/Rift_Rocket_image.webp"
	},
	{
		id: 18,
		name: "Smashing Deals",
		trait: "-15% trap cost to traps that deal physical damage.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+1 coin per second.",
		image: "images/traits/Smashing_Deals_image.webp"
	},
	{
		id: 19,
		name: "Has A Trap Fetish",
		trait: "Regenerates +0.6% max health per second near allied traps.",
		slot: TraitSlot.Triangle,
		matchingSlotTrait: "+12.0% mana regeneration.",
		image: "images/traits/Has_a_Trap_Fetish_image.webp"
	},
	{
		id: 20,
		name: "Believes Size Matters",
		trait: "+15% primary attack damage to large minions when unchained (+25% if team is unchained).",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+5.0% primary attack damage.",
		image: "images/traits/Believes_Size_Matters_image.webp"
	},
	{
		id: 21,
		name: "Uncle Killed By Giant",
		trait: "+12% damage to giants.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+10.0% cooldown speed.",
		image: "images/traits/Uncle_Killed_by_Giant_image.webp"
	},
	{
		id: 22,
		name: "Cat Eaten By Gnolls",
		trait: "+12% damage to gnoll hunter minions.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+5.0% primary attack damage.",
		image: "images/traits/Cat_Eaten_by_Gnolls_image.webp"
	},
	{
		id: 23,
		name: "Brother Mauled By Grizzlies",
		trait: "+12% damage to grizzly minions.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+10.0% cooldown speed.",
		image: "images/traits/Brother_Mauled_by_Grizzlies_image.webp"
	},
	{
		id: 24,
		name: "Sister Eaten By An Ogre",
		trait: "+12% damage to ogre minions.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+5.0% primary attack damage.",
		image: "images/traits/Sister_Eaten_by_an_Ogre_image.webp"
	},
	{
		id: 25,
		name: "Dog Killed By Pride Hunters",
		trait: "+12% damage to pride hunter minions.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+5.0% primary attack damage.",
		image: "images/traits/Dog_Killed_by_Pride_Hunters_image.webp"
	},
	{
		id: 26,
		name: "Grandmother Eaten By A Troll",
		trait: "+12% damage to troll minions.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+5.0% primary attack damage.",
		image: "images/traits/Grandmother_Eaten_by_a_Troll_image.webp"
	},
	{
		id: 27,
		name: "Difficulty Calming Down",
		trait: "+15% Unchained duration.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+10.0% cooldown speed.",
		image: "images/traits/Difficulty_Calming_Down_image.webp"
	},
	{
		id: 28,
		name: "Amateur Veterinarian",
		trait: "+25% healing abilities cast on the hero.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+8.0% max mana.",
		image: "images/traits/Amateur_Veterinarian_image.webp"
	},
	{
		id: 29,
		name: "Soldiers Took My Horse",
		trait: "+12% damage to soldiers.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+5.0% primary attack damage.",
		image: "images/traits/Soldiers_Took_My_Horse_image.webp"
	},
	{
		id: 30,
		name: "Has Ultimate Set Of Tools",
		trait: "+6% trap damage.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+5.0% primary attack damage.",
		image: "images/traits/Has_Ultimate_Set_of_Tools_image.webp"
	},
	{
		id: 31,
		name: "Bear Hugs",
		trait: "+8% damage to minions near the hero",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+10.0% cooldown speed.",
		image: "images/traits/Bear_Hugs_image.webp"
	},
	{
		id: 32,
		name: "Has A Big Brother",
		trait: "+10% damage dealt to minions near allied guardians.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+8.0% max mana.",
		image: "images/traits/Has_a_Big_Brother_image.webp"
	},
	{
		id: 33,
		name: "Killer Buzz",
		trait: "+8% damage after kills. Lasts 3s.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+5.0% primary attack damage.",
		image: "images/traits/Killer_Buzz_image.webp"
	},
	{
		id: 34,
		name: "Paging Dr Love",
		trait: "+25% to hero's healing abilities.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+8.0% max mana.",
		image: "images/traits/Paging_Dr_Love_image.webp"
	},
	{
		id: 35,
		name: "Rift Away",
		trait: "+25% damage to unstable rifts.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+5.0% primary attack damage.",
		image: "images/traits/Rift_Away_image.webp"
	},
	{
		id: 36,
		name: "Feeling Fierce",
		trait: "+10% damage when health is above 50%.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+10.0% cooldown speed.",
		image: "images/traits/Feeling_Fierce_image.webp"
	},
	{
		id: 37,
		name: "Tries Too Hard",
		trait: "+10% damage dealt to mercenaries near allied guardians.",
		slot: TraitSlot.Pentagon,
		matchingSlotTrait: "+8.0% max mana.",
		image: "images/traits/Tries_Too_Hard_image.webp"
	},
	{
		id: 38,
		name: "Enjoys Pain",
		trait: "Adds +4% lifesteal to physical primary attacks.",
		slot: TraitSlot.Diamond,
		matchingSlotTrait: "+8 armor.",
		image: "images/traits/Enjoys_Pain_image.webp"
	},
	{
		id: 39,
		name: "Execution Advantage",
		trait: "Grants a shield worth 30% of the hero's max health for 5s upon killing a boss, mercenary, or hunter.",
		slot: TraitSlot.Diamond,
		matchingSlotTrait: "-10% control effect duration.",
		image: "images/traits/Execution_Advantage_image.webp"
	},
	{
		id: 40,
		name: "Feels Safe At Home",
		trait: "+6 physical and magical armor when near allied guardians.",
		slot: TraitSlot.Diamond,
		matchingSlotTrait: "+4.0% max health.",
		image: "images/traits/Feels_Safe_at_Home_image.webp"
	},
	{
		id: 41,
		name: "Practices Witchcraft",
		trait: "+5% lifesteal to primary attack when dealing magical damage.",
		slot: TraitSlot.Diamond,
		matchingSlotTrait: "+8 magic armor.",
		image: "images/traits/Practices_Witchcraft_image.webp"
	},
	{
		id: 42,
		name: "High Pain Tolerance",
		trait: "+12% damage reduction against minions.",
		slot: TraitSlot.Diamond,
		matchingSlotTrait: "+8 armor.",
		image: "images/traits/High_Pain_Tolerance_image.webp"
	},
	{
		id: 43,
		name: "Walks It Off",
		trait: "-12% respawn time.",
		slot: TraitSlot.Diamond,
		matchingSlotTrait: "-10% control effect duration.",
		image: "images/traits/Walks_It_Off_image.webp"
	},
	{
		id: 44,
		name: "Takes Lessons From Cygnus",
		trait: "+1% max health for every 50 mana the hero has.",
		slot: TraitSlot.Diamond,
		matchingSlotTrait: "-10% control effect duration.",
		image: "images/traits/Takes_Lessons_from_Cygnus_image.webp"
	},
	{
		id: 45,
		name: "Wall Building Phd",
		trait: "Increases barricades' health by 20% and regenerates 0.5% of their max health each second.",
		slot: TraitSlot.Diamond,
		matchingSlotTrait: "+4.0% max health.",
		image: "images/traits/Wall_Building_PhD_image.webp"
	},
	{
		id: 46,
		name: "Attention Deficit",
		trait: "-40% to the duration of crowd control, slow, and stun debuffs.",
		slot: TraitSlot.Diamond,
		matchingSlotTrait: "+8 magic armor.",
		image: "images/traits/Attention_Deficit_image.webp"
	},
	{
		id: 47,
		name: "Extra Padding",
		trait: "+12% damage protection after dealing damage to an enemy. Lasts 3s.",
		slot: TraitSlot.Diamond,
		matchingSlotTrait: "+8 armor.",
		image: "images/traits/Extra_Padding_image.webp"
	},
	{
		id: 48,
		name: "Respect My Authority",
		trait: "+15% to the duration of crowd control abilities cast by the hero.",
		slot: TraitSlot.Diamond,
		matchingSlotTrait: "+4.0% max health.",
		image: "images/traits/Respect_My_Authority_image.webp"
	}
]);
export default Traits;