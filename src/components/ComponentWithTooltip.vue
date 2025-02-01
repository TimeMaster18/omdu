<template>
    <v-lazy
        :height="height"
        :width="width"
        :options="{threshhold: 0.00001}"
    >
        <v-tooltip
            location="top"
            class="tooltip"
            content-class="tooltip-content elevation-2"
            max-width="400"
            :disabled="disabledTooltip"
        >
            <template #activator="{ props }">
                <slot
                    name="activator"
                    :props="props"
                />
            </template>

            <template #default>
                <slot name="tooltip" />
            </template>
        </v-tooltip>
    </v-lazy>
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            default: "4rem"
        },
        height: {
            type: String,
            default: "4rem"
        },
        disabledTooltip: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style scoped>
.tooltip:deep(.tooltip-content) {
	border-style: solid;
	border-width: 1px;
	border-color: rgb(var(--v-theme-on-surface));
	background: rgb(var(--v-theme-surface)) !important;
	color: rgb(var(--v-theme-on-surface)) !important;
    padding: 0;
}
</style>