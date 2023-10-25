const { Router } = require("express");

const { getProductoQuery, getProductoId, getAllProductos, postProduct } = require("../handlers/productosHandlers");

const productsRouter = Router()


productsRouter.get("/", getAllProductos)
              .get("/:id", getProductoId)
              .get("/search", getProductoQuery)
              .post("/", postProduct )

module.exports = productsRouter;
