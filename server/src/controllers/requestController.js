const {Request, User, Product, Payment}=require("../db")

const getAllRequestController=async()=>{
    const response=await Request.findAll()
    return response
}

const createRequestController=async(data, id_user)=>{

    const newRequest=await Request.create(data)
    const user=await User.findByPk(id_user)
    if(user){
        await newRequest.setUser(user)
        await Promise.all(
            data.products.map(async ({ id }) => {
                const product = await Product.findByPk(id);
                console.log("producto", product)
                if (product) {
                    await product.addUser(user);
                }
            })
        );

        const datapayment={
            user_name:user.name,
            user_email:user.email,
            id_paymentMp:data.payment_id,
            total_amount:data.total_amount
        }
        console.log("datos del pago: ", datapayment)
        const newPayment= await Payment.create(datapayment)
        
        await newPayment.setUser(user)
    }
    return newRequest
}

module.exports={
    createRequestController,
    getAllRequestController
}