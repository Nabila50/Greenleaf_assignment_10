import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(loading, user);

    // create users--------------------------------
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // ----------create observer------------------

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
            
        }
    }, [])

    // -----------------OnAuth State Change-------------

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
    })
    // ----------------LogIn------------------

    const LogIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)

    }

    // ----------------SignOut-----------------
    const logOut = () =>{
        return signOut(auth);

    }

    const authData = {
        user, 
        setUser,
        createUser,
        logOut,
        LogIn,
        loading,
        setLoading,
    }

    return  <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;