// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     favoriteProducts: [],
// };

// const favoritesSlice = createSlice({
//     name: 'favorites',  
//     initialState,
//     reducers: {
//         addFavorite(state, {payload}) {
//             state.favoriteProducts.push(payload)
//         },
//         removeFavorite(state, {payload}) {
//             state.favoriteProducts = state.favoriteProducts.filter(product => product.id !== payload.id)
//         }
//     }

// });

// export const { addFavorite, removeFavorite } = favoritesSlice.actions;

// export default favoritesSlice.reducer;