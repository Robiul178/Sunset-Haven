import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [data, setData] = useState();



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const singInUsingGoogle = () => {
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const gitHubLogIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            setUser(user);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    useEffect(() => {
        fetch('/public/data.json')
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
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;