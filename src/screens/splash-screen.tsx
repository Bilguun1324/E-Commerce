import React, { useEffect } from 'react';
import { SuperText, SuperTouchable, SuperSpace, Colors, SuperView } from '../components';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

export const SplashScreen = () => {
    const navigation = useNavigation();
    const { user, signOut } = useAuth();

    // useEffect(() => {
    //     signOut()
    // },[])
    return (
        <SuperTouchable color={Colors['orange']} onPress={() => navigation.navigate(user ? 'MainScreens' : 'SignInUpScreen')} flex={1}>
            <SuperView flex={1}>
                <SuperText color={Colors['white']} fontSize={30} textAlign='center'>Hello, Welcome to Bilguun E-commerce app!!!</SuperText>
                <SuperSpace mt={20}>
                    <SuperText color={Colors['white']} fontSize={10} textAlign='left'>Touch anywhere to start</SuperText>
                </SuperSpace>
            </SuperView>
        </SuperTouchable>
    )
}