import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
<<<<<<< HEAD

export const cartApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"https://las-encinas-boutique-server.onrender.com"
=======
const URL_SERVER = import.meta.env.VITE_URL_SERVER; 

export const cartApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:URL_SERVER
>>>>>>> develop
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