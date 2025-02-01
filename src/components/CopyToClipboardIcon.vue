<template>
    <transition
        name="fade"
        mode="out-in"
    >
        <v-icon
            v-if="cooldown"
            @click.stop
            disabled
        >
            mdi-clipboard-check
        </v-icon>
        <v-icon
            v-else
            @click.stop="copyToClipboard"
        >
            {{ copyIcon }}
        </v-icon>
    </transition>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true
        },
        copyIcon: {
            type: String,
            default: "mdi-content-copy"
        },
    },
    data() {
        return {
            cooldown: false
        }
    },
    methods: {
        copyToClipboard() {
            if(this.cooldown) return;

            if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
                this.cooldown = true;
                navigator.clipboard.writeText(this.value);
                setTimeout(() => this.cooldown=false, 2000);
            } else {
                alert(`Failed to automatically copy to your clipboard, you'll have to do it manually 😢\n\n${this.value}`);
            }
        }
    }
}
</script>

<style scoped>
</style>