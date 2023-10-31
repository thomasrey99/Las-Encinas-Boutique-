const {Type}=require("../db")

const types=[
    {name:"Todos"},
    {name:"Chocolate blanco"},
    {name:"Chocolate con leche"},
    {name:"Chocolate semi- amargo"}
]
const fetchTypes=async()=>{
    try {
        await Type.bulkCreate(types, {ignoreDuplicates:true})
    } catch (error) {
        throw new Error(error)
    }
}

module.exports=fetchTypes

