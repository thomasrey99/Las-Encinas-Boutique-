const axios=require("axios")

const createPaymentHandler=async(req, res)=>{

    const {data}=await req.json

    const id=data?.id

    try {
        if(id!==undefined){

            const paymentInfo=(axios(`https://api.mercadopago.com/v1/payments/${id}`)).data

            console.log("informacion del pago", paymentInfo)

            return res.status(200).json(paymentInfo)
        }
    } catch (error) {
        return res.status(400).json(error)
    }
}

module.exports={
    createPaymentHandler
}