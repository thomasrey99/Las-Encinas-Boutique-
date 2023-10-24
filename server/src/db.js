require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Productos`, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);
const modelDefiners = [];

// Cambia la ruta a tu directorio de modelos
const modelsDir = path.join(__dirname, 'models');

fs.readdirSync(modelsDir)
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    // Importa los modelos desde la carpeta de modelos
    const model = require(path.join(modelsDir, file));
    modelDefiners.push(model);
  });

modelDefiners.forEach(model => model(sequelize));

const entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Corrige la relación "belongsToMany"
const { User, Product, Request } = sequelize.models;

User.belongsToMany( Request, {through:'user_request'})
Product.belongsToMany(Request , { through: 'product_request' });
Request.belongsToMany(Product, { through: 'request_product' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};