import { configureStore } from "@reduxjs/toolkit";

import profile from '../redux/slices/profile'
import cities from '../redux/slices/cities'
import teams from '../redux/slices/teams'
import users from "./slices/users";
import members from "./slices/members";
import projects from "./slices/projects";

export const store = configureStore({
  reducer: {
    profile,
    cities,
    teams,
    users,
    members,
    projects,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;