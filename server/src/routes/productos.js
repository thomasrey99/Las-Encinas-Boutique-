const { Router } = require("express");

const router = Router()

const { getProductoQuery, getProductoId, getAllProductos } = require("../handlers/productosHandlers");

router.get("/?name", getProductoQuery)
router.get("/:id", getProductoId)
router.get("/", getAllProductos)

module.exports = router;