<template>
    <v-dialog
        v-model="isOpen"
        :max-width="maxWidth"
    >
        <v-card>
            <v-card-title
                v-if="title"
                class="title"
            >
                {{ title }}
            </v-card-title>
            <v-card-text class="pb-4">
                <slot />
            </v-card-text>
            <v-card-actions>
                <v-btn
                    variant="outlined"
                    @click="cancel"
                >
                    {{ cancelButtonText }}
                </v-btn>
                <v-spacer />
                <v-btn
                    variant="outlined"
                    @click="confirm"
                    :color="confirmButtonColor"
                >
                    {{ confirmButtonText }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    emits: ["confirm", "cancel"],
    expose: ["open", "close"],
    props: {
        maxWidth: {
            type: [String, Number],
            default: "fit-content"
        },
        title: {
            type: String,
            default: "Please confirm"
        },
        confirmButtonText: {
            type: String,
            default: "Yes"
        },
        confirmButtonColor: {
            type: String,
            default: "success"
        },
        cancelButtonText: {
            type: String,
            default: "No"
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        open() {
            this.isOpen = true;
        },
        close() {
            this.isOpen = false;
        },
        confirm() {
            this.$emit("confirm");
            this.close();
        },
        cancel() {
            this.$emit("cancel");
            this.close();
        }
    }
}
</script>

<style scoped>
.title {
    white-space: normal;
}
</style>