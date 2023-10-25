const { Router } = require("express");

const { getProductoQuery, getProductoId, getAllProducts, postProduct } = require("../handlers/productsHandlers");

const productsRouter = Router()


productsRouter.get("/", getAllProducts)
              .get("/:id", getProductoId)
              .post("/", postProduct )

module.exports= productsRouter;
