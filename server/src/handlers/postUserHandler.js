const createNewUser = require ("../controllers/postUserController")

const postNewUser = async (req, res) => {
    const { name, lastName, email, password } = req.body;
    if(
        !name ||
        !lastName ||
        !email ||
        !password 
    ) {
        return res.status(400)
        .json({error: "Todos los campos deben ser completados"})
    }
    try{
        const newUser = await createNewUser(
            name,
            lastName,
            email,
            password
        );
        res.status(200).json(newUser);
    } catch(error){
        res.status(400).json({error: error.message})
    }
}
module.exports =  postNewUser ;