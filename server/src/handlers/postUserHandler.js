const createNewUser = require ("../controllers/postUserController")

//!HANDLER QUE MANEJA LOS ERRORES Y PETICION DE POST /USER
const postNewUser = async (req, res) => {
    const { name, lastName, email, password, address } = req.body;
    if(
        !name ||
        !lastName ||
        !email ||
        !password ||
        !address
    ) {
        return res.status(400)
        .json({error: "Todos los campos deben ser completados"})
    }
    try{
        const data={
            name:name,
            last_name:lastName,
            email:email,
            password:password,
            address:address
        }

        const newUser = await createNewUser(data);

        res.status(201).json(newUser);
        
    } catch(error){
        res.status(400).json({error: error.message})
    }
}
module.exports =  postNewUser ;