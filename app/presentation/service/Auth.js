import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

// Lưu token vào AsyncStorage khi đăng nhập thành công
const saveTokenToStorage = async (token) => {
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
    const userCredentials = await auth().signInWithEmailAndPassword(email, pass);
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

// Đăng xuất và xóa token khỏi AsyncStorage
export const logout = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
    console.log('Logout Successfully!');
  } catch (error) {
    console.log('Error during logout: ', error);
  }
};

export default {
  loginWithEmailAndPassword,
  logout,
  checkUserLoggedIn,
};
