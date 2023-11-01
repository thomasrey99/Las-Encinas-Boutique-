const { Router } = require("express");

const { putProduct,
        getProductById, 
        getAllProducts, 
        postProduct,
        deleteProduct,
        addFavProduct,
        removeFavProduct,
        getFavProducts
      } = require("../handlers/productsHandlers");

const productsRouter = Router()


productsRouter.get("/", getAllProducts)
              .get("/:id", getProductById)
              .post("/", postProduct )
              .put("/:id", putProduct)
              .delete("/:id", deleteProduct)
              .get("/favorites", getFavProducts)
              .post("/favorites/:productId" , addFavProduct)
              .delete("/favorites/:productId" , removeFavProduct)

module.exports= productsRouter;
