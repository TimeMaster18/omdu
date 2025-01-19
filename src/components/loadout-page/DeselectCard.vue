<template>
    <v-card class="text-center font-italic elevation-0 card">
        <v-card-text class="card-text">
            <v-icon size="12rem">
                mdi-close-circle-outline
            </v-icon>
        </v-card-text>
    </v-card>
</template>

<script>
export default {}
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