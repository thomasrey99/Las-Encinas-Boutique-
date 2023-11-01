const { Router } = require("express");
const categoryRouter = require("./categories");
const productsRouter=require("./products");
const typesRouter = require("./types");
const usersRouter=require("./users")
const favoritesRouter=require("./favorites")
const commentsRouter=require("./comments")

const mainRouter = Router()

mainRouter.use("/products", productsRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/categories",categoryRouter);
mainRouter.use("/types", typesRouter)
mainRouter.use("/favorites", favoritesRouter);
mainRouter.use("/comments", commentsRouter);

module.exports = mainRouter;

