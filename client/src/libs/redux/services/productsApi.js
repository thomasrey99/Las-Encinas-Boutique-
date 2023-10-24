import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"https://rickandmortyapi.com/api"
    }),
    reducerPath:"productsApi",
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:() => '/productos',
            providesTags:["products"]
        }),
        createProduct:builder.mutation({
            query:(newProduct)=>({
                url:"/productos",
                method:"POST",
                body:newProduct
            }),
            invalidatesTags:["products"]
            }),
            invalidatesTags:["products"]
        }),
        getProductByName:builder.query({
            query:(name)=>`/productos?name=${name}`
        })
    })
})

export const {useCreateProductMutation, useGetProductByNameQuery, useGetAllProductsQuery}=productsApi