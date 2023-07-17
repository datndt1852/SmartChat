import React from 'react';
import LoginScreen from '../module/login/LoginScreen';
import SplashScreen from '../module/splash/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../module/home/HomeScreen';
import InboxScreen from '../module/inbox/InboxScreen';
import SignUpScreen from '../module/create_account/SignUpScreen';
import ForgotPasswordScreen from '../module/forgot_password/ForgotPasswordScreen';
import MenuScreen from '../module/menu/MenuScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
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
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
