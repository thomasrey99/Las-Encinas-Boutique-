const { User } = require("../db");

//!CONTROLLER QUE TRAE TODOS LOS USUARIOS
const getAllUsersController=async()=>{
    const users=await User.findAll()
    return users
}

//!CONTROLLER QUE TRAE UN USUARIO MEDIANTE UN ID ESPECIFICO
const getUserIdController = async (id) => {

    const user = User.findByPk(id);

    return user;
}

module.exports = {
    getUserIdController,
    getAllUsersController
};
