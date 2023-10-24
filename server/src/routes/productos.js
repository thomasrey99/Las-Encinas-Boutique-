const { Router } = require("express");

const router = Router();

const { getProductoQuery, getProductoId, getAllProductos } = require("../handlers/productosHandlers");

// Definir rutas separadas para diferentes acciones

router.get("/:id", getProductoId); // Obtener un producto por ID
router.get("/query/:name", getProductoQuery);
router.get("/", getAllProductos); // Obtener todos los productos

module.exports = router;