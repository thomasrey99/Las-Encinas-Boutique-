import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
//http://localhost:3001/favorites/19b6dfcf-095c-432e-af5a-95b74b037414?productId=9fec27ad-e798-408b-af30-c45aa4156a46
export const favoritesApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),
    reducerPath:"favoritesApi",
    endpoints:(builder)=>({
        getAllFavProducts:builder.query({
            query:(userId) => ({
                url: `/favorites/${userId}`,
                providesTags:["favs"]
            })
        }),
        getFavProduct:builder.query({
            query:(userId, productId) => ({
                url: `/favorites/${userId}?productId=${productId}`,
            })
        }),
        addFavProduct:builder.mutation({
            query:(userId, productId) =>({
                url: `/favorites/${userId}?productId=${productId}`,
                method:"POST",
            }),
            invalidatesTags:["favs"]
        }),
        removeFavProduct:builder.mutation({
            query:(userId, productId) =>({
                url: `/favorites/${userId}?productId=${productId}`,
                method:"DELETE",
            }),
            invalidatesTags:["favs"]
        }),
    })
})

export const {useGetAllFavProductsQuery, useGetFavProductQuery, useAddFavProductMutation, useRemoveFavProductMutation}=favoritesApi