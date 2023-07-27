import AsyncStorage from '@react-native-async-storage/async-storage';

async function get(key, defaultValue = null) {
  try {
    let value = await AsyncStorage.getItem(key);

    if (value !== null) {
      value = JSON.parse(value);
    }

    return value;
  } catch (error) {
    console.log('Could not retrieve data: ' + key, error);
    return defaultValue;
  }
}

async function set(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Could not save data: ' + key, error);
  }
}

async function remove(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Could not remove data: ' + key, error);
  }
}

async function clear() {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log('Could not clear data', error);
  }
}

export default {
  get,
  set,
  clear,
  remove,
};
