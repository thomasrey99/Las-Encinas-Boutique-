const { Productos } = require("../db");
const axios = require("axios");

const productoQuery = async (nombre) => {

    const productos = Productos.findAll();
    const resultado = productos.filter((p) =>
        p.nombre.toLowerCase().includes(nombre.toLowerCase())
    );

    return resultado;
}

const productoId = async (id) => {
    const productos = Productos.findAll();
    const resultado = productos.find((p) => p.id === id);

    return resultado; 
}

const allProductos = async () => {
    
    const resultado = Productos.findAll();
    return resultado

}

const createProduct = async (name, category, description, image, price, rating) => {

    try {
        const newProduct = await Productos.create({
            name, 
            category, 
            description, 
            image, 
            price, 
            rating
        });

        return newProduct;
    
    } catch (error) {
        throw error;
    }
}

module.exports = {
    productoQuery,
    productoId,
    allProductos,
    createProduct
};
