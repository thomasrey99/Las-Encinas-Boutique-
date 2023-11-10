const {Request, User, products}=require("../db")

const getAllRequestController=async()=>{
    const response=await Request.findAll()
    return response
}

const createRequestController=async(data, id_user)=>{
    const newRequest=await Request.create(data)
    const user=await User.findByPk(id_user)
    if(user){
        await newRequest.setUser(user)
    }
}

module.exports={
    createRequestController,
    getAllRequestController
}