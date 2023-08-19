import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
const firebaseConfig = {
  apiKey: "AIzaSyDc-XELADp6sirxcPRzJ1_7NErNI3f0GA8",
  authDomain: "fir-test-9f4ef.firebaseapp.com",
  projectId: "fir-test-9f4ef",
  storageBucket: "fir-test-9f4ef.appspot.com",
  messagingSenderId: "35676495340",
  appId: "1:35676495340:web:6ab921567b8152890f74c9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export{app,auth,storage,db,}