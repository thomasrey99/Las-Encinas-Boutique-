const {Router}=require("express")
const {getAllPaymentsHandler, getPaymentByIdHandler}=require("../handlers/paymentsHandler")
const paymentsRouter=Router()

paymentsRouter.get("/", getAllPaymentsHandler)
paymentsRouter.get("/:id_payment", getPaymentByIdHandler)

module.exports=paymentsRouter