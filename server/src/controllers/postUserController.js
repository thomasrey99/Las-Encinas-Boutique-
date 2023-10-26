const { User } = require("../db");

const createNewUser = async (name, lastName, email, password) => {
    try {
        const newUser = await User.create({
            name,
            lastName,
            email,
            password,
        });
        return newUser;
    } catch (error) {
        throw error;
    }
};

module.exports = createNewUser;

