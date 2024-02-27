//Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, onSnapshot,collection,addDoc, } from "firebase/firestore";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC2IpsXgfqFW-9hk47M04BOn80jrqp3tlg",
  authDomain: "clinic-33b0e.firebaseapp.com",
  projectId: "clinic-33b0e",
  storageBucket: "clinic-33b0e.appspot.com",
  messagingSenderId: "438192268196",
  appId: "1:438192268196:web:d73a68168d4ebc6286d731",
  measurementId: "G-VXVTB6PF13"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const  handler = async (req, res)=> {
  const users = collection(db, 'suggestion_opinion');
  const usersSnapshot = await getDocs(users);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  res.status(200).json({ name: 'John Doe',usersList })
}
export default handler;