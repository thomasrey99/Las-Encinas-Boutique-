const { Op } = require("sequelize");
const {Product}=require("../db")

//!TRAE UN PRODUCTO MEDIANTE UN ID ESPECIFICO

const productId = async (id) => {

    const product = await Product.findByPk(id)
    
    if(product){
        return product
    }else{
        return{message:"there are no products with that id"}
    }

}

//!RECIBE POR PARAMETRO "NAME", SI NAME EXISTE (SE ESTA REALIZANDO UNA BUSQUEDA) DEVUELVE LOS PRODUCTOS QUE COINCIDEN CON EL NOMBRE, SI NO EXISTE "NAME", DEVUELVE TODOS LOS PRODUCTOS
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

//!CONTROLLER QUE CREA UN PRODUCTO
const postProductContoller = async (data)=>{
    const result= await Product.findOrCreate({
        where:{
            name:data.name
        },
        defaults:data
    })
    return result
}

//CONTROLLER QUE MODIFICA O ACTUALIZA UN PRODUCTO
const putProductContoller = async (id, data) => {

    const findProductById = await Product.findByPk(id);
    const updatedProduct = await findProductById.update(data);

    return updatedProduct;
}

const deleteProductContoller = async(id) =>{
    const findProductById = await Product.findByPk(id);
    await findProductById.destroy();

    return findProductById;

}

module.exports = {
    productId,
    allProducts,
    postProductContoller,
    putProductContoller,
    deleteProductContoller
};
