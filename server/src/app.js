const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes");

const server = express();

// Middlewares
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

// Configuración de las cabeceras CORS
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(router);

module.exports = server;
