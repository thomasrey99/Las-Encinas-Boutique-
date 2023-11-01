const { 
    getFavsController,
    getFavByIdController,
    addFavController,
    removeFavController,
  } = require("../controllers/favoritesControllers");


//-----------------------------------
// Handler GET /favortes
const getFavProducts = async () => {
const { userId } = req.body;

try {
    const result = await getFavsController(userId)
    res.status(201).json(result)
} catch (error) {
    res.status(400).json({ error: error.message });
}
}

// Handler GET /favortes/:productId
const getFavProductsById = async (req, res) => {
const { userId } = req.body;
const { productId } = req.params;

try {
    const product = await getFavByIdController(userId, productId);
    res.status(200).json(product);
} catch (error) {
    res.status(400).json({ error: error.message });
}
}


//Handler que maneja la petición POST a /products/favorites
const addFavProduct = async(req, res) =>{
const { userId } = req.body;
const { productId } = req.params;

try {
    const result = await addFavController(userId, productId)
    res.status(201).json(result)
} catch (error) {
    res.status(400).json({ error: error.message });
}
}


//Handler que maneja la petición DELETE a /products/favorites
const removeFavProduct = async(req, res) =>{
const { userId } = req.body;
const { productId } = req.params;

try {
    const result = await removeFavController(userId, productId)
    res.status(200).json(result)
} catch (error) {
    res.status(400).json({ error: error.message });
}
}

module.exports = {
getFavProducts,
getFavProductsById,
addFavProduct,
removeFavProduct,
}