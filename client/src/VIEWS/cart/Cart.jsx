import { useEffect, useState } from "react"
import style from "./Cart.module.css"
import {useSelector} from "react-redux"
export const Cart = () => {

    const cart=useSelector((state)=>state.cart)

    const [cartData, setCartData]=useState({
        products:cart.products,
        product_quantity:cart.product_quantity,
        total_price:cart.total_price
    })

  return (
    <section className={style.CartCon}>
        <div className={style.productsCont}>

        </div>
        <aside className={style.resumeCont}>
            <div className={style.resumeTitle}>
                <h3>Resumen de compra</h3>
            </div>
            <div className={style.payment}>
                <div className={style.paymentInfo}>
                    <p className={style.total}>TOTAL:</p>
                    <p className={style.totalPrice}>${cartData.total_price}</p>
                </div>  
                <div className={style.paymentButton}>

                </div>
            </div>
        </aside>
    </section>
  )
}

export default Cart
