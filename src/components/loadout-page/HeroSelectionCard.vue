<template>
    <v-card
        class="card"
        :class="{'selected': selected}"
    >
        <img :src="image">
        <span
            v-if="label"
            class="label"
        >
            {{ label }}
        </span>
    </v-card>
</template>

<script>
export default {
    props:{
        image: {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: null
        },
        selected: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.card {
	user-select: none;
    width: 250px;
    line-height: 0;
}

.card.selected{
    outline: rgb(var(--v-theme-on-surface)) 2px solid;
}

.card img {
	width: 100%;
	image-rendering: optimizeQuality;
	aspect-ratio: 1000/471;
}

.label{
    position: absolute;
    left: 0;
    bottom: 0;
    line-height: 1;
    padding: 4px;
    background: rgba(var(--v-theme-surface), 0.7);
    border-top-right-radius: 8px;
}
</style>