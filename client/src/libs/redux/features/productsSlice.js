import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
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
=======
const initialState={
    items:[]
}

export const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        addProducts (state, {payload}){
            state.items=payload
        }
    }
})

export const {addProducts}=productsSlice.actions
>>>>>>> b7b5ed8f8a5938d6cc49ee341d44deadd1efaa46
