<template>
    <component-with-tooltip
        width="100%"
        :height="`${size}rem`"
    >
        <template #activator="{ props }">
            <div
                v-bind="props"
                class="d-flex align-center"
            >
                <img
                    :src="ability.icon"
                    class="icon"
                    :style="sizeStyle"
                >
                <span class="capitalize ml-2">
                    {{ ability.name }}
                </span>
            </div>
        </template>

        <template #default>
            <div class="name">
                {{ ability.name }}
            </div>
            <div class="mt-2">
                {{ ability.description }}
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
        ability: {
            type: Object,
            required: true
        },
        size: {
            type: Number,
            default: 4
        }
    },
    computed: {
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
    background: rgb(var(--v-theme-on-surface-loading));
}

.name {
	font-size: 1.2em;
}

.capitalize {
	text-transform: capitalize;
}
</style>