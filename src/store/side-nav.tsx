import { createSlice } from "@reduxjs/toolkit";

const sideNavSlice = createSlice({
  name: "side-nav",
  initialState: { isOpen: false },
  reducers: {
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
  },
});

export const sideNavActions = sideNavSlice.actions;

export default sideNavSlice.reducer;
