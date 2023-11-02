import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsSlice } from "./features/productsSlice";
import { filterSlice } from "./features/filterSelice";
import {categoriesSlice} from "./features/categoriesSlice"
import {TypeSlice} from "./features/typesSlice"
import { usersApi } from "./services/usersApi";
import {typesApi} from "./services/typesApi"
import { categoriesApi } from "./services/categoriesApi";
import { favoritesApi } from "./services/favoritesApi";

export const store = configureStore({
    reducer: {
      items: productsSlice.reducer,
      filters:filterSlice.reducer,
      types:TypeSlice.reducer,
      categories:categoriesSlice.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
      [usersApi.reducerPath]: usersApi.reducer,
      [typesApi.reducerPath]:typesApi.reducer,
      [categoriesApi.reducerPath]:categoriesApi.reducer,
      [favoritesApi.reducerPath]: favoritesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware, categoriesApi.middleware, typesApi.middleware,
        favoritesApi.middleware),
  });
  
  setupListeners(store.dispatch);