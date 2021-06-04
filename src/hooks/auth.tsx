import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const useAuth = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(async (user: any) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, [user]);

    const createUser = (email: string, pass: string) => {
        auth().createUserWithEmailAndPassword(email, pass).catch(error => {
            Alert.alert(`${error}`)
        });
    }

    const signIn = (email: string, pass: string) => {
        auth().signInWithEmailAndPassword(email, pass).catch(error => {
            Alert.alert(`${error}`)
        })
    }

    const signOut = () => auth().signOut().catch(error => {
        console.log(error)
    });

    return { user, createUser, signOut, signIn };
}