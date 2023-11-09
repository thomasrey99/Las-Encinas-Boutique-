import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const categoriesApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"https://las-encinas-boutique-server.onrender.com"
    }),
    reducerPath:"categoriesApi",
    endpoints:(builder)=>({
        getAllCategories:builder.query({
            query:()=>"/categories"
        })
    })
})

export const {useGetAllCategoriesQuery}=categoriesApi