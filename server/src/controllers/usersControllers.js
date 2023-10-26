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

//!el usuario se crea si el email no existe en la db
const createNewUserController = async (data) => {
    try {
        const newUser = await User.findOrCreate({
            where:{
                email:data.email
            },
            defaults:data
        });
        return newUser;
    } catch(error){
        throw error;
    }
};

//CONTROLLER QUE MODIFICA O ACTUALIZA UN USER
const putUserController = async (id, data) => {

    const findUserById = await User.findByPk(id);
    const updatedUser = await findUserById.update(data);

    return updatedUser;
}

const deleteUserController = async(id) =>{
    const findUserById = await User.findByPk(id);
    await findUserById.destroy();

    return findUserById;

}



module.exports = {
    getUserIdController,
    getAllUsersController,
    createNewUserController,
    putUserController,
    deleteUserController
};
