const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
    dataBase.define(
        'User', {
        id: {
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
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt:false,
        updatedAt:false
    })
}