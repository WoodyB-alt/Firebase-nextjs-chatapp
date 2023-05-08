import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChLM4OXsDcznST56XcfNW5B_ydgzMmu7E",

    authDomain: "fir-nextjs-chatapp-d14ec.firebaseapp.com",
  
    projectId: "firebase-nextjs-chatapp",
  
    storageBucket: "firebase-nextjs-chatapp.appspot.com",
  
    messagingSenderId: "621882586063",

    appId: "1:621882586063:web:60cb64137825bd5845d8ba",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);