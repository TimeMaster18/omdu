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
            {{ traitSlot }}
        </span>
        <slot />
    </div>
</template>

<script>
import TraitSlot from '../enums/traitSlot';

export default {
    props: {
        traitSlot: {
            type: String,
            required: true
        },
        showLabel: {
            type: Boolean,
            default: false,
        },
        size: {
            type: Number,
            default: 64
        }
    },
    computed: {
        image() {
            if (this.traitSlot === TraitSlot.Diamond) return "images/trait-slots/Diamond_icon.webp";
            else if (this.traitSlot === TraitSlot.Pentagon) return "images/trait-slots/Pentagon_icon.webp";
            else if (this.traitSlot === TraitSlot.Triangle) return "images/trait-slots/Triangle_icon.webp";
            else return null;
        },
        sizeStyle() {
            return {
                height: `${this.size}px`,
                minHeight: `${this.size}px`,
                maxHeight: `${this.size}px`,
                width: `${this.size}px`,
                minWidth: `${this.size}px`,
                maxWidth: `${this.size}px`,
            }
        }
    }
}
</script>

<style scoped>
.icon {
	aspect-ratio: 1/1;
	border-radius: 4px;
	overflow: hidden;
}

.capitalize {
	text-transform: capitalize;
}
</style>