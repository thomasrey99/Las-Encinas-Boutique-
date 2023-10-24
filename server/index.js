const server = require("./src/app")
const { conn } = require('./src/db.js');
require("dotenv").config()

const {PORT}=process.env


//!inicializando el servidor

conn.sync({ alter: true }).then(() => {
    server.listen(PORT, () => {
      console.log(`Servidor de las Encinas boutique escuchando en el puerto ${PORT}!💥`);
    })
    }).catch(error => console.error(error))