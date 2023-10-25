const { Router } = require("express");

const routerProductos = Router()

const { getProductoQuery, getProductoId, getAllProductos, postProduct } = require("../handlers/productosHandlers");

routerProductos.get("/", getAllProductos)
routerProductos.get("/:id", getProductoId)
routerProductos.get("/search", getProductoQuery)

routerProductos.post("/create", postProduct)

module.exports = routerProductos;