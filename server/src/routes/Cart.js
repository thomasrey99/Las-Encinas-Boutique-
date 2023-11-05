const {Router}=require("express")
const {updateCartHandler, getCartByIdHandler, createPreference}=require("../handlers/cartHandlers")
const cartRoutes=Router()

cartRoutes.put("/:id_cart", updateCartHandler)
          .get("/:id_cart", getCartByIdHandler)
          .post("/create_preference", createPreference)
          
module.exports=cartRoutes