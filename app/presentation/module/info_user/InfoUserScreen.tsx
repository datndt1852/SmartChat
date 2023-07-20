import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {STYLES} from '../../theme/styles/IndexStyles';
import {Color} from '../../theme/color/Colors';
import {
  AVATAR,
  BUTTON_BACK_WHITE,
  ICON_EDIT,
  LOGO_FACEBOOK,
  LOGO_GOOGLE,
} from '../../theme/image/IndexSourceImage';
import {FontSize} from '../../theme/IndexTheme';

const InfoUserScreen = ({navigation}) => {
  return (
    <View style={STYLES.container_info_user}>
      <View style={STYLES.header_screen}>
        <View style={STYLES.top_header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={STYLES.button_back} source={BUTTON_BACK_WHITE} />
          </TouchableOpacity>
          <Image source={AVATAR} style={STYLES.avatar_info} />
          <View style={STYLES.empty_button} />
        </View>
      </View>
      <View style={STYLES.main_screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Full Name</Text>
          <View style={styles.view_info}>
            <Text style={styles.info_user}>Bilal Mustafa</Text>
            <TouchableOpacity>
              <Image source={ICON_EDIT} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Email</Text>
          <View style={styles.view_info}>
            <Text style={styles.info_user}>bilalmustafa.uos@gmail.com</Text>
            <TouchableOpacity>
              <Image source={ICON_EDIT} />
            </TouchableOpacity>
          </View>
          {/* Sync social */}
          {/* Sync with Google */}
          <View style={styles.item_social}>
            <Image source={LOGO_GOOGLE} style={styles.logo_social} />
            <View style={styles.account_status}>
              <Text style={{fontSize: FontSize.Default}}>
                Connected with Google.
              </Text>
              <TouchableOpacity>
                <Text style={styles.action_link}>Disconnect</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/*  */}
          {/* Sync with Facebook */}
          <View style={styles.item_social}>
            <Image source={LOGO_FACEBOOK} style={styles.logo_social} />
            <View style={styles.account_status}>
              <Text style={{fontSize: FontSize.Default}}>
                Connected with Facebook.
              </Text>
              <TouchableOpacity>
                <Text style={styles.action_link}>Disconnect</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/*  */}
          {/* Change password */}
          <Text style={styles.title}>Password</Text>
          <TouchableOpacity>
            <Text style={styles.btn_change_pass}>Change Password</Text>
          </TouchableOpacity>
          {/* Noti change password */}
          <Text style={styles.noti_change_password}>
            <Text>
              You’re Connected with Google. You need to create password
              beforeyou can change it.
            </Text>
            <Text
              style={styles.btn_creat_password}
              onPress={() => navigation.navigate('LoginScreen')}>
              Create Password
            </Text>
          </Text>
          {/* Button action */}
          <View style={styles.save_zone}>
            <TouchableOpacity style={styles.button_save}>
              <Text>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_discard}>
              <Text>Discard Changes</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view_info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 28,
  },
  title: {
    color: Color.light_gray,
    fontSize: FontSize.Default,
    fontWeight: '400',
  },
  info_user: {
    color: Color.black,
    fontSize: FontSize.Bigger,
    fontWeight: '400',
  },
  item_social: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  account_status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 26,
  },
  action_link: {
    color: Color.royalblue,
    fontSize: FontSize.Default,
  },
  logo_social: {
    width: 43,
    height: 43,
  },
  btn_change_pass: {
    flex: 1,
    width: '45%',
    fontSize: FontSize.Medium,
    color: Color.gray,
    textAlign: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.gray,
    paddingVertical: 10,
    marginVertical: 10,
  },
  noti_change_password: {
    fontSize: FontSize.Small,
  },
  btn_creat_password: {
    color: Color.royalblue,
  },
  save_zone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  button_save: {
    flex: 0.45,
    borderRadius: 12,
    backgroundColor: Color.royalblue,
    paddingVertical: 13,
    alignItems: 'center',
  },
  button_discard: {
    flex: 0.45,
    borderRadius: 12,
    borderColor: Color.royalblue,
    borderWidth: 2,
    paddingVertical: 13,
    alignItems: 'center',
  },
});

export default InfoUserScreen;
