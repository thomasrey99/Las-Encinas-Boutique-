const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
    dataBase.define(
        'User', {
        id_user: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.NUMERIC
        },
        is_Admin:{
            type:DataTypes.BOOLEAN,
            default: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt:false,
        updatedAt:false
    })
}