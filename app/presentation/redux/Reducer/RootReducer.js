import authReducer from './AuthReducer';
import infoUserReducer from './InfoUserReducer';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  info: infoUserReducer,
});

export default rootReducer;
