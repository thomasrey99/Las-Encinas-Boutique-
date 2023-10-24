const { Router } = require("express");

const routerProductos = Router()

const { searchName, searchID, searchAll } = require("../handlers/productosHandlers");

routerProductos.get("/", searchAll)
routerProductos.get("/:id", searchID)
routerProductos.get("/search", searchName)

module.exports = routerProductos;