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
            default: 4
        }
    },
    computed: {
        sizeStyle() {
            return {
                height: `${this.size}rem`,
                minHeight: `${this.size}rem`,
                maxHeight: `${this.size}rem`,
                width: `${this.size}rem`,
                minWidth: `${this.size}rem`,
                maxWidth: `${this.size}rem`,
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
}

.capitalize {
	text-transform: capitalize;
}
</style>