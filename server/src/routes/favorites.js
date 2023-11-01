const { Router } = require("express");

const { getFavProducts,
        getFavProductsById,
        addFavProduct,
        removeFavProduct,
      } = require("../handlers/favoritesHandlers");

const favoritesRouter = Router()


favoritesRouter.get("/", getFavProducts)
              .get("/:productId", getFavProductsById)
              .post("/:productId" , addFavProduct)
              .delete("/:productId" , removeFavProduct)

module.exports= favoritesRouter;
