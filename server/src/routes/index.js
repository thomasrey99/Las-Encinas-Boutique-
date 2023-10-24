const { Router } = require("express");
const routerProducts = require("./products");
const routerUsers = require("./users")

const router = Router()

router.use("/products", routerProducts);
router.use("/users", routerUsers);

module.exports = router;