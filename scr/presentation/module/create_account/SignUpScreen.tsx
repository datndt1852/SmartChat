import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  LOGO_GOOGLE,
  LOGO_FACEBOOK,
  BUTTON_BACK_WHITE,
  BUTTON_SHOW_PASSWORD,
} from '../../theme/image/IndexSourceImage';
import {FontSize} from '../../theme/IndexTheme';
import {Color} from '../../theme/color/Colors';
import {STYLES} from '../../theme/styles/IndexStyles';
import {ScrollView} from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';
import database from '@react-native-firebase/database';

const SignUpScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cfpass, setCfPass] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const registerUser = async () => {
    let data = {
      id: uuid.v4(),
      name: name,
      email: email,
      password: pass,
    };
    database()
      .ref('users/' + data.id)
      .set(data)
      .then(() => {
        setCfPass('');
        setEmail('');
        setName('');
        setPass('');
        navigation.navigate('LoginScreen');
      });
  };
  return (
    <View style={styles.container}>
      <View style={STYLES.header_screen}>
        <View style={STYLES.top_header}>
          <Image style={STYLES.button_back} source={BUTTON_BACK_WHITE} />
          <Text style={STYLES.title_screen}> Sign Up </Text>
          <View style={STYLES.empty_button} />
        </View>
        <Text style={STYLES.des_screen}>
          Enter information to create your account with us
        </Text>
      </View>
      {/* Main */}
      <View style={STYLES.main_screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Zone Input */}
          <View style={styles.input_zone}>
            <TextInput
              value={name}
              style={STYLES.box_input}
              onChangeText={setName}
              placeholder="Full name"
              autoCapitalize="none"
            />
            <Text style={STYLES.invalid_notification}>
              Email or Password is incorrect
            </Text>
            <TextInput
              value={email}
              style={STYLES.box_input}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={STYLES.invalid_notification}>Invalid Email</Text>
            {/* Enter Password */}
            <View style={STYLES.view_pass}>
              <TextInput
                value={pass}
                style={STYLES.box_input_pass}
                onChangeText={setPass}
                autoCapitalize="none"
                placeholder="Password"
                keyboardType="visible-password"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={toggleShowPassword}>
                <Image source={BUTTON_SHOW_PASSWORD} />
              </TouchableOpacity>
            </View>
            <Text style={STYLES.invalid_notification}>
              Email or Password is incorrect
            </Text>
            {/* Confirm Password */}
            <View style={STYLES.view_pass}>
              <TextInput
                value={cfpass}
                style={STYLES.box_input_pass}
                onChangeText={setCfPass}
                placeholder="Password"
                keyboardType="visible-password"
                autoCapitalize="none"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={toggleShowPassword}>
                <Image source={BUTTON_SHOW_PASSWORD} />
              </TouchableOpacity>
            </View>
            <Text style={STYLES.invalid_notification}>
              Email or Password is incorrect
            </Text>
          </View>
          {/* Zone Action */}
          <View style={styles.action_zone}>
            <TouchableOpacity
              style={STYLES.normal_button}
              onPress={registerUser}>
              <Text style={STYLES.text_normal_button}>Create my account</Text>
            </TouchableOpacity>
            {/* Login with Google or SignIn */}
            <View style={styles.other_login}>
              <Text>OR continue with</Text>
              <View style={styles.view_content}>
                <Image style={STYLES.logo_login} source={LOGO_GOOGLE} />
                <Image style={STYLES.logo_login} source={LOGO_FACEBOOK} />
              </View>
              <View style={styles.view_content}>
                <Text style={styles.content}>Already have an account? </Text>
                <TouchableOpacity
                  style={styles.content}
                  onPress={() => navigation.navigate('LoginScreen')}>
                  <Text style={styles.create_account}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  other_login: {
    alignContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#376AED',
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
    marginTop: 78,
  },
  view_content: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
});
export default SignUpScreen;
