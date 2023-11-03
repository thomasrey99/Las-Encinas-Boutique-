import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const typesApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"https://las-encinas-boutique-server.onrender.com"
    }),
    reducerPath:"typesAPi",
    endpoints:(builder)=>({
        getAllTypes:builder.query({
            query:()=>"/types"
        })
    })
})

export const {useGetAllTypesQuery}=typesApi