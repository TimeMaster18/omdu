<template>
    <component-with-tooltip
        height="4rem"
        width="4rem"
        class="wrapper"
    >
        <template #activator="{ props }">
            <img
                class="icon"
                :src="icon"
                v-bind="props"
            >
        </template>

        <template #tooltip>
            <div class="px-2 py-1">
                <slot />
            </div>
        </template>
    </component-with-tooltip>
</template>

<script>
import ComponentWithTooltip from './ComponentWithTooltip.vue';
export default {
    components: {
        ComponentWithTooltip
    },
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.wrapper,
.icon {
    width: 4rem;
	height: 4rem;
	aspect-ratio: 1/1;
	border-radius: 0.25rem;
}

.wrapper {
    background: rgb(var(--v-theme-on-surface-loading));
	overflow: hidden;
}
</style>