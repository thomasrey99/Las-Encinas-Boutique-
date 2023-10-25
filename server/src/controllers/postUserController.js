const { User } = require("../db");

//!el usuario se crea si el email no existe en la db
const createNewUser = async (data) => {
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

module.exports = createNewUser;