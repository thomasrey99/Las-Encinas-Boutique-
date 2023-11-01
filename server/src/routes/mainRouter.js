const productsRouter=require("./products")
const usersRouter=require("./users")
const favoritesRouter=require("./favorites")
const commentsRouter=require("./comments")
const { Router } = require("express");
const mainRouter = Router()

mainRouter.use("/products", productsRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/favorites", favoritesRouter);
mainRouter.use("/comments", commentsRouter);

module.exports = mainRouter;