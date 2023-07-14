import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {FontSize} from '../../theme/IndexTheme';
import {AVATAR} from '../../theme/image/IndexSourceImage';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {Color} from '../../theme/color/Colors';

const InboxScreen = ({}: any) => {
  const [messages, setMessages] = useState<IMessage[]>([] as IMessage[]);
  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title_screen}>Bilal Mustafa</Text>
        <Text style={styles.des_screen}>92 333 656 0571</Text>
        <Image source={AVATAR} />
      </View>
      {/* Main */}
      <View style={styles.main}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{_id: 1}}
        />
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
export default InboxScreen;
