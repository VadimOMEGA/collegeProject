
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const CHECK_SESSION = 'CHECK_SESSION';

export const login = (token) => ({ type: LOGIN, payload: { token } });
export const logout = () => ({ type: LOGOUT });
export const checkSession = () => ({ type: CHECK_SESSION });

const initialState = { isAuthenticated: false, token: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { isAuthenticated: true, token: action.payload.token };
    case LOGOUT:
      return { isAuthenticated: false, token: null };
    case CHECK_SESSION:
      const storedToken = localStorage.getItem('token');
      return { isAuthenticated: !!storedToken, token: storedToken };
    default:
      return state;
  }
};

export default authReducer;