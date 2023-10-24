const { DataTypes } = require('sequelize');z
module.exports = (sequelize) => {

  sequelize.define('Categoria', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  });
};