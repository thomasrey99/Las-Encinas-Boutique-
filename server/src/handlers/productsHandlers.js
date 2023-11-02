const mercadoPago = require("mercadopago")

const { productId, 
    allProducts, 
    postProductContoller, 
    putProductContoller,
    deleteProductContoller
  } = require("../controllers/productsControllers");

//!HANDLER QUE MANEJA LA PETICION GET POR ID DE /USERS/:ID
const getProductById  = async ( req, res ) => {

const { id } = req.params

try {
    const result = await productId(id)
    res.status(200).json(result)
} catch (error) {
    res.status(400).json({ error: error.message });
}

}

//!HANDLER QUE MANEJA LA PETICION GET DE /PRODUCTS, TRAE NAME, CATEGORY, MINPRICE Y MAXPRICE POR QUERY PARA POSIBLES FILTROS
const getAllProducts = async ( req, res ) => {
    const {name, minPrice, maxPrice, category, type, order}=req.query
    try {
        
        const result = await allProducts(name, minPrice, maxPrice, category,type, order)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

}

//!HANDLER QUE MANEJA LA PETICION POST A /PRODUCTS
const postProduct = async(req, res) =>{
    const {image, name, price, description, raiting, category, type} = req.body;
    try {
        const data={
            image:image,
            name:name,
            price:Number(price),
            description:description,
            raiting:raiting,
            category:category,
            type:type
        }
        const result = await postProductContoller(data)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//HANDLER QUE MANEJA LA PETICIÓN PUT A /Products
const putProduct = async(req, res) =>{
const { id } = req.params;
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
    const result = await putProductContoller(id, data)
    res.status(201).json(result)
} catch (error) {
    res.status(400).json({ error: error.message });
}
}

//Handler que maneja la petición delete a /Products
const deleteProduct = async(req, res) =>{
const { id } = req.params;

try {
    const result = await deleteProductContoller(id)
    res.status(201).json(result)
} catch (error) {
    res.status(400).json({ error: error.message });
}
}

const createPreference = (req, res) => {
    let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:5173/home",
			"failure": "http://localhost:5173/home",
			"pending": ""
		},
		auto_return: "approved",
	};

    mercadoPago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		})
        .catch(function (error) {
			console.log(error);
		});
};

module.exports = {
    getProductById,
    getAllProducts,
    postProduct,
    putProduct,
    deleteProduct,
    createPreference
}