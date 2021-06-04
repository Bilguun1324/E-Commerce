import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';

export const useDoc = (path: string) => {
    const [doc, setDoc] = useState(null);

    useEffect(() => {
        const unsubscribe = firestore().doc(path).onSnapshot((res: any) => setDoc(res.data()));
        return () => unsubscribe();
    }, [path]);

    const updateDoc = (data: any) => {
        firestore().doc(path).set({ ...data }, { merge: true }).catch(error => {
            console.log(error)
        });
    };

    return { doc, updateDoc };
};

export const useCol = (path: any) => {
    const [col, setCol] = useState<any>([]);
    const [search, setSearch] = useState<any>();

    const createCol = (data: any) => {
        firestore().collection(path).add(data).catch(error => {
            console.log(error)
        });
    };

    const searchDoc = (name: string, data: string) => {
        firestore().collection(path).where(name, "==", data).get().then((querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
                setSearch([doc])
            });
        })
    }

    useEffect(() => {
        const unsubscribe = firestore().collection(path).onSnapshot((querySnapshot) => {
            setCol(querySnapshot.docs.map((doc) => doc));
        });
        return () => unsubscribe();
    }, [path]);

    return { col, search, createCol, searchDoc };
};