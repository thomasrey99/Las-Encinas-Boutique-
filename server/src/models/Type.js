const { DataTypes } = require('sequelize');


module.exports = (dataBase) => {

    dataBase.define('Type', {
        id_type: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        id_product: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        id_category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    })
}