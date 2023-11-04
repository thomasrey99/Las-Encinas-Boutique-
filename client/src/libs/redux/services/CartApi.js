import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),
    reducerPath:"cartApi",
    endpoints:(builder)=>({
        getCart:builder.query({
            query:(id)=>`cart/${id}`,
            providesTags:["cart"]
        }),
        putCart:builder.mutation({
            query:({dataUpdate, id_cart})=>({
                url:`/cart/${id_cart}`,
                method:"PUT",
                body:dataUpdate
            }),
        })
    })
})

export const {useGetCartQuery, usePutCartMutation}=cartApi