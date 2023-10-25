const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Request', {
        id: {
            type: DataTypes.UUID,

            defaultValue: DataTypes.UUIDV4,

            primaryKey: true,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }

    )
}