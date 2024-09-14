<template>
    <div class="d-flex align-center">
        <img
            :src="trapPart.image"
            class="icon"
            :style="sizeStyle"
        >
        <span
            class="capitalize ml-2"
        >
            {{ trapPart.description }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        trapPart: {
            type: Object,
            required: true
        },
        size: {
            type: Number,
            default: 4
        },
    },
    computed:{
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

.capitalize {
	text-transform: capitalize;
}
</style>