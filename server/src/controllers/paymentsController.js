const {Payment}=require("../db")
const getAllPaymentsController=async()=>{
    const response=await Payment.findAll()
    return response
}

const getPaymentByIdController=async(id_payment)=>{
    const response=await Payment.findByPk(id_payment)
    return response
}

module.exports={
    getAllPaymentsController,
    getPaymentByIdController
}