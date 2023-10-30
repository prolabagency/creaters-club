import { configureStore } from "@reduxjs/toolkit";

import profile from '../redux/slices/profile'
import cities from '../redux/slices/cities'
import teams from '../redux/slices/teams'
import users from "./slices/users";

export const store = configureStore({
  reducer: {
    profile,
    cities,
    teams,
    users
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;