const { Router } = require("express")
const { getUserId } = require("../handlers/usuariosHandlers")
const postNewUser = require("../handlers/postUserHandler")

const routerUsuario = Router()

routerUsuario.get("/users", getUserId)
routerUsuario.post("/create", postNewUser);

module.exports = routerUsuario;