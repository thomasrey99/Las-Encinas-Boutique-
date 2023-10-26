import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsSlice } from "./features/productsSlice";

export const store = configureStore({
    reducer: {
      items: productsSlice.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });
  
  setupListeners(store.dispatch);