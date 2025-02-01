<template>
    <v-dialog
        v-model="isOpen"
        width="auto"
    >
        <template #activator="{ props }">
            <v-icon v-bind="props">
                mdi-cog
            </v-icon>
        </template>

        <template #default>
            <v-card>
                <v-card-text>
                    <slot />
                </v-card-text>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    }
}
</script>

<style scoped>
</style>