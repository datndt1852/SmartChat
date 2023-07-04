import React, { useState } from 'react';
import { NavigationContainer, Route } from '@react-navigation/native';
import AppNavigator from './scr/presentation/module/navigator/AppNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('SplashScreen');

  const handleScreenChange = (screenName: string) => {
    setCurrentScreen(screenName);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor:
            currentScreen === 'SplashScreen' ? '#FFFFFF' : '#376AED',
        }} edges={['top']}>
        <NavigationContainer
          onStateChange={(state: { routes: Route[]; index: number }): void => {
            const currentRoute = state.routes[state.index].name;
            handleScreenChange(currentRoute);
          }}>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
