const { Router } = require("express")
const { getUserId } = require("../handlers/usuariosHandlers")
const postNewUser = require("../handlers/postUserHandler")

const routerUsers = Router()

routerUsers.get("/users", getUserId)
routerUsers.post("/create", postNewUser);

module.exports = routerUsers;