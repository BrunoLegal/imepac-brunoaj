// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Suas credenciais do Firebase (substitua pelos seus próprios valores)
const firebaseConfig = {

  apiKey: "AIzaSyDFMRTSFGDJNurRsQ96YtMgmYZhOFCGi4o",

  authDomain: "imepac-brunoaj.firebaseapp.com",

  projectId: "imepac-brunoaj",

  storageBucket: "imepac-brunoaj.firebasestorage.app",

  messagingSenderId: "954274917062",

  appId: "1:954274917062:web:871ff5a9d2f4f2d41185c7",

  measurementId: "G-4JL8GE79G0"

};


// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Cloud Firestore e obtém uma referência ao serviço
const db = getFirestore(app);

export { db };