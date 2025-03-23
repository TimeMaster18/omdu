<template>
    <div>
        <v-alert
            v-if="sharedLoadout"
            type="warning"
            variant="outlined"
            class="mb-2"
            density="compact"
        >
            You're viewing a shared loadout. Any changes will be lost if you reload or leave the page. To keep this loadout, you can save it to your loadout presets manually.
        </v-alert>
        <loadout-editor v-model="loadoutCode" />
    </div>
</template>

<script>
import LoadoutEditor from '../components/LoadoutEditor.vue';
import CookieName from '../enums/cookieName';
import Cookies from 'js-cookie';

export default {
    components: {
        LoadoutEditor,
    },
    data() {
        return {
            defaultLoadoutCode: "Player-0000-000000000000000000-00-00-0000-0000000000000000000000000000",
            loadoutCode: null,
            sharedLoadout: false
        }
    },
    mounted() {
        if(this.$route.query.code !== undefined) {
            this.sharedLoadout = true;
            this.loadoutCode = this.$route.query.code;
        } else {
            this.sharedLoadout = false;
            this.loadoutCode = Cookies.get(CookieName.Loadout) ?? this.defaultLoadoutCode
        }
    },
    computed: {
        
    },
    methods: {
        
    },
    watch: {
        loadoutCode(loadoutCode) {
            if(this.sharedLoadout) return;
            Cookies.set(CookieName.Loadout, loadoutCode, { expires: 365, sameSite: "Strict", secure: true });
        }
    }
};
</script>

<style scoped>
</style>