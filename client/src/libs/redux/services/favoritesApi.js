import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const favoritesApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"https://las-encinas-boutique-server.onrender.com"
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
            query:({userId, productId}) => ({
                url: `/favorites/${userId}?productId=${productId}`,
            })
        }),
        addFavProduct:builder.mutation({
            query:({userId, productId}) =>({
                url: `/favorites/${userId}?productId=${productId}`,
                method:"POST",
            }),
            invalidatesTags:["favs"]
        }),
        removeFavProduct:builder.mutation({
            query:({userId, productId}) =>({
                url: `/favorites/${userId}?productId=${productId}`,
                method:"DELETE",
            }),
            invalidatesTags:["favs"]
        }),
    })
})

export const {useGetAllFavProductsQuery, useGetFavProductQuery, useAddFavProductMutation, useRemoveFavProductMutation}=favoritesApi