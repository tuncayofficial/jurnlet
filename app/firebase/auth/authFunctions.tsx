import { auth } from "../firebaseConfig"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export const doCreateUserWithEmailAndPassword = async(email : string, password : string) =>{
    return createUserWithEmailAndPassword(auth, email, password)
};

export const doSignInWithEmailAndPassword = async(email : string, password : string) =>{
    return signInWithEmailAndPassword(auth, email, password)
};

export const doSignInWithGoogle = async() =>{
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    return result
}

export const doSignOut = async () =>{
    return auth.signOut()
}