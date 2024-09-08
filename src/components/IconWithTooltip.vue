<template>
    <v-tooltip
        location="top"
        class="tooltip"
        content-class="tooltip-content elevation-2"
        width="400"
    >
        <template #activator="{ props }">
            <img
                class="icon"
                :src="icon"
                v-bind="props"
            >
        </template>

        <template #default>
            <slot />
        </template>
    </v-tooltip>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.tooltip:deep(.tooltip-content) {
	border-style: solid;
	border-width: 1px;
	border-color: rgb(var(--v-theme-on-surface));
	background: rgb(var(--v-theme-surface)) !important;
	color: rgb(var(--v-theme-on-surface)) !important;
}

.icon {
	width: 64px;
	height: 64px;
	aspect-ratio: 1/1;
	border-radius: 4px;
	overflow: hidden;
}
</style>