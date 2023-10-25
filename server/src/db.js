require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_DIALECT,
  DB_PORT
} = process.env;

const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false,
  native: false,
});



// Corrige la relación "belongsToMany"
const { Productos, Categoria } = sequelize.models;

Productos.belongsToMany(Categoria, { through: 'ProductosCategoria' });
Categoria.belongsToMany(Productos, { through: 'ProductosCategoria' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
