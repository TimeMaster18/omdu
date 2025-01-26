<template>
    <v-card class="card">
        <img
            class="image"
            :class="{'inactive': !active}"
            :src="image"
        >
        <div class="name pa-4">
            {{ name }}
        </div>
    </v-card>
</template>

<script>
import Gamemode from '../enums/gamemode.js';
import SurvivalImage from '../assets/images/header_gamemode_survival.webp';
import EndlessImage from '../assets/images/header_gamemode_endless.webp';

export default {
    props: {
        gamemode: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        image() {
            if(this.gamemode === Gamemode.Survival) return SurvivalImage;
            else if(this.gamemode === Gamemode.Endless) return EndlessImage;
            return null;
        },
        name() {
            if(this.gamemode === Gamemode.Survival) return "Survival";
            else if(this.gamemode === Gamemode.Endless) return "Endless";
            return null;
        }
    }
}
</script>

<style scoped>
.card {
	line-height: 0;
}

.image {
	width: 100%;
    aspect-ratio: 599/90;
}

.image.inactive {
    filter: grayscale();
}

.name {
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	display: flex;
	align-items: center;
}
</style>