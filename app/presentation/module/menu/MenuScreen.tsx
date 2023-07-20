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
import {
  AVATAR,
  LOGO_APP_157,
  STAR,
  BLOCKED,
  DEVICE_PAIRING,
  SETTING,
  BUTTON_BACK_BLACK,
} from '../../theme/image/IndexSourceImage';
import {FontSize} from '../../theme/IndexTheme';

const MenuScreen = ({navigation}) => {
  return (
    <View style={STYLES.container_white}>
      <View style={STYLES.header_screen}>
        <View style={styles.navigator_bar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={BUTTON_BACK_BLACK} />
          </TouchableOpacity>
        </View>
        <Image source={LOGO_APP_157} style={{width: 145.5, height: 156.5}} />
      </View>
      <View style={STYLES.main_screen_gray}>
        <TouchableOpacity onPress={() => navigation.navigate('InfoUserScreen')}>
          <View style={styles.info}>
            <Image source={AVATAR} style={styles.avatar} />
            <View style={styles.detail_info}>
              <Text style={styles.user_name}>Bilal Mustafa</Text>
              <Text style={styles.email}>thedesignerpk@outlook.com</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{flex: 1}}>
          <ScrollView style={STYLES.second_main_screen}>
            <View style={styles.item_menu}>
              <Image source={STAR} style={styles.star_logo} />
              <Text style={styles.title_item_menu}>Starred</Text>
            </View>
            <View style={styles.item_menu}>
              <Image source={BLOCKED} />
              <Text style={styles.title_item_menu}>Blocked</Text>
            </View>
            <View style={styles.item_menu}>
              <Image source={DEVICE_PAIRING} />
              <Text style={styles.title_item_menu}>Device Pairing</Text>
            </View>
            <View style={styles.item_menu}>
              <Image source={SETTING} />
              <Text style={styles.title_item_menu}>Setting</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  detail_info: {
    paddingLeft: 15,
    justifyContent: 'center',
  },
  user_name: {
    fontSize: FontSize.Default,
    fontWeight: 'bold',
  },
  email: {
    fontSize: FontSize.Tiny,
  },
  star_logo: {
    width: 25,
    height: 23.75,
  },
  item_menu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 27,
  },
  title_item_menu: {
    fontSize: FontSize.Default,
    marginLeft: 34,
  },
  avatar: {
    width: 64,
    height: 61,
  },
  navigator_bar: {
    width: '100%',
    flex: 1,
  },
});

export default MenuScreen;
