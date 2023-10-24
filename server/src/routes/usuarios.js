const { Router } = require("express")

const router = Router()

const { getUsuarioId } = require("../handlers/usuariosHandlers")

router.get("/", getUsuarioId)

module.exports = router;