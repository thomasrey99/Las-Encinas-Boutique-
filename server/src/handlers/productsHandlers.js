const { productoQuery, productoId, allProducts, postProductContoller} = require("../controllers/productsControllers");

const getProductoQuery = async (req, res) => {
    
    let { nombre } = req.query

    nombre = nombre.toLowerCase()

    try {
        const result = await productoQuery(nombre)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getProductoId  = async ( req, res ) => {

   const { id } = req.params
   
   try {
        const result = await productoId(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

const getAllProducts = async ( req, res ) => {
    const {name}=req.query
    try {
        const result = await allProducts(name)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

}

const postProduct = async(req, res) =>{
    const {image, name, price, description, raiting, category} = req.body;
    try {
        const data={
            image:image,
            name:name,
            price:price,
            description:description,
            raiting:raiting,
            category:category
        }
        const result = await postProductContoller(data)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getProductoQuery,
    getProductoId,
    getAllProducts,
    postProduct
}