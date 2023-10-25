const { Router } = require("express")
const { getUserById, getAllUsers} = require("../handlers/usersHandlers")
const postNewUser = require("../handlers/postUserHandler")

const usersRouter = Router()

usersRouter.get("/", getAllUsers)
           .get("/:id", getUserById)
           .post("/", postNewUser);

module.exports = usersRouter;
