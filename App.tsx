import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app/presentation/navigator/AppNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './app/presentation/redux/Store/IndexStore';
import {Color} from './app/presentation/theme/color/Colors';
import SplashScreen from './app/presentation/module/splash/SplashScreen';

const App = () => {
  // const [currentScreen, setCurrentScreen] = useState<string>('SplashScreen');

  // const handleScreenChange = (screenName: string) => {
  //   setCurrentScreen(screenName);
  // };
  const defaultBackgroundColor = Color.white;

  // State để lưu màu nền của SafeAreaView
  const [backgroundColor, setBackgroundColor] = useState(
    defaultBackgroundColor,
  );

  // Get background color by name screen
  const getBackgroundColor = (screenName: string) => {
    switch (screenName) {
      case 'MenuScreen':
        return Color.white;
      case 'InfoUserScreen':
        return Color.moss;
      default:
        return Color.royalblue;
    }
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{flex: 1, backgroundColor: backgroundColor}}
          edges={['top']}>
          <NavigationContainer
            onStateChange={state => {
              //Get name curent screen
              const currentRoute = state.routes[state.index].name;
              const screenBackgroundColor = getBackgroundColor(currentRoute);
              setBackgroundColor(screenBackgroundColor);
            }}>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
