import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const GoogleProvider = new GoogleAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();

    //google login
    const googleLogin = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    //facebook login
    const facebookLogin = () => {
        return signInWithPopup(auth, FacebookProvider)
    }

    //register
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //signOut 
    const handleSignOut = () => {
        return signOut(auth)
    }
    //observation
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            return unsubscribe;
        }
    }, [])
    console.log(user)
    const authInfo = {
        handleRegister,
        userLogin,
        googleLogin,
        handleSignOut,
        facebookLogin,
        user,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;