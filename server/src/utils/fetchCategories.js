const {Category}=require("../db")

const categories=[
    {name:"Todas"},
    {name:"Alfajores"},
    {name:"Chocolate en rama"},
    {name:"Bocaditos"},
    {name:"Chocolate en barra"}, 
    {name:"Volcáncito"},
    {name:"Marroc"},
    {name:"Huevos de pascua"},
    {name:"Oreo"},
    {name:"Brownie"}
]

const fetchCategories=async()=>{

    try {
        await Category.bulkCreate(categories, {ignoreDuplicates:true})
    } catch (error) {
        throw new Error(error)
    }

}

module.exports=fetchCategories