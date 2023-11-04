import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const reviewsApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),
    reducerPath:"reviewsApi",
    endpoints:(builder)=>({
        getAllReviews:builder.query({
            query:(productId) => ({
                url: `/reviews/${productId}`,
                providesTags:["reviews"]
            })
        }),
        getReviewById:builder.query({
            query:({productId, idReview}) => ({
                url: `/reviews/${productId}?idReview=${idReview}`,
            })
        }),
        addReview:builder.mutation({
            query:({userId, productId, newReview}) =>({
                url: `/reviews/${productId}?userId=${userId}`,
                method:"POST",
                body: newReview
            }),
            invalidatesTags:["reviews"]
        }),
        editReview:builder.mutation({
            query:({userId, productId, idReview, updateReview}) =>({
                url: `/reviews/${productId}?userId=${userId}&idReview=${idReview}`,
                method:"PUT",
                body: updateReview
            }),
            invalidatesTags:["reviews"]
        }),
        removeReview:builder.mutation({
            query:({userId, productId, idReview}) =>({
                url: `/reviews/${productId}?userId=${userId}&idReview=${idReview}`,
                method:"DELETE",
            }),
            invalidatesTags:["reviews"]
        }),
    })
})

export const {useGetAllReviewsQuery, useGetReviewByIdQuery, useAddReviewMutation, useEditReviewMutation, useRemoveReviewMutation}=reviewsApi