import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FontSize} from '../../theme/IndexTheme';
import {
  LOGO_FACEBOOK,
  LOGO_GOOGLE,
  BUTTON_BACK_WHITE,
} from '../../theme/image/IndexSourceImage';
import {Color} from '../../theme/color/Colors';
import {STYLES} from '../../theme/styles/IndexStyles';
import {useDispatch} from 'react-redux';

const LoginScreen = ({navigation}: any) => {
  const [email, onChangeText] = useState('');
  const [pass, onChangePass] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    // dispatch(login(email, pass));
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={STYLES.header_screen}>
        <View style={STYLES.top_header}>
          <Image style={STYLES.button_back} source={BUTTON_BACK_WHITE} />
          <Text style={STYLES.title_screen}> Sign In </Text>
          <View style={STYLES.empty_button} />
        </View>
        <Text style={STYLES.des_screen}>
          Enter your credentials to Log In your account
        </Text>
      </View>
      {/* Main */}
      <View style={STYLES.main_screen}>
        {/* Zone Input */}
        <View style={styles.input_zone}>
          <TextInput
            value={email}
            style={STYLES.box_input}
            onChangeText={onChangeText}
            placeholder="Email"
            keyboardType="email-address"
          />
          <Text style={STYLES.invalid_notification}>Invalid Email</Text>
          <TextInput
            value={pass}
            style={STYLES.box_input}
            onChangeText={onChangePass}
            placeholder="Password"
            keyboardType="visible-password"
            secureTextEntry={true}
          />
          <View style={styles.bottom_password}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              <Text style={styles.forgot_password}>Forgot Password?</Text>
            </TouchableOpacity>
            <Text style={STYLES.invalid_notification}>
              Email or Password is incorrect
            </Text>
          </View>
        </View>
        {/* Zone Action */}
        <View style={styles.action_zone}>
          <TouchableOpacity style={STYLES.normal_button} onPress={handleLogin}>
            <Text style={STYLES.text_normal_button}>Sign In</Text>
          </TouchableOpacity>
          {/* Login with Google or SignIn */}
          <View style={styles.other_login}>
            <Text>OR continue with</Text>
            <View style={styles.view_content}>
              <Image style={STYLES.logo_login} source={LOGO_GOOGLE} />
              <Image style={STYLES.logo_login} source={LOGO_FACEBOOK} />
            </View>
            <View style={styles.view_content}>
              <Text style={styles.content}>Don’t have account?</Text>
              <TouchableOpacity
                style={styles.content}
                onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.create_account}>create account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.royalblue,
  },
  input_zone: {
    flex: 1,
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
  view_content: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  content: {
    fontSize: FontSize.Medium,
    padding: 4,
  },
  create_account: {
    fontSize: FontSize.Medium,
    textAlign: 'left',
    color: Color.royalblue,
  },
  other_login: {
    alignContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
// @ts-ignore
export default LoginScreen;
