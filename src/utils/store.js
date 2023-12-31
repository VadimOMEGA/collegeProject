import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './auth';

const store = configureStore({
  reducer: rootReducer,

});

export default store;