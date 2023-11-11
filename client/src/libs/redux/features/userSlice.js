import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLog:null,
    userCartId:"",
<<<<<<< HEAD
    userByUid:{}
    
=======
    userByUid:{},
    allUsers:[],
>>>>>>> develop
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
<<<<<<< HEAD
=======
        getAllUsers:(state, action) =>{
            state.allUsers = action.payload
        },
        getUsersByName: (state, action) =>{
            state.allUsers = action.payload
        },
>>>>>>> develop
        addUser (state, {payload}){
            
            state.userLog=payload
            if(payload!==null){
                state.userCartId=payload.Cart.id_Cart
            }else{
<<<<<<< HEAD
                state.userCartId=""
            }
        },

        userByUid: (state, action)=>{

            state.userByUid = action.payload
=======
                state.userCartId="" 
            }
        },

        userByUid: (state, action)=>{ 

            state.userLog = action.payload 
            state.userByUid = action.payload 
>>>>>>> develop

        },
        
        updateUser:(state, action)=>{
          
           
        }
    },
})
<<<<<<< HEAD
export const {addUser, userByUid, updateUser}=userSlice.actions
=======
export const {addUser, userByUid, updateUser, getAllUsers, getUsersByName}=userSlice.actions
>>>>>>> develop
export default userSlice.reducer