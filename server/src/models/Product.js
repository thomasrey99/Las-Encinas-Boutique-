const { DataTypes } = require('sequelize');


module.exports = (dataBase) => {

  dataBase.define('Product', {
    id_product: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    raiting: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock_quantity: {
      type:DataTypes.INTEGER,
      allowNull:true,
    }
  },
  {
      freezeTableName: true,
      timestamps: false,
      createdAt:false,
      updatedAt:false
  });
};
