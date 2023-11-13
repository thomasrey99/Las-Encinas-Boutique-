import { createSlice } from "@reduxjs/toolkit"


const initialState={
    name:"",
    category:"",
    minPrice:"",
    maxPrice:"",
    order:"",
    type:"",
    is_Delete:"",
}

export const filterSlice=createSlice({
    name:"filters",
    initialState,
    reducers:{
        addFilter(state, {payload}){
            if(payload.name==="name"){
                state.name=payload.value
            }
            if(payload.name==="category"){
                state.category=payload.value
            }
            if(payload.name==="minPrice"){
                state.minPrice=payload.value
            }
            if(payload.name==="maxPrice"){
                state.maxPrice=payload.value
            }
            if(payload.name==="order"){
                state.order=payload.value
            }
            if(payload.name==="type"){
                state.type=payload.value
            } 
            if(payload.name==="status"){
                state.is_Delete=payload.value
            }
        },
        clearFilter(state) {
            state.name = "";
            state.category = "";
            state.minPrice = "";
            state.maxPrice = "";
            state.order = "";
            state.type = "";
            state.is_Delete = "";
        },
        statusFilter(state) {
            state.is_Delete =""
        }
    }
})

export const {addFilter, clearFilter,statusFilter}=filterSlice.actions
export default filterSlice.reducer