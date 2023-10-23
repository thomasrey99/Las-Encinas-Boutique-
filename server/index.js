const server=require("./src/app")
require("dotenv").config()

const {PORT}=process.env


//!inicializando el servidor

server.listen(PORT, ()=>{
    console.log(`Servidor de las Encinas boutique escuchando en el puerto ${PORT}!💥`)
})
