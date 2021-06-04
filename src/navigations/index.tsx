import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigation } from './bottom-navigation';
import { SplashScreen, SignUpScreen, SignInScreen, SignInUpScreen, SuccessScreen } from '../screens/';

const Stack = createStackNavigator();

export const SplashScreens = () => {
    return (
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignInUpScreen" component={SignInUpScreen} />
        </Stack.Navigator>
    );
}

export const Screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreens" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreens" component={SplashScreens} />
                <Stack.Screen name="MainScreens" component={BottomNavigation} />
                <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}