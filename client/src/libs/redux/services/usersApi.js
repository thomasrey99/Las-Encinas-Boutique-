import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const usersApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"https://las-encinas-boutique-server.onrender.com"
    }),
    reducerPath:"userApi",
    endpoints: (builder) => ({
        getAllUsers:builder.query({
            query:(name) => `/users?name=${name}`,
            providesTags: ["users"]
        }),
        createUsers:builder.mutation({
            query:(newUser)=>({
                url: "/users",
                method: "POST",
                body: newUser
            }),
            invalidatesTags: ["users"]
        }),
    })
})

export const {useGetAllUsersQuery, useCreateUsersMutation} = usersApi