<template>
    <v-card class="card">
        <div v-if="loadout !== null">
            <img
                class="skin"
                :src="skin?.image"
            >
            <div class="name">
                {{ loadout?.playerName }} - {{ hero?.name }}
            </div>
            <div class="slot-items">
                <img
                    v-for="(slotItem, index) in slotItems"
                    :key="index"
                    class="slot-item"
                    :class="{'empty': slotItem === null}"
                    :src="slotItem?.image"
                >
            </div>
            <div class="actions">
                <v-icon
                    @click="openLoadoutLinkToClipboard"
                    class="mr-2"
                >
                    mdi-link
                </v-icon>
                <v-icon
                    @click="copyLoadoutCodeToClipboard"
                    :disabled="copying"
                >
                    mdi-content-copy
                </v-icon>
            </div>
        </div>
    </v-card>
</template>

<script>
import Dye from '../../enums/dye.js';
import { useDataStore } from '../../stores/data.js';
import { decode } from '../../utils/base62Util.js';

export default {
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore
        };
    },
    props: {
        loadoutCode: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            copying: false
        }
    },
    computed: {
        loadout() {
            let loadout = {
                playerName: 'Player',
                heroId: null,
                skinId: null,
                dyeId: Dye.Normal,
                guardianIds: [null, null],
                slotItemIds: [null, null, null, null, null, null, null, null, null],
            };

            try {
                // Turn the loadoat code into loadout data
                const parts = this.loadoutCode.split("-");
                loadout.playerName = parts[0];

                loadout.heroId = decode(parts[1].substring(0, 1));
                loadout.skinId = decode(parts[1].substring(1, 3));
                loadout.dyeId = decode(parts[1].substring(3, 4));

                for (let index = 0; index < loadout.slotItemIds.length; index++) {
                    loadout.slotItemIds[index] = decode(parts[2].substring(index * 2, (index + 1) * 2));
                }
                
                loadout.guardianIds[0] = decode(parts[3].substring(0, 1));
                loadout.guardianIds[1] = decode(parts[3].substring(1, 2));
            } catch (exception) {
                return null;
            }

            return loadout;
        },
        hero() {
            return JSON.parse(JSON.stringify(this.dataStore.heroes)).find(hero => hero.id === this.loadout.heroId) ?? null;
        },
        skin() {
            return this.hero?.skins.find(skin => skin.id === this.loadout.skinId) ?? null;
        },
        slotItems() {
            let slotItems = [];
            this.loadout.slotItemIds.forEach(slotItemId => {
                if(100 <= slotItemId && slotItemId <= 200) {
                    slotItems.push(JSON.parse(JSON.stringify(this.dataStore.traps)).find(trap => trap.id === slotItemId) ?? null);
                } else {
                    slotItems.push(JSON.parse(JSON.stringify(this.dataStore.gear)).find(gear => gear.id === slotItemId) ?? null);
                }
            });
            return slotItems;
        }
    },
    methods: {
        copyLoadoutCodeToClipboard() {
            if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
                this.copying = true;
                navigator.clipboard.writeText(this.loadoutCode);
                setTimeout(() => this.copying = false, 2000);
            } else {
                alert("Failed to copy loadout code to your clipboard 😢");
            }
        },
        openLoadoutLinkToClipboard() {
            let url = `${window.location.origin}/omdu/loadout?code=${this.loadoutCode}`;
            window.open(url, '_blank');
        }
    }
}
</script>

<style scoped>
.card {
    line-height: 0;
    aspect-ratio: 1000/471;
    background: rgb(var(--v-theme-on-surface-loading));
}

.name {
    position: absolute;
    left: 0;
    bottom: 19.5%;
    line-height: 1;
    font-size: 1.25rem;
    padding: 0.25rem 1rem;
    background: rgba(var(--v-theme-surface), 1);
    border-top-right-radius: 0.5rem;
}

.skin {
	width: 100%;
	image-rendering: optimizeQuality;
    aspect-ratio: 1000/471;
}

.slot-items {
	position: absolute;
	bottom: 0;
	background: rgba(var(--v-theme-surface), 1);
    width: 100%;
	aspect-ratio: calc(684 * 9)/572;
}

.slot-item {
	width: calc(100% / 9);
	image-rendering: optimizeQuality;
	aspect-ratio: 684/572;
}

.slot-item.empty {
    visibility: hidden;
}

.actions {
	position: absolute;
	top: 0;
    right: 0;
    padding: 0.25rem;
}
</style>