import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const commentsApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),
    reducerPath:"commentsApi",
    endpoints:(builder)=>({
        getComments:builder.query({
            query:(productId) => ({
                url: `/comments/${productId}`,
                providesTags:["comments"]
            })
        }),
        addComment:builder.mutation({
            query:({productId, userId, content}) =>({
                url: `/comments/${productId}`,
                method:"POST",
                body: {userId, content}, 
            }),
            invalidatesTags:["favs"]
        }),
        updateComment:builder.mutation({
            query:({productId, userId, commentId, content}) =>({
                url: `/comments/${productId}/${commentId}`,
                method:"PUT",
                body: {userId, content}, 
            }),
            invalidatesTags:["favs"]
        }),
        deleteComment:builder.mutation({
            query:({productId, userId, commentId}) =>({
                url: `/comments/${productId}/${commentId}`,
                method:"DELETE",
                body: userId 
            }),
            invalidatesTags:["favs"]
        }),
    })
})

export const {useGetCommentsQuery, useAddCommentMutation, useUpdateCommentMutation ,useDeleteCommentMutation}=commentsApi