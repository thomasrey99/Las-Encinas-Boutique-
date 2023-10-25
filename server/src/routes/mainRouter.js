const productsRouter=require("./products")
const usersRouter=require("./users")
const { Router } = require("express");
const mainRouter = Router()

mainRouter.use("/products", productsRouter);
mainRouter.use("/users", usersRouter);

module.exports = mainRouter;