const { Router } = require("express")
const { getUsuarioId } = require("../handlers/usuariosHandlers")
const postNewUser = require("../handlers/postUserHandler")

const usersRouter = Router()

usersRouter.get("/", getUsuarioId)
usersRouter.post("/", postNewUser);

module.exports = usersRouter;
