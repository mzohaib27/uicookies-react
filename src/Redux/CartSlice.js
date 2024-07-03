import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart = state.cart + 1;
    },
    removeFromCart(state, action) {
      state.cart = state.cart - 1;
    },
    clearCart(state, action) {
      state.cart = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
