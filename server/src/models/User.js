const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
    //Agregué un campo llamado uid para registrar el uid que viene de firebase
    //ademas cambié la propiedad allowNull a true para que solo los campos uid, email
    //sean obligatorios, ya que cuando te registrar con google por ejemplo solo es obligatorio
    //el email y password, además la password se guarda en firebase.
    
    dataBase.define(
        'User', {
<<<<<<< HEAD
        uid:{
            type:DataTypes.STRING, 
            primaryKey: true,
=======
        id_user: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        id:{
            type:DataTypes.STRING,
            allowNull: false,
>>>>>>> 928b776eacc410751dabfa63bfdacf26d17b7b14
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
<<<<<<< HEAD
       
=======
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.NUMERIC
        },
>>>>>>> 928b776eacc410751dabfa63bfdacf26d17b7b14
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