const { Router } = require("express");
const categoryRouter = require("./categories");
const productsRouter=require("./products");
const typesRouter = require("./types");
const usersRouter=require("./users")
const cartRoutes=require("./Cart")
const favoritesRouter=require("./favorites")
<<<<<<< HEAD
const reviewsRouter=require("./reviews")
=======
const reviewsRouter=require("./reviews");
const paymentsRouter = require("./payment");

>>>>>>> develop
const mainRouter = Router()

mainRouter.use("/products", productsRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/categories",categoryRouter);
mainRouter.use("/types", typesRouter)
mainRouter.use("/cart", cartRoutes)
mainRouter.use("/favorites", favoritesRouter);
mainRouter.use("/reviews", reviewsRouter);
<<<<<<< HEAD
=======
mainRouter.use("/payments", paymentsRouter)
>>>>>>> develop

module.exports = mainRouter;

