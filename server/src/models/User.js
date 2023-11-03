const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
    //Agregué un campo llamado uid para registrar el uid que viene de firebase
    //ademas cambié la propiedad allowNull a true para que solo los campos uid, email
    //sean obligatorios, ya que cuando te registrar con google por ejemplo solo es obligatorio
    //el email y password, además la password se guarda en firebase.
    
    dataBase.define(
        'User', {
        id_user: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        id:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
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
            defaultValue: false
        },
        payment_code:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt:false,
        updatedAt:false
    })
}