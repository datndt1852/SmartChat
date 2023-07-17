import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize} from '../../theme/IndexTheme';
import {
  ICON_MENU,
  ICON_SEARCH,
  LOGO_NO_MESSAGES,
} from '../../theme/image/IndexSourceImage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {STYLES} from '../../theme/styles/IndexStyles';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title_screen}>Conversations</Text>
        <View style={styles.action_zone}>
          <Image source={ICON_SEARCH} />
          <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
            <Image source={ICON_MENU} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Main */}
      <View style={styles.main}>
        {/* Input zone */}
        <View style={STYLES.content_zone}>
          <Image source={LOGO_NO_MESSAGES} />
          <Text>No messages so far.</Text>
        </View>
        {/* Action zone */}
        <View style={STYLES.action_zone}>
          <TouchableOpacity
            style={STYLES.normal_button}
            onPress={() => navigation.navigate('InboxScreen')}>
            <Text style={STYLES.text_normal_button}>Start a chat</Text>
          </TouchableOpacity>
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
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title_screen: {
    fontSize: FontSize.Large,
    fontWeight: 'bold',
    color: 'white',
  },
  action_zone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '13%',
  },
  main: {
    flex: 8,
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 40,
    justifyContent: 'center',
  },
});
export default HomeScreen;
