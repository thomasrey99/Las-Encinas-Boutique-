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

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Productos`, {
  logging: false,
  native: false,
});



// Corrige la relación "belongsToMany"
const { User, Product, Request } = sequelize.models;

User.belongsToMany( Request, {through:'user_request'})
Product.belongsToMany(Request , { through: 'product_request' });
Request.belongsToMany(Product, { through: 'request_product' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
