import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const favoritesApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),
    reducerPath:"favoritesApi",
    endpoints:(builder)=>({
        getAllFavProducts:builder.query({
            query:(userId) => ({
                url: "/favorites",
                body: userId,
                providesTags:["favs"]
            })
        }),
        getFavProduct:builder.query({
            query:(userId, productId) => ({
                url: `/favorites/${productId}`,
                body: userId,
            })
        }),
        addFavProduct:builder.mutation({
            query:(productId, userId)=>({
                url: `/favorites/${productId}`,
                method:"POST",
                body: userId, 
            }),
            invalidatesTags:["favs"]
        }),
        removeFavProduct:builder.mutation({
            query:(productId, userId)=>({
                url: `/favorites/${productId}`,
                method:"DELETE",
                body: userId, 
            }),
            invalidatesTags:["favs"]
        }),
    })
})

export const {useGetFavProductsQuery ,useAddFavProductMutation, useRemoveFavProductMutation}=favoritesApi