import { useEffect, useState } from "react"
import style from "./Cart.module.css"
import {useSelector, useDispatch} from "react-redux"
import CardsCart from "../../Components/cardsCart/cardsCart"
import { deleteProductCart, decrementQuantity, incrementQuantity } from "../../libs/redux/features/CartSlice"
import { usePutCartMutation } from "../../libs/redux/services/CartApi"

export const Cart = () => {

    const dispatch=useDispatch()

    const cart=useSelector((state)=>state.cart)

    const id_cart=useSelector((state)=>state.user.userCartId)

    const [mutate]=usePutCartMutation()

    const [cartData, setCartData]=useState({
        products:cart.products,
        product_quantity:cart.product_quantity,
        total_price:cart.total_price
    })

    const handleDelete=async(data)=>{
        dispatch(deleteProductCart(data))
    }

    const handleDecrement=(name)=>{
        dispatch(decrementQuantity(name))
    }
    const handleIncrement=(name)=>{
        dispatch(incrementQuantity(name))
    }

    useEffect(()=>{
        setCartData(cart)
        mutate({dataUpdate: cart, id_cart: id_cart})
    }, [cart])

  return (
    <section className={style.CartCon}>
        <div className={style.productsCont}>
            {
                cartData?cartData.products.length===0 ? <p>Carrito vacio</p>
                :
                cartData?.products.map(({name, image, price, quantity}, i)=>{
                    return (
                        <CardsCart key={i} name={name} image={image} price={price} quantity={quantity} onDelete={handleDelete} decrement={handleDecrement} increment={handleIncrement}/>
                    )
                })
                :
                ""
            }
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
