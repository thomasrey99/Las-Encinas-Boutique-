const { Router } = require("express");

const router = Router()

const routerProductos = require("./productos");
const routerUsuario = require("./usuarios")

router.use("/productos", routerProductos)
router.use("/usuarios", routerUsuario)

module.export = router