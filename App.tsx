import React, {useState} from 'react';
import {NavigationContainer, Route} from '@react-navigation/native';
import AppNavigator from './app/presentation/navigator/AppNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './app/presentation/redux/Store/IndexStore.js';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('SplashScreen');

  const handleScreenChange = (screenName: string) => {
    setCurrentScreen(screenName);
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor:
              currentScreen === 'SplashScreen' || currentScreen === 'MenuScreen'
                ? '#FFFFFF'
                : currentScreen === 'InfoUserScreen'
                ? '#979354'
                : '#376AED',
          }}
          edges={['top']}>
          <NavigationContainer
            onStateChange={(state: {routes: Route[]; index: number}): void => {
              const currentRoute = state.routes[state.index].name;
              handleScreenChange(currentRoute);
            }}>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
