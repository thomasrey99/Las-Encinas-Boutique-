const { Op } = require("sequelize");
const {Product, User}=require("../db")

//CONTROLER QUE TRAE PRODUCTOS FAVORITOS
const getFavsController = async (userId) => {
    const user = await User.findByPk(userId);

    if (user) {
        const favorites = await user.getProducts();
        return favorites;
    }
}

//CONTROLER QUE TRAE PRODUCTO FAVORITO POR ID
const getFavByIdController = async (userId, productId) => {

        const user = await User.findByPk(userId);
        
        if (user) {
        const favorites = await user.getProducts();
        const product = favorites.find(favorite => favorite.id === productId);
        return product ? product : 'Producto no encontrado';
        } 
        else return 'Usuario no encontrado';
}

//CONTROLER QUE AGREGA UN PRODUCTO A FAVORITOS
const addFavController = async (userId, productId) => {
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);

    if (user && product) {
        await user.addProduct(product);
        return { message: 'Producto agregado a favoritos', product: product };
    }
}

//CONTROLER QUE ELIMINA UN PRODUCTO DE FAVORITOS
const removeFavController = async (userId, productId) => {
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);

    if (user && product) {
        await user.removeProduct(product);
        return { message: 'Producto removido de favoritos', product: product };
    }
}

module.exports = {
    getFavsController,
    getFavByIdController,
    addFavController,
    removeFavController,
};
