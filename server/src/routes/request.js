const {Router}=require("express")
const { createRequestHandler, getAllRequestHandler } = require("../handlers/requestHandler")

const requestRouter=Router()

requestRouter.get("/", getAllRequestHandler)
requestRouter.post("/", createRequestHandler)

module.exports=requestRouter