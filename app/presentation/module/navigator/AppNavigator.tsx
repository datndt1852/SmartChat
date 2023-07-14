import React from 'react';
import LoginScreen from '../login/LoginScreen';
import SplashScreen from '../splash/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../home/HomeScreen';
import InboxScreen from '../inbox/InboxScreen';
import SignUpScreen from '../create_account/SignUpScreen';
import ForgotPasswordScreen from '../forgot_password/ForgotPasswordScreen';

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
        name="SignUpScreen"
        component={SignUpScreen}
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
      <Stack.Screen
        name="InboxScreen"
        component={InboxScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
