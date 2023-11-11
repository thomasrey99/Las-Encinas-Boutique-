const {Router}=require("express")
const { createPaymentHandler, getAllRequestHandler } = require("../handlers/paymentsHandler")

const paymentsRouter=Router()

paymentsRouter.get("/", getAllRequestHandler)
paymentsRouter.post("/", createPaymentHandler)

module.exports=paymentsRouter