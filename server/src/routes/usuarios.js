const { Router } = require("express")
const { getUsuarioId } = require("../handlers/usuariosHandlers")
const postNewUser = require("../handlers/postUserHandler")

const routerUsuario = Router()

routerUsuario.get("/users", getUsuarioId)
routerUsuario.post("/create", postNewUser);

module.exports = routerUsuario;
