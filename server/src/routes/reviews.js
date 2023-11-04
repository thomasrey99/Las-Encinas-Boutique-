const { Router } = require("express");

const { getProductReviews,
        getProductReviewsById,
        postProductReview,
        editProductReview,
        removeproductReview
      } = require("../handlers/reviewsHandler");

const reviewsRouter = Router()


reviewsRouter.get("/:productId", getProductReviews)
              .get("/:productId", getProductReviewsById)
              .post("/:productId" , postProductReview)
              .put("/:productId" , editProductReview)
              .delete("/:productId" , removeproductReview)

module.exports= reviewsRouter;
