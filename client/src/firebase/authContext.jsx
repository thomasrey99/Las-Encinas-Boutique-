import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut,
        GoogleAuthProvider,
        signInWithPopup,
        sendPasswordResetEmail
       } from "firebase/auth";
import { auth } from "./firebase";

export const authContext = createContext();

export const useAuth = ()=>{
    const context = useContext(authContext)
    return context
}

export function AuthProvider({children}){
    let [user, setUser] = useState(null)

    const signup = async(email, password)=>{
        try {
            const userCreated = await createUserWithEmailAndPassword(auth, email, password)
            console.log("User created:",userCreated)
        } catch (error) {
            throw error
        }
    }

    const login = async(email, password)=>{
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            console.log("User credentials:",userCredentials)
        } catch (error) {
             throw error
         }
    }

    const logout = async() => await signOut(auth)

    const loginWithGoogle = () => {
        try {
            const googleProvider = new GoogleAuthProvider()
            return signInWithPopup(auth, googleProvider)
        } catch (error) {
            throw error
        }

    }

    const resetPassword = (email) =>{
        sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log("current user:",currentUser)
        })

    }, [])


   


    return(
        <authContext.Provider value={{signup, login, user, logout, loginWithGoogle, resetPassword }}>
            {children}
        </authContext.Provider>  
    )

} 

