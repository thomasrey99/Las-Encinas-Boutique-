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

module.exports = {
    productoQuery,
    productoId,
    allProductos
};