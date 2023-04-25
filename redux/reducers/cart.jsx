import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    yourCart: [],
    success: false,
    duplicate: false,
  },
  reducers: {
    handleAddToCart: (state, { payload }) => {
      const duplicate = state.yourCart.filter((item) => item.id === payload.id);
      if (duplicate?.length === 0) {
        state.success = true;
        state.yourCart.push(payload);
      }
      state.duplicate = true;
      return state;
    },
    handleRemoveFromCart: (state, { payload }) => {
      state.yourCart = state.yourCart.filter((item) => item.id !== payload);
      return state;
    },
    handleEmptyCart: (state) => {
      state.yourCart = [];
      return state;
    },
    clearState: (state) => {
      state.duplicate = false;
      state.success = false;
      return state;
    },
  },
});

export const {
  handleAddToCart,
  handleRemoveFromCart,
  handleEmptyCart,
  clearState,
} = cartSlice.actions;

export const cartSelector = (state) => state.cart;
