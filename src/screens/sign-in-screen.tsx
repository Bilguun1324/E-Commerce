import React, { useState } from 'react';
import { SuperText, SuperInput, SuperView, Colors, Button, SuperStack, SuperTouchable } from '../components';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

export const SignInScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, user} = useAuth();

    const onPress = async () => {
        await signIn(email, password)
        await user ? navigation.navigate('MainScreens') : console.log('something wrong')
    }

    return (
        <SuperTouchable onPress={onPress} flex={1}>
            <SuperView color={Colors['orange']} flex={1}>
                <SuperView width={327}>
                    <SuperStack space={10}>
                        <SuperText textAlign='left' color='white' width={327}>Email: </SuperText>
                        <SuperInput placeholder='example@gmail.com' keyboardType='email-address' onChange={setEmail} />
                        <SuperText textAlign='left' color='white' width={327} >Password: </SuperText>
                        <SuperInput placeholder='*********' onChange={setPassword} secureTextEntry />
                        <SuperText color={Colors['white']}>touch anywhere to sign in</SuperText>
                    </SuperStack>
                </SuperView>
            </SuperView>
        </SuperTouchable>
    )
}