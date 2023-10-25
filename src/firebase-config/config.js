import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyD_NFqiib6fuSRF0p6PmgKwLZCghby7N84",
    authDomain: "react-2023-b6907.firebaseapp.com",
    projectId: "react-2023-b6907",
    storageBucket: "react-2023-b6907.appspot.com",
    messagingSenderId: "1053708468718",
    appId: "1:1053708468718:web:8781e04eb8d62b5b7d8eff",
    measurementId: "G-SDENPF4DTX"
};

  // Initialize Firebase
const app= initializeApp(firebaseConfig);

export const db = getFirestore(app)
