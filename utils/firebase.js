import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, onSnapshot } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { AuthCredential , getAuth, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
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


const addFireStore = async (data) => {
    const { firstname, lastname, email, phone, text } = data
    try {
        const docRef = await addDoc(collection(db, "suggestion_opinion"), {
            firstname,
            lastname,
            email,
            text,
            phone,
          
        });
        console.log("Document written with ID: ", docRef.id);
        
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const querySnapshot = collection(db, "suggestion_opinion");


const useStoreListener = () => {
  const [store, setStore] = useState([]);
  useEffect(()=>{
    const unsb = onSnapshot(querySnapshot,(snapShot)=>{
      const data = snapShot.docs.map((doc)=>doc.data());
      setStore(data);
    
    })
    return ()=>{
      unsb();
    }
  },[])

  return store

}
const loginFireStore = async (email, password) => {
  try {    
    const userCredential = await  signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
    return Promise.resolve({data:user});
  } catch (error) {
    return Promise.reject({error});
  }
}

const logoutFireStore = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
const checkFirebaseUser = async () => {
  let isLogin
  try {
    onAuthStateChanged(auth,  (user) => {
      console.log("user",user);
      if (user) {
        isLogin=true
      console.log("islog",isLogin);} 
        else {
         return isLogin=false} ; 
    });
    console.log("--islogin",isLogin);
    if(isLogin)  return Promise.resolve({isLogin:true});
    else return Promise.resolve({isLogin:false})
  } catch (error) {
    return Promise.reject({err:error});
  }
}
const useFirebaseAuthentication = () => {
  const [authUser, setAuthUser] = useState(undefined);

  useEffect(() =>{
     const unlisten = onAuthStateChanged(auth,
        authUser => {
          authUser
            ? setAuthUser(authUser)
            : setAuthUser(null);
        },
     );
     return () => {
         unlisten();
     }
  }, []);

  return authUser
}


export { db,checkFirebaseUser, addFireStore,useStoreListener,loginFireStore, logoutFireStore,useFirebaseAuthentication }


