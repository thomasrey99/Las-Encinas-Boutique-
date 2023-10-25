const { productoQuery,
        productoId,
        allProductos,
        postProductController
        } = require("../controllers/productosControllers");

const getProductoQuery = async (req, res) => {
    
    let { name } = req.query

    name = name.toLowerCase()

    try {
        const result = await productoQuery(name)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const getProductoId  = async ( req, res ) => {

   const { id } = req.params
   
   try {
        const result = await productoId(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }

}

const getAllProductos = async ( req, res ) => {
    
    try {
        const result = await allProductos()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }

}

const postProduct = async(req, res) =>{
    const {image, name, price, description, raiting, category} = req.body;
    try {
        const result = await postProductController(image, name, price, description, raiting, category)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    getProductoQuery,
    getProductoId,
    getAllProductos,
    postProduct
}
