import { configureStore } from "@reduxjs/toolkit";

import profile from '../redux/slices/profile'
import cities from '../redux/slices/cities'

export const store = configureStore({
  reducer: {
    profile,
    cities
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;