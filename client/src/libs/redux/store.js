import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsSlice } from "./features/productsSlice";
import { filterSlice } from "./features/filterSelice";
import  favoritesReducer   from "./features/favoritesSlice";
import { usersApi } from "./services/usersApi";

export const store = configureStore({
    reducer: {
      items: productsSlice.reducer,
      filters:filterSlice.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
      [usersApi.reducerPath]: usersApi.reducer,
      favorites: favoritesReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware),
  });
  
  setupListeners(store.dispatch);