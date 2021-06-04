import React from 'react';
import { SuperText, SuperTouchable, Colors, SuperView } from '../components';
import { useNavigation } from '@react-navigation/native';

export const SignInUpScreen = () => {
    const navigation = useNavigation();
    return (
        <SuperView flex={1}>
            <SuperTouchable height='50%' width='100%' color={Colors['white']} onPress={() => navigation.navigate('SignUpScreen')}>
                <SuperView flex={1}>
                    <SuperText color={Colors['orange']} fontSize={20} width='90%' textAlign='center'>Don't have an account yet?  Touch here to sign up</SuperText>
                </SuperView>
            </SuperTouchable>
            <SuperTouchable height='50%' width='100%' color={Colors['orange']} onPress={() => navigation.navigate('SignInScreen')}>
                <SuperView flex={1}>
                    <SuperText color={Colors['white']} fontSize={20} width='90%' textAlign='center'>Have accound already? Touch here to sign in</SuperText>
                </SuperView>
            </SuperTouchable>
        </SuperView>
    )
}