// Actual app creation
import '@/assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
const vueApp = createApp(App);

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
const customTheme = {
    dark: true,
    colors: {
        'background-darken-1': '#1a1a1a',
        'background': '#1c1c1e',
        'background-lighten-1': '#9a9a9a',
        'background-lighten-2': '#ebebeb',

        'surface': '#242424',
        'on-surface-loading': '#212121',

        'primary': '#efaac4',
        'primary-lighten-1': '#f4c4d6',

        'error': '#D7263D',
        'info': '#37B5E6',
        'success': '#4CB944',
        'warning': '#E59500',
    },
};
const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
    theme: {
        defaultTheme: 'customTheme',
        themes: {
            customTheme,
        },
    }
});
vueApp.use(vuetify);

// Router
import { createWebHistory, createRouter } from 'vue-router';
import HeroesPage from './pages/HeroesPage.vue';
import TraitsPage from './pages/TraitsPage.vue';
import GearPage from './pages/GearPage.vue'
import TrapsPage from './pages/TrapsPage.vue';
import TrapPartsPage from './pages/TrapPartsPage.vue';
import ConsumablesPage from './pages/ConsumablesPage.vue';
import GuardiansPage from './pages/GuardiansPage.vue';
import EnemiesPage from './pages/EnemiesPage.vue';
import BattlegroundsPage from './pages/BattlegroundsPage.vue';
import LoadoutPage from './pages/LoadoutPage.vue';
import HomePage from './pages/HomePage.vue';
import LobbyPage from './pages/LobbyPage.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/heroes', component: HeroesPage },
        { path: '/traits', component: TraitsPage },
        { path: '/gear', component: GearPage },
        { path: '/traps', component: TrapsPage },
        { path: '/trap-parts', component: TrapPartsPage },
        { path: '/consumables', component: ConsumablesPage },
        { path: '/guardians', component: GuardiansPage },
        { path: '/enemies', component: EnemiesPage },
        { path: '/battlegrounds', component: BattlegroundsPage },
        { path: '/loadout', component: LoadoutPage },
        { path: '/lobby', component: LobbyPage },
        { path: '/:pathMatch(.*)*', component: HomePage },
    ],
});
vueApp.use(router);

// Pinia
import { createPinia, setActivePinia } from 'pinia';
const pinia = createPinia();
setActivePinia(pinia);
vueApp.use(pinia);

// Mount the Vue app
vueApp.mount('#app')
