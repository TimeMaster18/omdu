import TrapPartSlot from '../enums/trapPartSlot';
const trapParts = Object.freeze([
	{
		id: 1,
		name: "Double Tank Accumulator",
		description: "Increases the Trap's knock-back by 25%.",
		partSlot: TrapPartSlot.Accumulator,
		flavourText: "This part really knocks them out of the park.",
		image: "images/trap-parts/Double_Tank_Accumulator_image.webp"
	},
	{
		id: 2,
		name: "Stunning Accumulator",
		description: "Causes knocked-back Enemies (Large enemies aren't affected) to take 100% more damage for 5s.",
		partSlot: TrapPartSlot.Accumulator,
		flavourText: "Stunningly, minions hate this part.",
		image: "images/trap-parts/Stunning_Accumulator_image.webp"
	},
	{
		id: 3,
		name: "Capacitance Attuner",
		description: "Amplifies the buffs cast by this Trap by 100% when first placed. Amplification weakens to 0% over 90s.",
		partSlot: TrapPartSlot.Attuner,
		flavourText: "Now with easy, plug-and-play installation.",
		image: "images/trap-parts/Capacitance_Attuner_image.webp"
	},
	{
		id: 4,
		name: "Deep Cell Attuner",
		description: "Amplifies the buffs cast by this Trap by 25%.",
		partSlot: TrapPartSlot.Attuner,
		flavourText: "Keeps heroes in the buff.",
		image: "images/trap-parts/Deep_Cell_Attuner_image.webp"
	},
	{
		id: 5,
		name: "Reflective Armor",
		description: "Reflects 200% of damage dealt to the Trap in a radius.",
		partSlot: TrapPartSlot.Cladding,
		flavourText: "'Hey, I know THAT trick!' - Maximilian, the War Mage",
		image: "images/trap-parts/Reflective_Armor_image.webp"
	},
	{
		id: 6,
		name: "Reusable Shielding",
		description: "Returns 25% of its base cost to its owner when the Trap is destroyed. It has a cooldown of 300 seconds (5 minutes) when used in Summoner Trap",
		partSlot: TrapPartSlot.Cladding,
		flavourText: "'One dwarf's trash is another dwarf's treasure!' - Dobbin, Claim Jumper",
		image: "images/trap-parts/Reusable_Shielding_image.webp"
	},
	{
		id: 7,
		name: "Revenge Rune",
		description: "When this Trap is killed, the attacker takes 75% of their max health in damage. It has a cooldown of 300 seconds (5 minutes) when used in Summoner Trap",
		partSlot: TrapPartSlot.Cladding,
		flavourText: "'This rune understands me.' - Smolder, the Fireborn",
		image: "images/trap-parts/Revenge_Rune_image.webp"
	},
	{
		id: 8,
		name: "Braided Coil",
		description: "Improves the Trap's refire rate, making it 20% faster.",
		partSlot: TrapPartSlot.Coil,
		flavourText: "For (almost) instant gibletization.",
		image: "images/trap-parts/Braided_Coil_image.webp"
	},
	{
		id: 9,
		name: "Discount Coil",
		description: "Reduces the Trap's build cost by 25% but increases its cooldown by 10%.",
		partSlot: TrapPartSlot.Coil,
		flavourText: "'Oo! I LOVE a good sale!' - Gabriella, the Redeemed Sorceress",
		image: "images/trap-parts/Discount_Coil_image.webp"
	},
	{
		id: 10,
		name: "Self-Improving Coil",
		description: "Reduces the Trap's cooldown by 3% per wave (max 30%).",
		partSlot: TrapPartSlot.Coil,
		flavourText: "'Sadly, I know a few people who could use some 'self-improvement,' coils.' - Gabriella, the Redeemed Sorceress",
		image: "images/trap-parts/Self-Improving_Coil_image.webp"
	},
	{
		id: 12,
		name: "Rental Parts",
		description: "Reduces Trap build cost by 50% but Trap cannot be sold. Trap is 'returned' after two waves, selling itself back to owner at 50% its value.",
		partSlot: TrapPartSlot.Components,
		flavourText: "'Professor Stipends are so LOW these days. I had to do SOMEthing.' - Gabriella, the Redeemed Sorceress",
		image: "images/trap-parts/Rental_Parts_image.webp"
	},
	{
		id: 13,
		name: "Stamped Parts",
		description: "Reduces build cost by 20%.",
		partSlot: TrapPartSlot.Components,
		flavourText: "No, you can't use them in lieu of postage.",
		image: "images/trap-parts/Stamped_Parts_image.webp"
	},
	{
		id: 14,
		name: "Subsidized Parts",
		description: "Reduces the build cost of the Trap by 10% and grants +500 coin at the start of a match.",
		partSlot: TrapPartSlot.Components,
		flavourText: "'Subsidized? Don't go thinkin' I need any handouts, now!' - Dobbin, Claim Jumper",
		image: "images/trap-parts/Subsidized_Parts_image.webp"
	},
	{
		id: 15,
		name: "Vanity Plating",
		description: "Increases the Trap's build cost by 10%, but generates XP for the Traps' owner per second.",
		partSlot: TrapPartSlot.Components,
		flavourText: "'My vanity plates say '2DMAXX!' Yeah!' - Maximilian, the War Mage",
		image: "images/trap-parts/Vanity_Plating_image.webp"
	},
	{
		id: 16,
		name: "Bounty Generator",
		description: "Increases the coin reward of Enemies affected by the trap by 2% (stacks to max 20%).",
		partSlot: TrapPartSlot.Field,
		flavourText: "'All those bounties. All for me... ow.' - Midnight, Twilight's Razor",
		image: "images/trap-parts/Bounty_Generator_image.webp"
	},
	{
		id: 17,
		name: "Health Siphon",
		description: "Restores +0.25% of owner's max health each time an enemy crosses the trap.",
		partSlot: TrapPartSlot.Field,
		flavourText: "'I will add their lifeforce to my own. And they will like it.' - Oziel, the Soul Thief",
		image: "images/trap-parts/Health_Siphon_image.webp"
	},
	{
		id: 18,
		name: "Mana Siphon",
		description: "Restores 0.25% of owner's max mana each time an enemy crosses the Trap.",
		partSlot: TrapPartSlot.Field,
		flavourText: "'At my age, I need all the mana I can get!' - Cygnus, Master of the Order",
		image: "images/trap-parts/Mana_Siphon_image.webp"
	},
	{
		id: 19,
		name: "XP Siphon",
		description: "Grants +3XP to the Trap's owner each time an enemy crosses the Trap.",
		partSlot: TrapPartSlot.Field,
		flavourText: "'Oh. My. Goodness. Where was this when I was taking that alchemy test?' Zoey, the Chaotic Apprentice",
		image: "images/trap-parts/XP_Siphon_image.webp"
	},
	{
		id: 20,
		name: "Double Struts",
		description: "Reduces damage taken by the Trap by 40%.",
		partSlot: TrapPartSlot.Frame,
		flavourText: "'She's a sturdy one, ain't she?' - Dobbin, Claim Jumper",
		image: "images/trap-parts/Double_Struts_image.webp"
	},
	{
		id: 21,
		name: "Hero Runed Frame",
		description: "Reduces damage taken by Heroes near the Trap by 10%.",
		partSlot: TrapPartSlot.Frame,
		flavourText: "'Aw, you mean I can't put my picture in it?' - Maximilian, the War Mage",
		image: "images/trap-parts/Hero_Runed_Frame_image.webp"
	},
	{
		id: 22,
		name: "Controlled Resonator",
		description: "Increases the Trap's damage to stunned, slowed or rooted Enemies by 30%.",
		partSlot: TrapPartSlot.Resonator,
		flavourText: "For when you really want to kick them when they're down.",
		image: "images/trap-parts/Controlled_Resonator_image.webp"
	},
	{
		id: 23,
		name: "Fire Resonator",
		description: "Increases the Trap's damage to burning Enemies by 30%.",
		partSlot: TrapPartSlot.Resonator,
		flavourText: "'I just want the world to burn.' - Smolder, the Fireborn",
		image: "images/trap-parts/Fire_Resonator_image.webp"
	},
	{
		id: 24,
		name: "Ice Resonator",
		description: "Increases the Trap's damage to frozen Enemies by 90%.",
		partSlot: TrapPartSlot.Resonator,
		flavourText: "'STAY FROZEN LONGER? NEED THAT!' - Hogarth, the Frozen Shield of Deg Itan",
		image: "images/trap-parts/Ice_Resonator_image.webp"
	},
	{
		id: 25,
		name: "Kinetic Resonator",
		description: "Slows Minions damaged by the trap by 10% for 2s.",
		partSlot: TrapPartSlot.Resonator,
		flavourText: "'Egad! They're slow enough even I can catch them!' - Cygnus, Master of the Order",
		image: "images/trap-parts/Kinetic_Resonator_image.webp"
	},
	{
		id: 26,
		name: "Unchained Resonator",
		description: "Causes Enemies killed by the Trap to increase its owner's Unchained Meter by a small amount.",
		partSlot: TrapPartSlot.Resonator,
		flavourText: "Unchain your unchained.",
		image: "images/trap-parts/Unchained_Resonator_image.webp"
	},
	{
		id: 27,
		name: "Debilitation Resonator",
		description: "Reduces the Physical Armor of Enemies damaged by the trap by -50 for 2s. Debuff does not stack with other Debilitation Resonators.",
		partSlot: TrapPartSlot.Resonator,
		flavourText: "'The flesh is weak... But the spirit is strong!' - Oziel, the Soul Thief",
		image: "images/trap-parts/Debilitation_Resonator_image.webp"
	},
	{
		id: 28,
		name: "Charging Spring",
		description: "Improves the Trap's refire rate, making it 20% faster.",
		partSlot: TrapPartSlot.Spring,
		flavourText: "For a happier, snappier trap.",
		image: "images/trap-parts/Charging_Spring_image.webp"
	},
	{
		id: 29,
		name: "Double Spring",
		description: "Improves the Trap's refire rate, making it 35% faster. It also increases its build cost by 25%.",
		partSlot: TrapPartSlot.Spring,
		flavourText: "Puts a spring in their deaths.",
		image: "images/trap-parts/Double_Spring_image.webp"
	},
	{
		id: 30,
		name: "Short Spring",
		description: "Penalizes the Trap's refire rate, slowing it by 15% but reduces the Traps build cost by 30%.",
		partSlot: TrapPartSlot.Spring,
		flavourText: "'I've always used short fuses, so what the heck, eh?' - Dobbin, Claim Jumper",
		image: "images/trap-parts/Short_Spring_image.webp"
	},
	{
		id: 31,
		name: "Ambush Trigger",
		description: "This Trap will only trigger if there is a Minion with more than 75% health in range. In addition, increases the damage of the Trap by 25%.",
		partSlot: TrapPartSlot.Trigger,
		flavourText: "'You must always wait for the purrrfect time to pounce.' - Midnight, Twilight's Razor",
		image: "images/trap-parts/Ambush_Trigger_image.webp"
	},
	{
		id: 32,
		name: "Combo Generator",
		description: "Adds +1 Combo Point to frozen, stunned, or mid-air Minions while on the Trap. In addition, increases the damage of the trap by 10%. Does not stack with other combo generators.",
		partSlot: TrapPartSlot.Trigger,
		flavourText: "'Momma loves combos. You know another good combo? Peanut butter and donkey fat!' - Bionka, Queen Momma",
		image: "images/trap-parts/Combo_Generator_image.webp"
	},
	{
		id: 33,
		name: "Crowd Control Trigger",
		description: "Causes the Trap to be triggered only if 3 or more Minions are within range. In addition, increases damage by 10%.",
		partSlot: TrapPartSlot.Trigger,
		flavourText: "'Orcs that stay together, pay together!' - Maximilian, the War Mage",
		image: "images/trap-parts/Crowd_Control_Trigger_image.webp"
	},
	{
		id: 34,
		name: "Execution Trigger",
		description: "This Trap will only trigger if there is a Minion with less than 25% health in range. In addition, increases the damage of the trap by 25%.",
		partSlot: TrapPartSlot.Trigger,
		flavourText: "'How... Efficient.' - Bloodspike, the Brutal",
		image: "images/trap-parts/Execution_Trigger_image.webp"
	},
	{
		id: 35,
		name: "Heat Activated Trigger",
		description: "Adds a 10% chance for the Trap to reset if burning Minions are nearby, regardless of the traps' cooldown state. The Heat Activated Trigger will only trigger, when an enemy crosses into the trigger range for a trap.",
		partSlot: TrapPartSlot.Trigger,
		flavourText: "'Let THEM feel the heat!' - Smolder, the Fireborn",
		image: "images/trap-parts/Heat_Activated_Trigger_image.webp"
	},
	{
		id: 36,
		name: "Heavy Pressure Plate",
		description: "Causes only heavy/Large Minions to trigger the trap. In addition, increases the damage of the trap by 25%. Not compatible with Big Game Hunting Traps.",
		partSlot: TrapPartSlot.Trigger,
		flavourText: "'HEY! That ain't FAIR!' - Bionka, Queen Momma",
		image: "images/trap-parts/Heavy_Pressure_Plate_image.webp"
	},
	{
		id: 37,
		name: "Kinetic Reclaimer",
		description: "Adds a 10% chance for a Trap reset if Minions are thrown into it, regardless of cooldown. Trap jams and resets normally if it resets too many times too quickly.",
		partSlot: TrapPartSlot.Trigger,
		flavourText: "'It's impolite to play with your food--but it's SO fun.' - Midnight, Twilight's Razor",
		image: "images/trap-parts/Kinetic_Reclaimer_image.webp"
	},
	{
		id: 38,
		name: "Light Pressure Plate",
		description: "Causes only light Minions to trigger the Trap. In addition, increases the damage of the trap by 15%. Not compatible with Big Game Hunting Traps.",
		partSlot: TrapPartSlot.Trigger,
		flavourText: "Kobolds beware.",
		image: "images/trap-parts/Light_Pressure_Plate_image.webp"
	}
]);
export default trapParts;