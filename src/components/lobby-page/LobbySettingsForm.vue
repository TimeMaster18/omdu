<template>
    <div>
        <div
            v-if="firebaseCorrectlySetup"
            class="mb-4 text-success text-center"
        >
            <v-icon size="32">
                mdi-check-circle-outline
            </v-icon>
            Connected to lobby
        </div>
        <div
            v-else
            class="mb-4 text-error"
        >
            <v-icon size="32">
                mdi-close-circle-outline
            </v-icon>
            Not connected to lobby
        </div>

        <v-text-field
            label="Firebase url"
            variant="outlined"
            hide-details
            v-model="firebaseUrl"
            placeholder="https://orcs-must-read-unchained-default-rtdb.europe-west1.firebasedatabase.app/"
            class="mb-4"
        />
        <v-text-field
            label="Firebase secret"
            variant="outlined"
            hide-details
            v-model="firebaseSecret"
            type="password"
            placeholder="●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●"
            class="mb-4"
        />
        <v-text-field
            label="Player number"
            variant="outlined"
            hide-details
            v-model="playerIndex"
            type="number"
            min="1"
            max="4"
            class="mb-4"
        />
        <v-text-field
            label="Player name"
            variant="outlined"
            hide-details
            v-model="playerName"
            class="mb-4"
        />
        <v-btn
            variant="outlined"
            class="mb-4"
            @click="saveFirebaseSettings"
        >
            Save
        </v-btn>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import cookieNames from '../../enums/cookieNames.js';
import { firebaseApp } from '../../firebase.js';

export default {
    data() {
        return {
            firebaseCorrectlySetup: firebaseApp !== null,
            firebaseUrl: Cookies.get(cookieNames.FirebaseUrl),
            firebaseSecret: Cookies.get(cookieNames.FirebaseSecret),
            playerIndex: (parseInt(Cookies.get(cookieNames.PlayerIndex)) ?? 0) + 1,
            playerName: Cookies.get(cookieNames.PlayerName),
        }
    },
    methods: {
        saveFirebaseSettings(){
            // expires: Set the cookies for 1 years even if the user closes the session
            // sameSite: It will only be send to this website so others can't get a hold of itµ
            // secure: Only allow the cookie to be sent over https
            const cookieOptions = { expires: 365, sameSite: "Strict", secure: true };

            Cookies.set(cookieNames.FirebaseUrl, this.firebaseUrl, cookieOptions);
            Cookies.set(cookieNames.FirebaseSecret, this.firebaseSecret, cookieOptions);
            Cookies.set(cookieNames.PlayerIndex, this.playerIndex - 1, cookieOptions);
            Cookies.set(cookieNames.PlayerName, this.playerName, cookieOptions);

            // Reload the page so the firebase store can set itself up correctly
            location.reload();
        }
    }
};
</script>

<style scoped></style>