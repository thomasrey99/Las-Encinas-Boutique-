const { Usuarios } = require("../db");
const axios = require("axios");

const usuarioId = async (id) => {
    const usuario = Usuarios.findAll();
    const resultado = usuario.find((p) => p.id === id);

    return resultado;
}

module.exports = {
    usuarioId
};