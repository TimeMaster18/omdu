import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import Cookies from 'js-cookie';
import cookieNames from './enums/cookieNames';

let firebaseApp = null;
let database = null;

try {
    // There's multiple ways this could go wrong (like a missing url, secret, connection, ...)
    firebaseApp = initializeApp({
        apiKey: Cookies.get(cookieNames.FirebaseSecret),
        databaseURL: Cookies.get(cookieNames.FirebaseUrl)
    });
    database = getDatabase(firebaseApp);
} catch(exception) {
    console.error(exception);

    // De-instantiate any setup as they either all succeed or all fail
    firebaseApp = null;
    database = null;
}

export { firebaseApp, database };