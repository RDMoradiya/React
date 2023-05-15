import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menuSlice",
  initialState: {
    menuOpen: false,
  },
  reducers: {
    openMenu: (state, action) => {
      state.menuOpen = true;
    },
    closeMenu: (state, action) => {
      state.menuOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
