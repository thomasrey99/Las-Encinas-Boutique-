import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store=configureStore({
    reducer:{
        [productsApi]:productsApi.reducer
    },
    middleware:getDefaultMiddleware=>
        getDefaultMiddleware().concat(
            productsApi.middleware
        )
})

setupListeners(store.dispatch)