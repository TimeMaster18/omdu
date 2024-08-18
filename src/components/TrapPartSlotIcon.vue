<template>
	<img :src="image" class="icon"/>
</template>

<script>
import TrapPartSlot from '../enums/trapPartSlot';

export default {
	props: {
		trapPartSlot: {
			type: String,
			required: true
		}
	},
	computed: {
		image() {
			if (this.trapPartSlot === TrapPartSlot.Accumulator) return "images/trap-part-slots/Accumulator_icon.webp";
			else if (this.trapPartSlot === TrapPartSlot.Attuner) return "images/trap-part-slots/Attuner_icon.webp";
			else if (this.trapPartSlot === TrapPartSlot.Cladding) return "images/trap-part-slots/Cladding_icon.webp";
			else if (this.trapPartSlot === TrapPartSlot.Coil) return "images/trap-part-slots/Coil_icon.webp";
			else if (this.trapPartSlot === TrapPartSlot.Components) return "images/trap-part-slots/Components_icon.webp";
			else if (this.trapPartSlot === TrapPartSlot.Field) return "images/trap-part-slots/Field_icon.webp";
			else if (this.trapPartSlot === TrapPartSlot.Frame) return "images/trap-part-slots/Frame_icon.webp";
			else if (this.trapPartSlot === TrapPartSlot.Resonator) return "images/trap-part-slots/Resonator_icon.webp";
			else if (this.trapPartSlot === TrapPartSlot.Spring) return "images/trap-part-slots/Spring_icon.webp";
			else if (this.trapPartSlot === TrapPartSlot.Trigger) return "images/trap-part-slots/Trigger_icon.webp";
		}
	}
}
</script>

<style scoped>
.icon {
	width: 64px;
	height: 64px;
	aspect-ratio: 1/1;
	border-radius: 4px;
	overflow: hidden;
	filter: grayscale();
}
</style>