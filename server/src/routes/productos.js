const { Router } = require("express");
<<<<<<< HEAD
const router = Router()
=======

const routerProductos = Router()
>>>>>>> 14b31b407d989ce17ac250d35bf2eb193dc4b3dc

const { getProductoQuery, getProductoId, getAllProductos } = require("../handlers/productosHandlers");

routerProductos.get("/", getAllProductos)
routerProductos.get("/:id", getProductoId)
routerProductos.get("/search", getProductoQuery)

module.exports = routerProductos;