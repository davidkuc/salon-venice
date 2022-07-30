import { configureStore } from "@reduxjs/toolkit";

import sideNavReducer from "./side-nav";

const store = configureStore({
  reducer: { sideNav: sideNavReducer },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;