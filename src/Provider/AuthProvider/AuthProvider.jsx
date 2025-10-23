import React, { useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import GoogleProvider from '../GoogleProvider/GoogleProvider';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true)

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(name,photoURL)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoURL
        })
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,GoogleProvider)
    }
    const forgetPassword =(email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email)
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            //console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
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
        logOut,
        loading,
        setLoading

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