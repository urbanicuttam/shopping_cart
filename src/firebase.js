import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFiPREIhtxlCFOSUODdTQ1MSLJmdYENFQ",
    authDomain: "todo-bcd20.firebaseapp.com",
    projectId: "todo-bcd20",
    storageBucket: "todo-bcd20.appspot.com",
    messagingSenderId: "267399339933",
    appId: "1:267399339933:web:0a3ee81c8cd155003c1974"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: "select_account" }); 

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
