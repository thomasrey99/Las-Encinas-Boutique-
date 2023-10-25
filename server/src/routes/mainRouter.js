const { Router } = require("express");

import productsRouter from "./products";
import usersRouter from "./users";

const router = Router()

router.use("/products", productsRouter);
router.use("/users", usersRouter);

module.exports = mainRouter;