const { Sequelize } = require("sequelize");
const userModel=require("./models/User")
const productModel=require("./models/Product")
const requestModel=require("./models/Request")

require("dotenv").config();      


const {
  DB_USER,
  DB_PASSWORD, 
  DB_HOST,
  DB_NAME,
  DB_DIALECT,
  DB_PORT 
} = process.env; 

const dataBase=new Sequelize( 
  `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {logging:false}
)
userModel(dataBase)
productModel(dataBase)
requestModel(dataBase)

//!RELACIONES

const { User, Product, Request } = dataBase.models;

User.belongsToMany(Product, {through: 'user_product'})
Product.belongsToMany(User, {through: 'user_product'})

Product.belongsToMany(Request , { through: 'product_request' });
Request.belongsToMany(Product , { through: 'product_request' });


module.exports={
  ...dataBase.models,
  dataBase

}
