const { DataTypes } = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Review', {
        
        id_review: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },
        avatar: {
            type: DataTypes.STRING,
            defaultValue: "https://img.freepik.com/vector-premium/cacao-come-mascota-chocolate-vector-dibujos-animados_193274-12227.jpg",
            allowNull: true,
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