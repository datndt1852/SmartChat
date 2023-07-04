import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {LOGO_APP} from '../../theme/image/IndexSourceImage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000);
  }, [navigation]);

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
