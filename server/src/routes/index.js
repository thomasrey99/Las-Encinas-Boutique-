const { Router } = require("express");
const routerProductos = require("./productos");
const routerUsuario = require("./usuarios")

const router = Router()

router.use("/productos", routerProductos);
router.use("/usuarios", routerUsuario);

module.exports = router;