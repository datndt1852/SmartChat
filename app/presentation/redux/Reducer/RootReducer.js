import {combineReducers} from 'redux';
import authReducer from './AuthReducer';
import infoUserReducer from './InfoUserReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  info: infoUserReducer,
});

export default (state, action) => rootReducer(state, action);
