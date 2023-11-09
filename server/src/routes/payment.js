const {Router}=require("express")
const { createPaymentHandler } = require("../handlers/paymentsHandler")

const paymentsRouter=Router()

paymentsRouter.post("/", createPaymentHandler)

module.exports=paymentsRouter