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
const allProducts = async (name, minPrice, maxPrice, category) => {
    
    //?coincidencias de busqueda
    const whereClause={}

    //?verifica si llega por query name, category, minPrice y maxPrice y va agregando clausulas al whereClause
    

    if(name){
        whereClause.name={
            [Op.iLike]:`%${name}%`
        }
    }

    if(category){
        whereClause.category=category
    }

    if(minPrice && maxPrice){
        whereClause.price={
            [Op.between]:[minPrice, maxPrice]
        }
    }else if(minPrice){
        whereClause.price={
            [Op.gte]:minPrice
        }
    }else if(maxPrice){
        whereClause.price={
            [Op.lte]:maxPrice
        }
    }

    //?verifica si hay parametros de filtrado, de lo contrario devuelve todos los productos
    if(Object.keys(whereClause).length===0){
        const response= await Product.findAll()
        return response
    }else{
        const response=await Product.findAll({
            where:whereClause
        })
        return response
    }
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

