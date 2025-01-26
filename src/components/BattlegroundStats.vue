<template>
    <div>
        <stat-value
            v-if="showGamemode"
            icon="mdi-sword-cross"
        >
            <span class="capitalize">
                {{ battleground.gamemode }}
            </span>
        </stat-value>
        <stat-value
            v-if="showUnlockLevel"
            icon="mdi-account-lock-open"
        >
            Level {{ battleground.unlockLevel }}
        </stat-value>
        <stat-value
            v-if="showEnemyLevel"
            icon="mdi-target-account"
        >
            Level {{ battleground.enemyLevel }}
        </stat-value>
        <stat-value
            v-if="showWaves && battleground.waves"
            icon="mdi-waves"
        >
            {{ battleground.waves }} Waves
        </stat-value>
        <stat-value
            v-if="showParTime && parTime"
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
        },
        showGamemode: {
            type: Boolean,
            default: false
        },
        showUnlockLevel: {
            type: Boolean,
            default: false
        },
        showEnemyLevel: {
            type: Boolean,
            default: false
        },
        showWaves: {
            type: Boolean,
            default: false
        },
        showParTime: {
            type: Boolean,
            default: false
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