import React, { useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import GoogleProvider from '../GoogleProvider/GoogleProvider';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(name,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoURL
        })
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,GoogleProvider)
    }
    const forgetPassword =(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            //console.log(currentUser);
            setUser(currentUser);
        })

        return ()=>{
            unsubscribe()
        }

    },[])
    console.log(user);

    const authInfo ={
        createUser,
        updateUser,
        signIn,
        signInWithGoogle,
        user,
        forgetPassword,
        logOut

    }

    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>

        </div>
    );
};

export default AuthProvider;