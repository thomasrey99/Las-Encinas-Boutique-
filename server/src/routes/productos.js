const { Router } = require("express");

const router = Router()

const { getProductoQuery, getProductoId, getAllProductos, postProduct } = require("../handlers/productosHandlers");

router.get("/?name", getProductoQuery)
router.get("/:id", getProductoId)
router.get("/", getAllProductos)

router.post("/", postProduct )

module.exports = router
