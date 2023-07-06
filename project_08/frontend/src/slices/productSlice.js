import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItems: [],
    totalPrice: 0,
    products: [    ],
    searchQuery: '',
    filteredProducts: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cartItems = action.payload;
    },
    set: (state, action) => {
      state.products = action.payload;
    },
    searchProducts: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredProducts = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    upadateCart: (state, action) => {
      state.cartItems = state.cartItems;
    },

  }
});

export const {
  searchProducts,
  set,
  setCart,
  upadateCart
} = productSlice.actions;

export default productSlice.reducer;
