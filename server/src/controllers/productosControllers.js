const Product = require("../models/Product");


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

const allProductos = async () => {
    const resultado = await Product.findAll();
    return resultado

}

const postProductHandler = async (data)=>{
    const resultado = await Product.create(data)
    return resultado
}

module.exports = {
    productoQuery,
    productoId,
    allProductos,
    postProductHandler
};

