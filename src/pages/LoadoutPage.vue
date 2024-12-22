<template>
    <div>
        <v-text-field v-model="loadoutCode" />
        <LoadoutEditor v-model="loadoutCode" />
    </div>
</template>

<script>
import LoadoutEditor from '../components/LoadoutEditor.vue';

export default {
    components: {
        LoadoutEditor
    },
    data() {
        return {
            loadoutCode: "Player-1091-000000000000000000-00-00-0000-0000000000000000000000000000"
        }
    },
};
</script>

<style scoped>
</style>