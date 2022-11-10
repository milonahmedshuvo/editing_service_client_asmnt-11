import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile}from 'firebase/auth'
import app from '../../firebase.config';


export const AuthContext=createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user, setUser]=useState(null)


const userSingup=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const userSingin=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}
const userSinginGoogle=(providerGoogle)=>{
    return signInWithPopup(auth, providerGoogle)
}

const userSingout=()=>{
    return signOut(auth)
}

const userUpdateProfile=(phofile)=>{
    return updateProfile(auth.currentUser, phofile)
}


    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,( currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
        })
        return ()=> unsubcribe()
    },[])


    const authInfo={user, userSingup, userSingin, userSingout, userSinginGoogle, userUpdateProfile}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;