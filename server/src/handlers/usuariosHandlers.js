const { userId } = require("../controllers/userControllers");

const getUserId = async ( req, res) => {

   const { id } = req.params
   
   try {
        const result = await userId(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message });
}

}

module.exports = { getUserId }