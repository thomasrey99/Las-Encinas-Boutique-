const { DataTypes } = require('sequelize');

module.exports = (dataBase) => {
    dataBase.define('Review', {
<<<<<<< HEAD
        id_review: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
        },
        avatar: {
        type: DataTypes.STRING,
        defaultValue: "https://img.freepik.com/vector-premium/cacao-come-mascota-chocolate-vector-dibujos-animados_193274-12227.jpg",
        allowNull: true,
=======
        
        id_review: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
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
>>>>>>> 5f16f06575f8a08ad02464a08bf1b60c034534c9
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