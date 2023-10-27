const { DataTypes } = require('sequelize');


module.exports = (dataBase) => {

    dataBase.define('Category', {
        id_category: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        id_product: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
}