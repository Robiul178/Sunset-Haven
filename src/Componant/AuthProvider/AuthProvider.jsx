import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [data, setData] = useState();
    const [reload, setReload] = useState(true)



    const createUser = (email, password) => {
        setReload(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setReload(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const singInUsingGoogle = () => {
        setReload(true)
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const gitHubLogIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user, 'current User From On auth change');
            setUser(user);
            setReload(false)
        });
        return () => {
            unSubscribe();
        }
    }, [reload]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const authInfo = {
        user,
        data,
        createUser,
        logInUser,
        singInUsingGoogle,
        gitHubLogIn,
        logOut,
        updateUserProfile,
        setReload,
        reload
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;