const {Type}=require("../db")

const getTypeController=async()=>{
    const types=await Type.findAll()
    return types
}

module.exports={
    getTypeController
}