<template>
    <div
        class="d-flex align-center"
    >
        <img
            :src="faction?.image"
            class="icon"
            :style="sizeStyle"
        >
        <span class="ml-2">
            <slot />
        </span>
    </div>
</template>

<script>
export default {
    props: {
        // Check Faction enum for possible values
        faction: {
            type: Object,
            required: true
        },
        size: {
            type: Number,
            default: 4
        },
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
    opacity: 0.5;
}

.capitalize {
	text-transform: capitalize;
}
</style>