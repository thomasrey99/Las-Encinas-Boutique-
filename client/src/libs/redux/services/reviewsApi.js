import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const reviewsApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"https://las-encinas-boutique-server.onrender.com"
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
                body: {
                    rating: newReview.rating,
                    comment: newReview.comment
                }
            }),
            invalidatesTags:["reviews"]
        }),
        editReview:builder.mutation({
            query:({productId, idReview, updateReview}) =>({
                url: `/reviews/${productId}?idReview=${idReview}`,
                method:"PUT",
                body: updateReview
            }),
            invalidatesTags:["reviews"]
        }),
        removeReview:builder.mutation({
            query:({productId, idReview}) =>({
                url: `/reviews/${productId}?idReview=${idReview}`,
                method:"DELETE",
            }),
            invalidatesTags:["reviews"]
        }),
    })
})

export const {useGetAllReviewsQuery, useGetReviewByIdQuery, useAddReviewMutation, useEditReviewMutation, useRemoveReviewMutation}=reviewsApi