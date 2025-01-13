import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import Cookies from 'js-cookie';
import CookieName from './enums/cookieName';
import { VueFire, VueFireAuth, VueFireDatabaseOptionsAPI } from 'vuefire';

let firebaseApp = null;
let database = null;

let initialize = function(vueApp) {
    try {
        // There's multiple ways this could go wrong (like a missing url, connection, ...)
        firebaseApp = initializeApp({
            apiKey: Cookies.get(CookieName.FirebaseSecret),
            databaseURL: Cookies.get(CookieName.FirebaseUrl)
        });
        database = getDatabase(firebaseApp);

        // Add the firebase connection to the vue app, this can also throw multiple exceptions (like invalid secret, blocked access, ...)
        vueApp.use(VueFire, {
            firebaseApp,
            modules: [
                VueFireAuth(),
                VueFireDatabaseOptionsAPI()
            ],
        });
    } catch(exception) {
        console.error(exception);
    
        // De-instantiate any setup as they either all succeed or all fail
        firebaseApp = null;
        database = null;
    }
}

export { initialize, firebaseApp, database };