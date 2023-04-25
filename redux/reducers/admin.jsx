import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isAuthenticated: false,
    isAuthenticating: false,
    authenticationError: null,
  },
  reducers: {
    clearState: (state) => {
      state.isAuthenticated = false;
      state.isAuthenticating = false;
      return state;
    },
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.isAuthenticating = false;
    },
    loginError: (state) => {
      state.authenticationError = "Invalid login details";
      state.isAuthenticating = false;
    },
    loginLoading: (state) => {
      state.isAuthenticating = true;
      state.isAuthenticated = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { clearState, logout, loginSuccess, loginError, loginLoading } = adminSlice.actions;

export const adminSelector = (state) => state.admin;
