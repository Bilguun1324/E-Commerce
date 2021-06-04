import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, HistoryScreen, BasketScreen, CreateScreen, SearchScreen } from '../screens';
import { BottomTabNavigation } from './bottom-tab-navigation';
const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen" tabBar={(props) => <BottomTabNavigation {...props} />}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="CreateScreen" component={CreateScreen} />
      <Tab.Screen name="BasketScreen" component={BasketScreen} />
      <Tab.Screen name="HistoryScreen" component={HistoryScreen} />
    </Tab.Navigator>
  );
}