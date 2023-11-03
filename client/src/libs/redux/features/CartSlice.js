import { createSlice } from "@reduxjs/toolkit";

const initialState={
    id_Cart:"",
    products:[],
    product_quantity:0,
    total_price:0
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCart (state, {payload}){
            state.id_Cart=payload.id_Cart
            state.products=payload.products
            state.product_quantity=payload.product_quantity
            state.total_price=payload.total_price
        }
    }
})

export const {addCart}=cartSlice.actions
export default cartSlice.reducer