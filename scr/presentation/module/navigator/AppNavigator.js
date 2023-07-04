import React from 'react';
import LoginScreen from '../login/LoginScreen';
import SplashScreen from '../splash/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../home/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
