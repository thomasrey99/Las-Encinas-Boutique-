import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const URL_SERVER = import.meta.env.VITE_URL_SERVER; 

export const categoriesApi=createApi({
    baseQuery:fetchBaseQuery({
<<<<<<< HEAD
        baseUrl:"https://las-encinas-boutique-server.onrender.com"
=======
        baseUrl:URL_SERVER
>>>>>>> develop
    }),
    reducerPath:"categoriesApi",
    endpoints:(builder)=>({
        getAllCategories:builder.query({
            query:()=>"/categories"
        })
    })
})

export const {useGetAllCategoriesQuery}=categoriesApi