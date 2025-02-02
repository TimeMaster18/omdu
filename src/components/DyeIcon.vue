<template>
    <img
        :src="icon"
        class="icon"
        :style="sizeStyle"
    >
</template>

<script>
import Dye from '../enums/dye';
import NormalDyeImage from '../assets/images/dye_normal.webp';
import SelectedNormalDyeImage from '../assets/images/dye_normal_glowing.webp';
import HeroicDyeImage from '../assets/images/dye_heroic.webp';
import SelectedHeroicDyeImage from '../assets/images/dye_heroic_glowing.webp';
import LegendaryDyeImage from '../assets/images/dye_legendary.webp';
import SelectedLegendaryDyeImage from '../assets/images/dye_legendary_glowing.webp';

export default {
    props: {
        // Check Dye enum for possible values
        dye: {
            type: Number,
            required: true
        },
        selected: {
            type: Boolean,
            default: false
        },
        size: {
            type: Number,
            default: 4
        },
    },
    computed: {
        icon() {
            if(this.dye === Dye.Normal) {
                if(this.selected) return SelectedNormalDyeImage;
                else return NormalDyeImage;
            } else if(this.dye === Dye.Heroic) {
                if(this.selected) return SelectedHeroicDyeImage;
                else return HeroicDyeImage;
            } else if(this.dye === Dye.Legendary) {
                if(this.selected) return SelectedLegendaryDyeImage;
                else return LegendaryDyeImage;
            } else {
                return null;
            }
        },
        sizeStyle() {
            return {
                height: `${this.size}rem`,
                minHeight: `${this.size}rem`,
                maxHeight: `${this.size}rem`,
                width: `${this.size}rem`,
                minWidth: `${this.size}rem`,
                maxWidth: `${this.size}rem`,
            }
        }
    }
}
</script>

<style scoped>
.icon {
	aspect-ratio: 256/256;
	border-radius: 0.25rem;
}
</style>