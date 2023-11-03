import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const categoriesApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"https://localhost-3001.onrender.com"
    }),
    reducerPath:"categoriesApi",
    endpoints:(builder)=>({
        getAllCategories:builder.query({
            query:()=>"/categories"
        })
    })
})

export const {useGetAllCategoriesQuery}=categoriesApi