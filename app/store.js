import * as toolkitRaw from '@reduxjs/toolkit';
const { configureStore } = toolkitRaw.default ?? toolkitRaw;
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    userReducer
  },
})