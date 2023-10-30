const { Router } = require('express')
const {placeOrder} = require("../handlers/index")

const mainRouter = Router()

mainRouter.post("/order", placeOrder)
          .get("/success") 

module.exports = mainRouter;