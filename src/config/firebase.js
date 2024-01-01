// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRIrCJP6X3nqiqf1CqKShKJZmGAZriW9k",
  authDomain: "fir-react-auth-99b17.firebaseapp.com",
  projectId: "fir-react-auth-99b17",
  storageBucket: "fir-react-auth-99b17.appspot.com",
  messagingSenderId: "249827613804",
  appId: "1:249827613804:web:c09821db0fa1861aab0c49",
  measurementId: "G-275S977N8J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account ",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const analytics = getAnalytics(app);
