const initialState = {
  email: '',
  id: '',
  name: '',
  password: '',
};

export default function infoUserReducer(state = initialState, payload) {
  switch (payload.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: payload.email,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: payload.password,
      };
    case 'SET_NAME':
      return {
        ...state,
        name: payload.name,
      };
  }
}
