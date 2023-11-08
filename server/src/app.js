const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const router = require("./routes/mainRouter")
const mercadoPago = require("mercadopago")

//!instanciando el server

const server=express()

//!middlewares

server.use(cors())

server.use(morgan("dev"))

server.use(express.json())


//!configuracion de la cabecera

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

server.use(router)

module.exports=server