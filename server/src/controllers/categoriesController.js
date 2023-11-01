const {Category}=require("../db")
const getCategoriesController=async()=>{
    const categories= await Category.findAll()
    return categories
}

module.exports={
    getCategoriesController
}