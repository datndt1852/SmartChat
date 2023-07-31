import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

// Lưu token vào AsyncStorage khi đăng nhập thành công
const saveTokenToStorage = async token => {
  try {
    await AsyncStorage.setItem('userToken', token);
  } catch (error) {
    console.log('Error saving token to AsyncStorage: ', error);
  }
};

// Kiểm tra xem người dùng đã đăng nhập chưa bằng cách kiểm tra token
export const checkUserLoggedIn = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return !!token;
  } catch (error) {
    console.log('Error checking user login status: ', error);
    return false;
  }
};

// Đăng nhập bằng email và password
export const loginWithEmailAndPassword = async (email, pass, navigation) => {
  try {
    const userCredentials = await auth().signInWithEmailAndPassword(
      email,
      pass,
    );
    if (userCredentials && userCredentials.user) {
      const token = await userCredentials.user.getIdToken();
      console.log('Token:', token);
      saveTokenToStorage(token);
      console.log('Login Successfully!');
      navigation.navigate('HomeScreen');
    }
  } catch (error) {
    console.log('Login Error: ', error);
  }
};

export const registerWithEmailAndPassword = async (
  email,
  pass,
  name,
  navigation,
) => {
  try {
    const userCredentials = await auth().createUserWithEmailAndPassword(
      email,
      pass,
    );
    if (userCredentials && userCredentials.user) {
      const user = userCredentials.user;
      // Tạo thông tin người dùng trong database của ứng dụng
      const data = {
        name: name,
        email: email,
        password: pass,
      };
      // Lưu thông tin người dùng vào Firebase Realtime Database
      database()
        .ref('users/' + data.name)
        .set(data)
        .then(() => {
          navigation.navigate('LoginScreen');
        });
      // Lưu token vào AsyncStorage và Redux Store
      const token = await user.getIdToken();
      console.log('Token:', token);
      saveTokenToStorage(token);

      console.log('User registration successful!');
      return data;
    }
  } catch (error) {
    console.log('Error during user registration: ', error);
    return null;
  }
};

// Đăng xuất và xóa token khỏi AsyncStorage
export const logout = async ({navigation}) => {
  try {
    await AsyncStorage.removeItem('userToken');
    console.log('Logout Successfully!');
    navigation.navigate('LoginScreen');
  } catch (error) {
    console.log('Error during logout: ', error);
  }
};

export default {
  loginWithEmailAndPassword,
  logout,
  checkUserLoggedIn,
};
