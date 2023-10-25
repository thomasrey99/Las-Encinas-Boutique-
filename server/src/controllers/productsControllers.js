const { Op } = require("sequelize");
const {Product}=require("../db")


const productoQuery = async (nombre) => {

    const productos = await Product.findAll();
    const resultado = productos.filter((p) =>
        p.nombre.toLowerCase().includes(nombre.toLowerCase())
    );

    return resultado;
}

const productoId = async (id) => {
    const productos = await Product.findAll();
    const resultado = productos.find((p) => p.id === id);

    return resultado; 
}

const allProducts = async (name) => {
    
    const response=await Product.findAll()

    if(name){
        const searchProduct= await Product.findAll({
            where:{
                name:{
                    [Op.iLike]:`%${name}%`
                }
            }
        })

        if(!searchProduct.length){
            return []
        }
        return searchProduct
    }

    return response
}

const postProductContoller = async (data)=>{
    const result= await Product.create(data)
    return result
}

module.exports = {
    productoQuery,
    productoId,
    allProducts,
    postProductContoller
};

