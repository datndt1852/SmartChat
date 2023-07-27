import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {LOGO_APP} from '../../theme/image/IndexSourceImage';
import {useDispatch} from 'react-redux';
import {checkUserLoggedIn} from '../../service/Auth.js';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const isLoggedIn = await checkUserLoggedIn();
    if (isLoggedIn) {
      console.log('User is logged in');
      navigation.navigate('HomeScreen');
    } else {
      console.log('User is not logged in');
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={LOGO_APP} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 324,
    height: 324,
  },
});

export default SplashScreen;
