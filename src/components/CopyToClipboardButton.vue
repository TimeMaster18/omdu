<template>
    <v-btn
        variant="outlined"
        @click="copyToClipboard"
        :disabled="cooldown"
    >
        <transition
            name="fade"
            mode="out-in"
        >
            <v-icon v-if="cooldown">
                mdi-clipboard-check
            </v-icon>
            <v-icon v-else>
                {{ copyIcon }}
            </v-icon>
        </transition>
    </v-btn>
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