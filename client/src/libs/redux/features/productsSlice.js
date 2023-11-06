import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  currentPage: 1,
  itemsPerPage: 4,
  totalItems: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, { payload }) {
      if (payload) {
        state.allProducts = payload;
<<<<<<< HEAD
        console.log(payload);
=======
        console.log("estos son los productos",payload)
>>>>>>> develop
        state.totalItems = payload.length;
      }
    },
    setCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
  },
});

export const { addProducts, setCurrentPage } = productsSlice.actions;

export default productsSlice.reducer;
