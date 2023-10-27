import { createSlice } from "@reduxjs/toolkit";

const initialState={
    allProducts:[]
}

export const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        addProducts (state, {payload}){
            state.allProducts=payload
        },
    }
})

export const {addProducts}=productsSlice.actions