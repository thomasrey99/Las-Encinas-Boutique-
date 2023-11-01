import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsSlice } from "./features/productsSlice";
import { filterSlice } from "./features/filterSelice";
import { usersApi } from "./services/usersApi";
import {typesApi} from "./services/typesApi"
import { categoriesApi } from "./services/categoriesApi";

export const store = configureStore({
    reducer: {
      items: productsSlice.reducer,
      filters:filterSlice.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
      [usersApi.reducerPath]: usersApi.reducer,
      [typesApi.reducerPath]:typesApi.reducer,
      [categoriesApi.reducerPath]:categoriesApi.reducer
      
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware, categoriesApi.middleware, typesApi.middleware),
  });
  
  setupListeners(store.dispatch);