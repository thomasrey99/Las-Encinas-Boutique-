const { Router } = require("express")
const { getUsuarioId } = require("../handlers/usuariosHandlers")
const postNewUser = require("../handlers/postUserHandler")

const router = Router()

router.get("/", getUsuarioId)
router.post("/", postNewUser);


router.get("/", getUsuarioId)

module.exports = router
