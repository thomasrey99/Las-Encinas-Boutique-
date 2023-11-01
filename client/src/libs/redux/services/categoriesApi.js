import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query"

export const categoriesApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"/http://localhost:3001"
    }),
    reducerPath:"categoriesApi",
    endpoints:(builder)=>({
        getAllCategories:builder.query({
            query:()=>"/"
        })
    })
})

export const {useGetAllCategoriesQuery}=categoriesApi