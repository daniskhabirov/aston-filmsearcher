import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPPg4orlM1B1LnrfYWDmQJ8Ouw9cvvKvI",
  authDomain: "aston-trainee-react.firebaseapp.com",
  projectId: "aston-trainee-react",
  storageBucket: "aston-trainee-react.appspot.com",
  messagingSenderId: "137638313659",
  appId: "1:137638313659:web:9d9a6d613f971e0959339e",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
