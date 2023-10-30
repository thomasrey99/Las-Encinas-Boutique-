const placeOrder = async(req, res) =>{
    try {
        //Generar orden de compra a mercado pago con la info que viene de body
        res.status(200).send("Ya compré")
    } catch (error) {
       res.status(400).json({error: error.message})   
    }

}

module.exports = {placeOrder}