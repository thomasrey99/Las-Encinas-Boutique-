import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const URL_SERVER = import.meta.env.VITE_URL_SERVER; 

export const productsApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:URL_SERVER
    }),
    tagTypes: ['products'],
    reducerPath:"productsApi",
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:({name, minPrice, maxPrice, category, order, type}) => `/products?name=${name}&minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}&type=${type}&order=${order}`,
            providesTags:["products"]
        }),
        createProduct:builder.mutation({
            query:(newProduct)=>({
                url:"/products",
                method:"POST",
                body:newProduct
            }),
            invalidatesTags:["products"]
        }),
        getProductById:builder.query({
            query:(id) => `/products/${id}`
        }),
        softDelete: builder.mutation({
            query: ({id_product, is_Delete}) => {
                console.log('MUTATION ID', id_product)
                return {
                    url: `/products/${id_product}`,
                    body: {is_Delete},
                    method: 'PATCH'
                }
            },
            invalidatesTags:["products"]
        })
    })
})

export const {useCreateProductMutation, useGetAllProductsQuery, useGetProductByIdQuery, useSoftDeleteMutation }=productsApi