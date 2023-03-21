import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const GoogleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {

    try {
        const result = await signInWithPopup(FirebaseAuth, GoogleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;
        return {

            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }


    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(error);
        return {
            ok: false,
            errorMessage,
        }
    }

}

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {
        console.log({ email, password, displayName });

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        console.log(resp);
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        // Todo: actualizar el displayName en Firebase
        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }
    } catch (error) {

        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const loginWithEmailPassword = async({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;
        console.log(resp);
        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName,
        }
    } catch (error) {

        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const logoutFirebase = async() => {

    return await FirebaseAuth.signOut();
}