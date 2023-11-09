import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const URL_SERVER = import.meta.env.VITE_URL_SERVER; 

export const usersApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:URL_SERVER
    }),
    reducerPath:"userApi",
    endpoints: (builder) => ({
        getAllUsers:builder.query({
            query:(name) => `/users?name=${name}`,
            providesTags: ["users"],
          


        }),
        createUsers:builder.mutation({
            query:(newUser)=>({
                url: "/users",
                method: "POST",
                body: newUser
            }),
            invalidatesTags: ["users"]
        }),
        updateUsers: builder.mutation({
            query: (updatedUser) => ({
                url: `/users/${updatedUser._id}`,
              method: 'PUT',
              body: updatedUser
              }),
            invalidatesTags: ['users']
          }),
        
    })
})

export const {useGetAllUsersQuery,
              useCreateUsersMutation,
              useUpdateUsersMutation
            } = usersApi