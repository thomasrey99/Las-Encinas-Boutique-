const { Router } = require("express");
const categoryRouter = require("./categories");
const productsRouter=require("./products");
const typesRouter = require("./types");
const usersRouter=require("./users")
const cartRoutes=require("./Cart")
const favoritesRouter=require("./favorites")
const mainRouter = Router()

mainRouter.use("/products", productsRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/categories",categoryRouter);
mainRouter.use("/types", typesRouter)
mainRouter.use("/cart", cartRoutes)
mainRouter.use("/favorites", favoritesRouter);

module.exports = mainRouter;

