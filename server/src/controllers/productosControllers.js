
const { Product } = require("../db");
const axios = require("axios");

const productoQuery = async (name) => {
    
    let productos = await Product.findAll();
    console.log("Este es el resultado:",productos)
    let resultado = productos.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
    );

    return resultado;
}

const productoId = async (id) => {
    let productos = await Product.findAll();
    console.log("Este es el resultado:",productos);
    let resultado = productos.find((p) => p.id === id);

    return resultado; 
}

const allProductos = async () => {
    
    const resultado = await Product.findAll();
    return resultado

}

const postProductController = async (image, name, price, description, raiting, category)=>{
    const resultado = await Product.create({image, name, price, description, raiting, category});
    return resultado
}

module.exports = { 
    productoQuery,
    productoId,
    allProductos,
    postProductController
};


