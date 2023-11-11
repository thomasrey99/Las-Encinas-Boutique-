const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
    dataBase.define('Request', {
        id_request: {
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
<<<<<<< HEAD
        // uid: {
        //     type: DataTypes.UUID,
        //     allowNull: false,
        // },
        id_send: {
            type: DataTypes.UUID,
            allowNull: false,
=======
        products:{
            type:DataTypes.JSON,
            allowNull:false
>>>>>>> develop
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue:"pending"
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_id:{
            type:DataTypes.STRING,
            allowNull:false
        },
        total_amount:{
            type: DataTypes.NUMERIC,
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt:false,
        updatedAt:false
    }

    )
}