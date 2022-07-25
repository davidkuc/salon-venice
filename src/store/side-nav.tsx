import { createSlice } from "@reduxjs/toolkit";

const sideNavSlice = createSlice({
  name: "side-nav",
  initialState: { isOpen: false },
  reducers: {
    open(state) {
        console.log("Opening side nav");
      state.isOpen = true;
    },
    close(state) {
      console.log("Loggin out!");
      state.isOpen = false;
    },
  },
});

export const sideNavActions = sideNavSlice.actions;

export default sideNavSlice.reducer;
