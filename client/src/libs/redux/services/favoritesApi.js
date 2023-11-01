import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001/products"
    }),
    reducerPath:"favoritesApi",
    endpoints:(builder)=>({
        getFavProducts:builder.query({
            query:(userId) => ({
                url: "/favorites",
                body: userId,
                providesTags:["favs"]
            })
        }),
        addFavProduct:builder.mutation({
            query:(productId, userId)=>({
                url: `/favorites/${productId}`,
                method:"POST",
                body: userId, 
                params: productId
            }),
            invalidatesTags:["favs"]
        }),
        removeFavProduct:builder.mutation({
            query:(productId, userId)=>({
                url: `/favorites/${productId}`,
                method:"DELETE",
                body: userId, 
                params: productId
            }),
            invalidatesTags:["favs"]
        }),
    })
})

export const {useGetFavProductsQuery ,useAddFavProductMutation, useRemoveFavProductMutation}=productsApi