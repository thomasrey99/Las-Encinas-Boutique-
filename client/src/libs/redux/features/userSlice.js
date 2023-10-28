import { createSlice } from "@reduxjs/toolkit";

const initialState = ["1", "2", "3", "4", "5", "6"]

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        item: console.log(initialState),
    },
})

export default userSlice.reducer