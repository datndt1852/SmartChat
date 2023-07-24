// store.js
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/RootReducer';
import {configureStore} from '@reduxjs/toolkit';
// redux-logger

export const store = configureStore(rootReducer, applyMiddleware(thunk));
