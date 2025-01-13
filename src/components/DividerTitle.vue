<template>
    <div class="d-flex align-center">
        <v-divider
            class="dividers"
            :thickness="thickness"
        />
        <span class="flex-grow text-no-wrap mx-2">
            <slot />
        </span>
        <v-divider
            class="dividers"
            :thickness="thickness"
        />
    </div>
</template>

<script>
export default {
    props: {
        thickness: {
            type: Number,
            default: 2
        }
    }
}
</script>

<style scoped>
.dividers {
    opacity: 0.5;
}
</style>