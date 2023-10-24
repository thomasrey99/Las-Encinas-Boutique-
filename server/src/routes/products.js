const { Router } = require("express");

const routerProducts = Router()

const { searchName, searchID, searchAll } = require("../handlers/productosHandlers");

routerProducts.get("/", searchAll);
routerProducts.get("/:id", searchID);
routerProducts.get("/search", searchName);


module.exports = routerProducts;