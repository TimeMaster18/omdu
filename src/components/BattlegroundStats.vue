<template>
    <div>
        <stat-value icon="mdi-sword-cross">
            <span class="capitalize">
                {{ battleground.gamemode }}
            </span>
        </stat-value>
        <stat-value
            v-if="battleground.waves"
            icon="mdi-waves"
        >
            {{ battleground.waves }}
        </stat-value>
        <stat-value
            v-if="parTime"
            icon="mdi-clock"
        >
            {{ parTime }}
        </stat-value>
    </div>
</template>

<script>
import StatValue from './StatValue.vue';

export default {
    components: {
        StatValue
    },
    props: {
        battleground: {
            required: true,
            type: Object
        }
    },
    computed: {
        parTime() {
            if(!this.battleground.parTime) return null;
            
            if(this.battleground.parTime.seconds < 10) {
                return `${this.battleground.parTime.minutes}:0${this.battleground.parTime.seconds}`;
            } else {
                return `${this.battleground.parTime.minutes}:${this.battleground.parTime.seconds}`;
            }
        }
    }
}
</script>

<style scoped>
.capitalize {
    text-transform: capitalize;
}
</style>