import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, navBarIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleNavbar(state) {
      state.navBarIsVisible = !state.navBarIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
