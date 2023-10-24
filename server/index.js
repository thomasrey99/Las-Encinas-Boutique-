const server=require("./src/app")
require("dotenv").config()
const { conn } = require('./src/db.js');

const {PORT}=process.env


//!inicializando el servidor y sincronizando la base de datos

conn.sync({ alter: true }).then(() => {
    server.listen(PORT, ()=>{
        console.log(`Servidor de las Encinas boutique escuchando en el puerto ${PORT}!💥`)
    })
}).catch(error => console.log(error.message)) 
 
