<template>
    <div class="d-flex align-center">
        <icon-with-tooltip
            :icon="trapPart.image"
            :style="sizeStyle"
        >
            {{ trapPart.description }}
        </icon-with-tooltip>
    </div>
</template>

<script>
import IconWithTooltip from '../IconWithTooltip.vue';

export default {
    components:{
        IconWithTooltip,
    },
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
</style>