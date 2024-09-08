import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import Cookies from 'js-cookie';
import cookieNames from './enums/cookieNames';

export const firebaseApp = initializeApp({
    apiKey: Cookies.get(cookieNames.FirebaseSecret),
    databaseURL: "https://orcs-must-read-unchained-default-rtdb.europe-west1.firebasedatabase.app/"
});

export const database = getDatabase(firebaseApp);