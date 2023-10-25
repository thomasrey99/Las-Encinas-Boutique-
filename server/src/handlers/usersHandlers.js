const { getUserIdController, getAllUsersController } = require("../controllers/usersControllers");


//!HANDLER QUE MANEJA LA PETICION GET A /USERS, PARA TRAER TODOS LOS USUARIOS (SOLO LA VA A UTILIAR EL PERFIL DE ADMIN)
const getAllUsers=async (req, res)=>{
    try {
        const result=await getAllUsersController()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({message:error})
    }
}

//!HANDLER QUE MANEJA LA PETICION GET A /USERS/:ID PARA TRAER UN USUARIO MEDIANTE UN ID ESPECIFICO
const getUserById = async ( req, res) => {

   const { id } = req.params
   
   try {
        const result = await getUserIdController(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message });
}

}

module.exports = { getUserById, getAllUsers }