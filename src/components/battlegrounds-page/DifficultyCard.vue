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
import Difficulty from '../../enums/difficulty';
import ApprenticeImage from '../../assets/images/header_bucket_1.webp';
import WarMageImage from '../../assets/images/header_bucket_2.webp';
import MasterImage from '../../assets/images/header_bucket_3.webp';
import RiftLordImage from '../../assets/images/header_bucket_4.webp';

export default {
    props: {
        difficulty: {
            type: Number,
            required: true
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        image() {
            if(this.difficulty === Difficulty.Apprentice) return ApprenticeImage;
            else if(this.difficulty === Difficulty.WarMage) return WarMageImage;
            else if(this.difficulty === Difficulty.Master) return MasterImage;
            else if(this.difficulty === Difficulty.RiftLord) return RiftLordImage;
            return null;
        },
        name() {
            if(this.difficulty === Difficulty.Apprentice) return "Apprentice";
            else if(this.difficulty === Difficulty.WarMage) return "War Mage";
            else if(this.difficulty === Difficulty.Master) return "Master";
            else if(this.difficulty === Difficulty.RiftLord) return "Rift Lord";
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