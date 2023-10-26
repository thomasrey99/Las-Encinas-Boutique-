const { Router } = require("express");

const { putProduct,
        getProductById, 
        getAllProducts, 
        postProduct,
        deleteProduct
      } = require("../handlers/productsHandlers");

const productsRouter = Router()


productsRouter.get("/", getAllProducts)
              .get("/:id", getProductById)
              .post("/", postProduct )
              .put("/:id", putProduct)
              .delete("/:id", deleteProduct)

module.exports= productsRouter;
