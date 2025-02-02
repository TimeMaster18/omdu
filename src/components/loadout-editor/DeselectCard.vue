<template>
    <v-card class="text-center font-italic elevation-0 card">
        <v-card-text class="card-text">
            <v-icon :size="iconSize">
                mdi-close-circle-outline
            </v-icon>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        iconSize: {
            type: String,
            default: "12rem"
        }
    }
}
</script>

<style scoped>
.card {
	height: 100%;
	align-content: center;
    border: 2px dashed rgba(var(--v-theme-on-surface), 0.1);
}

.card-text {
	opacity: 0.3;
}
</style>