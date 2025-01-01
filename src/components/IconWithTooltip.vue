<template>
    <v-lazy
        class="lazy"
        height="4rem"
        width="4rem"
        :options="{threshhold: 0.00001}"
    >
        <v-tooltip
            location="top"
            class="tooltip"
            content-class="tooltip-content elevation-2"
            max-width="400"
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
    </v-lazy>
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

.lazy,
.icon {
    width: 4rem;
	height: 4rem;
	aspect-ratio: 1/1;
	border-radius: 0.25rem;
}

.lazy {
    background: rgb(var(--v-theme-on-surface-loading));
	overflow: hidden;
}
</style>