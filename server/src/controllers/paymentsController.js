const {Payment}=require("../db")
const getAllPaymentsController=async()=>{
    const response=await Payment.findAll()
    return response
}

const getPaymentByIdController=async(id_payment)=>{
    const response=await Payment.findByPk(id_payment)
    return response
}

const deletePaymentController=async(id_payment)=>{

    const paymentDelete=await Payment.findByPk(id_payment)

    await paymentDelete.destroy()

    return paymentDelete

}

module.exports={
    getAllPaymentsController,
    getPaymentByIdController,
    deletePaymentController
}