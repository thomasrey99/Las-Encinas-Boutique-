const { Productos } = require("../db");
const axios = require("axios");

const getByName = async (nombre) => {

    const productos = Productos.findAll();
    const resultado = productos.filter((p) =>
        p.nombre.toLowerCase().includes(nombre.toLowerCase())
    );

    return resultado;
}

const getById = async (id) => {
    const productos = Productos.findAll();
    const resultado = productos.find((p) => p.id === id);

    return resultado;
}

const getAllInfo = async () => {
    
    const resultado = Productos.findAll();
    return resultado

}

module.exports = {
    getByName,
    getById,
    getAllInfo
};
