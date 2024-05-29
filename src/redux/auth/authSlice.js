// src/redux/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
