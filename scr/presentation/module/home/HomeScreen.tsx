import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color, FontSize} from '../../theme/IndexTheme';
import {ICON_SEARCH, ICON_SETTING} from '../../theme/image/IndexSourceImage';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title_screen}>Conversations</Text>
        <View style={styles.action_zone}>
          <Image source={ICON_SEARCH} />
          <Image source={ICON_SETTING} />
        </View>
      </View>
      {/* Main */}
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('InboxScreen')}>
          <Text style={styles.signin_button}>Start Inbox</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: Color.royalblue,
    paddingHorizontal: 80,
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 20,
  },
  signin_button: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
export default HomeScreen;
