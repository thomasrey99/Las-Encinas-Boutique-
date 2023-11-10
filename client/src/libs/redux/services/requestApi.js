import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL_SERVER = import.meta.env.VITE_URL_SERVER; 

export const requestApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:URL_SERVER
    }),
    reducerPath:"requestApi",
    endpoints:(builder)=>({
        getAllRequest:builder.query({
            query:()=>"/payments",
            providesTags:["request"],
        }),
        createRequest:builder.mutation({
            query:(newRequest)=>({
                url:"/payments",
                method:"POST",
                body:newRequest
            }),
            invalidatesTags:["request"]
        })
    })
})

export const {useCreateRequestMutation, useGetAllRequestQuery}=requestApi