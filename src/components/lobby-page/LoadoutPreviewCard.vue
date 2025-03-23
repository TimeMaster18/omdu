<template>
    <v-card class="card">
        <div class="grid">
            <div
                class="icon my-auto"
                :class="{ 'hidden': !hero?.icon}"
            >
                <img
                    class="ml-1 my-1"
                    :src="hero?.icon"
                >
            </div>
            
            <div class="name ml-1 mt-1 text-left">
                <slot
                    name="name"
                    :loadout="loadout"
                    :hero="hero"
                />
                <span v-if="!$slots.name">
                    {{ loadout?.playerName }} - {{ hero?.name }}
                </span>
            </div>
            <div class="actions mr-1 mt-1">
                <slot name="actions" />
                <copy-to-clipboard-icon
                    v-if="showCopyAction && loadout !== null"
                    :value="loadoutCode"
                />
                <v-icon
                    v-if="showOpenLoadoutAction && loadout !== null"
                    @click.stop="openLoadoutLink"
                    class="ml-2"
                >
                    mdi-open-in-new
                </v-icon>
            </div>
            <div class="slot-items mt-1">
                <img
                    v-for="(slotItem, index) in slotItems"
                    :key="index"
                    class="slot-item"
                    :class="{'hidden': slotItem === null}"
                    :src="slotItem?.image"
                >
            </div>
        </div>
    </v-card>
</template>

<script>
import { useDataStore } from '../../stores/data.js';
import CopyToClipboardIcon from '../CopyToClipboardIcon.vue';
import { load as loadLoadout } from '../../utils/loadoutUtil.js';

export default {
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    components: {
        CopyToClipboardIcon,
    },
    props: {
        loadoutCode: {
            type: String,
            required: true
        },
        showCopyAction: {
            type: Boolean,
            default: false
        },
        showOpenLoadoutAction: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        loadout() {
            return loadLoadout(this.loadoutCode);
        },
        hero() {
            if(this.loadout === null) return null;
            return JSON.parse(JSON.stringify(this.dataStore.heroes)).find(hero => hero.id === this.loadout.heroId) ?? null;
        },
        slotItems() {
            if(this.loadout === null) return [null, null, null, null, null, null, null, null, null];

            let slotItems = [];
            this.loadout.slots.forEach(slot => {
                if(100 <= slot.itemId && slot.itemId <= 200) {
                    slotItems.push(JSON.parse(JSON.stringify(this.dataStore.traps)).find(trap => trap.id === slot.itemId) ?? null);
                } else {
                    slotItems.push(JSON.parse(JSON.stringify(this.dataStore.gear)).find(gear => gear.id === slot.itemId) ?? null);
                }
            });
            return slotItems;
        },
        shareLink() {
            return `${window.location.origin}/loadout?code=${this.loadoutCode}`;
        }
    },
    methods: {
        openLoadoutLink() {
            window.open(this.shareLink, '_blank');
        }
    }
}
</script>

<style scoped>
.card {
    line-height: 0;
}

.grid {
    display: grid;
    grid-template-columns: 15% 1fr auto;
    grid-template-rows: 1fr auto;
    grid-template-areas: "icon name actions" "icon slots slots"
}

.name {
    grid-area: name;
    line-height: 1.6;
    align-content: center;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.icon {
    grid-area: icon;
}

.icon img {
	image-rendering: optimizeQuality;
    aspect-ratio: 63/64;
	border-radius: 0.25rem;
    width: calc(100% - 0.25rem);
    background: rgb(var(--v-theme-on-surface-loading));
}

.slot-items {
    grid-area: slots;
	background: rgba(var(--v-theme-surface), 1);
    width: 100%;
	aspect-ratio: calc(684 * 9)/572;
    align-content: end;
}

.slot-item {
	width: calc(100% / 9);
	image-rendering: optimizeQuality;
	aspect-ratio: 684/572;
}

.hidden {
    visibility: hidden;
}

.actions {
    grid-area: actions;
    text-wrap: nowrap;
    align-content: center;
}
</style>