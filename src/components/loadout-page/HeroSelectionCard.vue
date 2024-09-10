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
    width: 18.75rem;
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

.label {
    position: absolute;
    left: 0;
    bottom: 0;
    line-height: 1;
    padding: 0.25rem;
    background: rgba(var(--v-theme-surface), 1);
    border-top-right-radius: 0.5rem;
}
</style>