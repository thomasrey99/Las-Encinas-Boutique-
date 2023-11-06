import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLog:null,
    userCartId:"",
    userByUid:{}
    
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser (state, {payload}){
            
            state.userLog=payload
            state.userCartId=payload.Cart.id_Cart
        },

        userByUid: (state, action)=>{

            state.userByUid = action.payload

        },

        updateUser:(state, action)=>{
          
           
        }
    },
})
export const {addUser, userByUid, updateUser}=userSlice.actions
export default userSlice.reducer