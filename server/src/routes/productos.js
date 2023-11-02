const { Router } = require("express");

const routerProductos = Router()

const { getProductoQuery, getProductoId, getAllProductos } = require("../handlers/productosHandlers");

routerProductos.get("/", getAllProductos)
routerProductos.get("/:id", getProductoId)
routerProductos.get("/search", getProductoQuery)

module.exports = routerProductos;