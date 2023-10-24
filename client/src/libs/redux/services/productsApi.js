import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000"
    }),
    reducerPath:"productsApi",
    endpoints:(builder)=>({
        createProduct:builder.mutation({
            query:(newProduct)=>({
                url:"/productos",
                method:"POST",
                body:newProduct
            })
        }),
        getProductByName:builder.query({
            query:(name)=>`/productos?name=${name}`
        })
    })
})

export const {useCreateProductMutation, useGetProductByNameQuery}=productsApi