import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const typesApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),
    reducerPath:"typesAPi",
    endpoints:(builder)=>({
        getAllTypes:builder.query({
            query:()=>"/types"
        })
    })
})

export const {useGetAllTypesQuery}=typesApi