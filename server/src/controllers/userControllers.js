const { Usuarios } = require("../db");
const axios = require("axios");

const userId = async (id) => {
    const usuario = Usuarios.findAll();
    const resultado = usuario.find((p) => p.id === id);

    return resultado;
}

module.exports = {
    userId
};
