import { combineReducers } from 'redux';
import authReducer from './auth'; // Assuming you have an authReducer

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here as needed
});

export default rootReducer;