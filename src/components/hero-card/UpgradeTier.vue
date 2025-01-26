<template>
    <v-row no-gutters>
        <v-col
            align-self="center"
            class="name"
        >
            {{ label }}
        </v-col>
        <v-col
            v-for="(upgrade, index) in upgradeTier"
            :key="index"
        >
            <icon-with-tooltip :icon="upgrade.icon">
                <div class="name">
                    {{ upgrade.name }}
                </div>
                <div class="mt-2">
                    {{ upgrade.description }}
                </div>
            </icon-with-tooltip>
        </v-col>
    </v-row>
</template>

<script>
import IconWithTooltip from "../IconWithTooltip.vue";
export default {
    components: { IconWithTooltip },
    props: {
        label: {
            type: String,
            required: false,
            default: null
        },
        upgradeTier: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.name {
	font-size: 1.2em;
}
</style>