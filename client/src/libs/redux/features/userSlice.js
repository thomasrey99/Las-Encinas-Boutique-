import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLog:null,
    userCartId:"",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser (state, {payload}){
            state.userLog=payload
            state.userCartId=payload.Cart.id_Cart
        }
    },
})
export const {addUser}=userSlice.actions
export default userSlice.reducer