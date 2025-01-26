<template>
    {{ title }}
</template>

<script>
import Difficulty from '../enums/difficulty.js';
import Gamemode from '../enums/gamemode.js';

export default {
    props: {
        battleground: {
            type: Object,
            required: true
        }
    },
    computed: {
        title() {
            let title = `${this.battleground.map.name} `;
            if(this.battleground.gamemode === Gamemode.Survival) title += `(${this.difficulty})`;
            else if(this.battleground.gamemode === Gamemode.Endless) title += '(Endless)';
            return title;
        },
        difficulty() {
            if(this.battleground.difficulty === Difficulty.Apprentice) return "Apprentice";
            else if(this.battleground.difficulty === Difficulty.WarMage) return "War Mage";
            else if(this.battleground.difficulty === Difficulty.Master) return "Master";
            else if(this.battleground.difficulty === Difficulty.RiftLord) return "Rift Lord";
            else return null;
        },
    }
}
</script>

<style scoped>
</style>