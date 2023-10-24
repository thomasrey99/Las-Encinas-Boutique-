const { usuarioId } = require("../controllers/postUserController");

const getUsuarioId = async ( req, res) => {

   const { id } = req.params
   
   try {
        const result = await usuarioId(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message });
}

}

module.exports = {
    getUsuarioId
}