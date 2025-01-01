<template>
    <v-lazy
        class="lazy"
        :height="size + 'rem'"
        width="100%"
        :options="{threshhold: 0.00001}"
    >
        <v-tooltip
            location="top"
            class="tooltip"
            content-class="tooltip-content elevation-2"
            max-width="400"
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
        </v-tooltip>
    </v-lazy>
</template>

<script>
export default {
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
.tooltip:deep(.tooltip-content) {
	border-style: solid;
	border-width: 1px;
	border-color: rgb(var(--v-theme-on-surface));
	background: rgb(var(--v-theme-surface)) !important;
	color: rgb(var(--v-theme-on-surface)) !important;
}

.lazy,
.icon {
	aspect-ratio: 1/1;
	border-radius: 0.25rem;
}

.icon {
    background: rgb(var(--v-theme-on-surface-loading));
}

.name {
	font-size: 1.2em;
}

.capitalize {
	text-transform: capitalize;
}
</style>