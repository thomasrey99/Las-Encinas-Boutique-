const {Request, user, products}=require("../db")
const {createRequestController, getAllRequestController}=require("../controllers/paymentController")

const getAllRequestHandler=async(req, res)=>{
    try {
        const response=await getAllRequestController()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json(error)
    }
}
const createPaymentHandler=async(req, res)=>{

    const {id_user, products, address, payment_id, total_amount }=req.body

    try {
        const existRequest=await Request.findOne({
            where:{
                payment_id:payment_id
            }
        })
        if(existRequest){
            return res.status(204).json({message:"ya existe una request con este id"})
        }else{
            const date=new Date()

            const data={
                products:products,
                address:address,
                payment_id:payment_id,
                total_amount:total_amount,
                date:date
            }
            const response=await createRequestController(data, id_user)

            return res.status(201).json(response)
        }

    } catch (error) {

        return res.status(400).json(error)

    }
}

module.exports={
    createPaymentHandler,
    getAllRequestHandler
}