import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const URL_SERVER = import.meta.env.VITE_URL_SERVER; 

export const typesApi=createApi({
    baseQuery:fetchBaseQuery({
<<<<<<< HEAD
        baseUrl:"https://las-encinas-boutique-server.onrender.com"
=======
        baseUrl:URL_SERVER
>>>>>>> develop
    }),
    reducerPath:"typesAPi",
    endpoints:(builder)=>({
        getAllTypes:builder.query({
            query:()=>"/types"
        })
    })
})

export const {useGetAllTypesQuery}=typesApi