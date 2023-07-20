import {StyleSheet} from 'react-native';
import {FontSize} from '../IndexTheme';
import {Color} from '../color/Colors';
export const STYLES = StyleSheet.create({
  normal_button: {
    backgroundColor: Color.royalblue,
    paddingHorizontal: 80,
    paddingVertical: 20,
    borderRadius: 12,
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
  text_normal_button: {
    fontSize: 18,
    color: 'white',
  },
  title_screen: {
    fontSize: FontSize.Large,
    fontWeight: 'bold',
    color: 'white',
  },
  header_screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 54,
    marginTop: 5,
    paddingHorizontal: 36,
  },
  button_back: {
    height: 20,
    width: 12,
  },
  empty_button: {
    height: 20,
    width: 12,
  },
  top_header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main_screen: {
    flex: 9,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  des_screen: {
    fontSize: FontSize.Default,
    fontFamily: 'Roboto_regular',
    textAlign: 'center',
    color: '#fff',
  },
  invalid_notification: {
    fontSize: FontSize.Tiny,
    color: Color.red,
    marginEnd: 19,
    alignSelf: 'flex-end',
  },
  view_pass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 10,
    backgroundColor: '#E0E0E0',
  },
  box_input_pass: {
    backgroundColor: '#E0E0E0',
    fontSize: FontSize.Default,
    color: '#7D7C7C',
    flex: 10,
  },
  logo_login: {
    margin: 10,
  },
  action_zone: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 78,
  },
  content_zone: {
    alignItems: 'center',
    paddingTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: Color.royalblue,
  },
  container_white: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container_info_user: {
    flex: 1,
    backgroundColor: Color.moss,
  },
  main_screen_gray: {
    flex: 9,
    backgroundColor: '#e9e7e7',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  second_main_screen: {
    flex: 6,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 40,
  },
  avatar_info: {
    height: 120,
    width: 120,
  },
});
