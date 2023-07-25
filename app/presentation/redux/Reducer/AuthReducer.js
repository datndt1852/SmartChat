import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   error: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'LOGIN_SUCCESS':
//       return {
//         ...state,
//         user: action.payload,
//         error: null,
//       };
//     case 'LOGIN_ERROR':
//       return {
//         ...state,
//         user: null,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;

//New version
export const userSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: {},
    login: false,
  },
  reducers: {
    setUser(state, action) {
      const user = action.payload;
      return {...state, userData: user, login: true};
    },
    removeUser(state, action) {
      return {...state, userData: {}, login: false};
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
