// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Vuetify
const customTheme = {
	dark: true,
	colors: {
		'background-darken-1': '#1a1a1a',
		'background': '#343434',
		'background-lighten-1': '#9a9a9a',
		'background-lighten-2': '#ebebeb',

		'surface': '#1a1a1a',

		'primary': '#efaac4',
		'primary-lighten-1': '#f4c4d6',

		'error': '#D7263D',
		'info': '#37B5E6',
		'success': '#4CB944',
		'warning': '#E59500',
	},
}
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
})

// Router
import { createWebHistory, createRouter } from 'vue-router';
import HeroesPage from './pages/HeroesPage.vue';
import TrapsPage from './pages/TrapsPage.vue';
import TrapPartsPage from './pages/TrapPartsPage.vue';
import GuardiansPage from './pages/GuardiansPage.vue';
import MapsPage from './pages/MapsPage.vue';
import LoadoutPage from './pages/LoadoutPage.vue';
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/omdu/heroes', component: HeroesPage },
		{ path: '/omdu/traps', component: TrapsPage },
		{ path: '/omdu/trap-parts', component: TrapPartsPage },
		{ path: '/omdu/guardians', component: GuardiansPage },
		{ path: '/omdu/maps', component: MapsPage },
		{ path: '/omdu/loadout', component: LoadoutPage },
	],
})

// Actual app creation
import '@/assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
	.use(vuetify)
	.use(router)
	.mount('#app')
