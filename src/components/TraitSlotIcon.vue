<template>
    <div
        class="d-flex align-center"
        :class="{'inactive': inactive}"
    >
        <img
            :src="traitSlot?.image"
            class="icon"
            :style="sizeStyle"
        >
        <span
            v-if="showLabel"
            class="capitalize ml-2"
        >
            {{ traitSlot?.name }}
        </span>
        <span class="ml-2">
            <slot />
        </span>
    </div>
</template>

<script>
export default {
    props: {
        // Check TraitSlot enum for possible values
        traitSlot: {
            type: Object,
            required: true
        },
        showLabel: {
            type: Boolean,
            default: false,
        },
        size: {
            type: Number,
            default: 4
        },
        inactive: {
            type: Boolean,
            default: false
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

.inactive img {
    filter: grayscale();
    opacity: 0.5;
}

.inactive span {
    opacity: 0.3;
}
</style>