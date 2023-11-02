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

mercadoPago.configure({
	access_token: "TEST-2626823225193588-110214-95bc5c17a63c6e1c28a7b8cd85a4f024-485385647",
});

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