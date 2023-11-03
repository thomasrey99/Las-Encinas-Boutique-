import { createSlice } from "@reduxjs/toolkit";

const initialState={
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
        },
        addProductCart (state, {payload}){
            state.products=[...state.products, payload]
            state.product_quantity=state.products.length
            state.total_price=Number(state.total_price) + Number(payload.price)
        },
        deleteProductCart (state, {payload}){
            const filterProduct=state.products.filter((product)=>{
                return product.name !== payload.name
            })
            state.products=[...filterProduct]
            state.product_quantity=state.products.length
            state.total_price=Number(state.total_price) - Number(payload.price)
        }
    }
})

export const {addCart, addProductCart, deleteProductCart}=cartSlice.actions
export default cartSlice.reducer