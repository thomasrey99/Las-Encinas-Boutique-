import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut
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

    const logout = () => signOut(auth)

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log("current user:",currentUser)
        })

    }, [])


   


    return(
        <authContext.Provider value={{signup, login, user, logout }}>
            {children}
        </authContext.Provider>  
    )

} 

