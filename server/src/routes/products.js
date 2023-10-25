const { Router } = require("express");

const { getProductoQuery, getProductById, getAllProducts, postProduct } = require("../handlers/productsHandlers");

const productsRouter = Router()


productsRouter.get("/", getAllProducts)
              .get("/:id", getProductById)
              .post("/", postProduct )

module.exports= productsRouter;
