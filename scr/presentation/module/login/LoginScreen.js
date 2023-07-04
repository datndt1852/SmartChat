import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FontSize, Color} from '../../theme/IndexTheme';
import {LOGO_FACEBOOK, LOGO_GOOGLE} from '../../theme/image/IndexSourceImage';

const LoginScreen = ({navigation}) => {
  const [email, onChangeText] = useState('');
  const [pass, onChangePass] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title_screen}> Sign In </Text>
        <Text style={styles.des_screen}>
          Enter your credentials to Log In your account
        </Text>
      </View>
      {/* Main */}
      <View style={styles.main}>
        {/* Zone Input */}
        <View style={styles.input_zone}>
          <TextInput
            value={email}
            style={styles.box_input}
            onChangeText={onChangeText}
            placeholder="Email"
            keyboardType="email-address"
          />
          <Text style={styles.invalid_notification}>Invalid Email</Text>
          <TextInput
            value={pass}
            style={styles.box_input}
            onChangeText={onChangePass}
            placeholder="Password"
            keyboardType="visible-password"
            secureTextEntry={true}
          />
          <View style={styles.bottom_password}>
            <Text style={styles.forgot_password}>Forgot Password?</Text>
            <Text style={styles.invalid_notification}>
              Email or Password is incorrect
            </Text>
          </View>
        </View>
        {/* Zone Action */}
        <View style={styles.action_zone}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.signin_button}>Sign In</Text>
          </TouchableOpacity>
          <Text>OR continue with</Text>
          <View style={styles.view_content}>
            <Image source={LOGO_GOOGLE} />
            <Image source={LOGO_FACEBOOK} />
          </View>
          <View style={styles.view_content}>
            <Text style={styles.content}>Don’t have account?</Text>
            <Text style={styles.create_account}>create account</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#376AED',
  },
  title_screen: {
    fontSize: FontSize.Large,
    fontWeight: 'bold',
    color: 'white',
  },
  des_screen: {
    fontSize: FontSize.Default,
    fontFamily: 'Roboto_regular',
    color: '#fff',
  },
  header: {
    flex: 2,
    paddingVertical: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  main: {
    flex: 8,
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  input_zone: {
    flex: 1,
  },
  box_input: {
    backgroundColor: '#E0E0E0',
    fontSize: FontSize.Default,
    paddingHorizontal: 22,
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 10,
    color: '#7D7C7C',
  },
  bottom_password: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  forgot_password: {
    fontSize: FontSize.Tiny,
    color: Color.royalblue,
  },
  invalid_notification: {
    fontSize: FontSize.Tiny,
    color: Color.red,
    alignSelf: 'flex-end',
  },
  action_zone: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: Color.royalblue,
    paddingHorizontal: 80,
    paddingVertical: 12,
    borderRadius: 12,
  },
  signin_button: {
    fontSize: 18,
    color: 'white',
  },
  view_content: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  content: {
    // flex: 1,
    fontSize: FontSize.Medium,
    textAlign: 'right',
  },
  create_account: {
    // flex: 1,
    fontSize: FontSize.Medium,
    textAlign: 'left',
    color: Color.royalblue,
  },
});
export default LoginScreen;
