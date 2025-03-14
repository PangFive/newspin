import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

window.dataSpin = [];
window.statusSpin = false;

const firebaseConfig = {
    apiKey: "AIzaSyDcEhBiqc73T7nNj2INHmpjEL1ou0gjC3o",
    authDomain: "spinapp-4f7ac.firebaseapp.com",
    databaseURL: "https://spinapp-4f7ac-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "spinapp-4f7ac",
    storageBucket: "spinapp-4f7ac.appspot.com",
    messagingSenderId: "468476604594",
    appId: "1:468476604594:web:91555a106b2d34d02d19ab"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const userRef = ref(database, 'config');
onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    // console.log("Data updated:", data);
    dataSpin = data.data;
    statusSpin = data.status;
    const dotElement = document.getElementById('dotOnline');

    if (statusSpin) {
        dotElement.classList.add('dot-online');
    } else {
        dotElement.classList.remove('dot-online');
    }
});

window.saveAllEntries = (dataArray) => {
    const urlParams = new URLSearchParams(window.location.search);
    const isDev = urlParams.get('dev');
    if (!isDev) {
        const dataRef = ref(database, 'config/data_entries');
        set(dataRef, dataArray).then(() => {
            console.log("Data entries updated successfully.");
        }).catch((error) => {
            console.error("Error updating data:", error);
        });
    }
}