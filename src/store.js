import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from '../src/redux/signUpSlice'

export const store = configureStore({
  reducer: {
    userData:signUpSlice,
  },
});
