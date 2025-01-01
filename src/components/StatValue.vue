<template>
    <div class="wrapper">
        <v-icon>{{ icon }}</v-icon>
        <span class="value ml-2">
            <slot />
        </span>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped>
.wrapper {
    line-height: 0;
}

.value {
    line-height: 1;
	display: inline-block;
	vertical-align: middle;
}
</style>