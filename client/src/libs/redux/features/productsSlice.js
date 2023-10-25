import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]
}

export const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addProducts (state, {payload}){
            state.items=payload
            console.log(payload);
        }
    }
})

export const {addProducts}=productsSlice.actions