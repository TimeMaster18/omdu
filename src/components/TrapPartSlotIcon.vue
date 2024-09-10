<template>
    <div class="d-flex align-center">
        <img
            :src="image"
            class="icon"
            :style="sizeStyle"
        >
        <span
            v-if="showLabel"
            class="capitalize ml-2"
        >
            {{ trapPartSlot }}
        </span>
    </div>
</template>

<script>
import TrapPartSlot from '../enums/trapPartSlot';

export default {
    props: {
        trapPartSlot: {
            type: String,
            required: true
        },
        showLabel: {
            type: Boolean,
            default: false,
        },
        size: {
            type: Number,
            default: 4
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
            else return null;
        },
        sizeStyle() {
            return {
                height: `${this.size}rem`,
                width: `${this.size}rem`,
            }
        }
    }
}
</script>

<style scoped>
.icon {
	aspect-ratio: 1/1;
	border-radius: 0.25rem;
	overflow: hidden;
	filter: grayscale();
}

.capitalize {
	text-transform: capitalize;
}
</style>