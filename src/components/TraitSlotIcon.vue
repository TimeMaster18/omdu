<template>
    <div class="d-flex align-center">
        <img
            :src="traitSlot.image"
            class="icon"
            :style="sizeStyle"
        >
        <span
            v-if="showLabel"
            class="capitalize ml-2"
        >
            {{ traitSlot.name }}
        </span>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        // Check TraitSlot enum for possible values
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