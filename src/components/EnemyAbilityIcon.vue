<template>
    <div class="d-flex align-center">
        <img
            :src="ability.icon"
            class="icon"
            :style="sizeStyle"
        >
        <span class="ml-2">
            {{ ability.description }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        ability: {
            type: Object,
            required: true
        },
        size: {
            type: Number,
            default: 4
        }
    },
    computed: {
        sizeStyle() {
            return {
                "min-height": `${this.size}rem`,
                "max-height": `${this.size}rem`,
                "min-width": `${this.size}rem`,
                "max-width": `${this.size}rem`,
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
</style>