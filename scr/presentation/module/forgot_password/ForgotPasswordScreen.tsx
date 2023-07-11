import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../theme/color/Colors';
import {STYLES} from '../../theme/styles/IndexStyles';
import {BUTTON_BACK_WHITE} from '../../theme/image/IndexSourceImage';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <View style={STYLES.header_screen}>
        <View style={STYLES.top_header}>
          <Image style={STYLES.button_back} source={BUTTON_BACK_WHITE} />
          <Text style={STYLES.title_screen}>Forgot Password</Text>
          <View style={STYLES.empty_button} />
        </View>
        <Text style={STYLES.des_screen}>
          Enter your email below to get a code to reset your password
        </Text>
      </View>
      <View style={STYLES.main_screen}>
        <ScrollView>
          {/* Zone Input */}
          <View style={{flex: 1}}>
            <TextInput
              style={STYLES.box_input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Text style={STYLES.invalid_notification}>
              This email is not registered with us.
            </Text>
          </View>
          {/* Zone Action */}
          <View style={STYLES.action_zone}>
            <TouchableOpacity style={STYLES.normal_button}>
              <Text style={STYLES.text_normal_button}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.royalblue,
  },
});

export default ForgotPasswordScreen;
