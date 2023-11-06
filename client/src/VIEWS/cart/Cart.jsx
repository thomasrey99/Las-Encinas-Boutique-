import { useEffect, useState } from "react"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import style from "./Cart.module.css"
import {useSelector, useDispatch} from "react-redux"
import CardsCart from "../../Components/cardsCart/cardsCart"
import { deleteProductCart, decrementQuantity, incrementQuantity, cartSlice } from "../../libs/redux/features/CartSlice"
import { usePutCartMutation } from "../../libs/redux/services/CartApi"
import axios from "axios"

export const Cart = () => {

    initMercadoPago("TEST-d4fe7a19-dc73-4789-9253-4f723e555e54")

    const dispatch=useDispatch()

    const cart=useSelector((state)=>state.cart)

    const id_cart=useSelector((state)=>state.user.userCartId)

    const [mutate]=usePutCartMutation()

    const [preferenceId, setPreferenceId]=useState("")

    const [cartData, setCartData]=useState({
        products:cart.products,
        product_quantity:cart.product_quantity,
        total_price:cart.total_price
    })
    const [isBuy, setIsBuy]=useState(false)

    const createPreference=async()=>{
        let arrayDescription=[]
        let description=""
        if(cart.product_quantity>0){
            cart.products.forEach(({name, quantity})=>{
                arrayDescription.push(`${name} x ${quantity}`)
            })
            description=arrayDescription.join(", ")
        }

        try {
            const response=await axios.post("https://las-encinas-boutique-server.onrender.com/products/create_preference", {
                description: description,
                price:cart.total_price,
                quantity:cart.product_quantity
            })
            const {id}=response.data
            return id
        } catch (error) {
            throw new Error(error)
        }
    }
    const handleBuy= async()=>{

        setIsBuy(true)
        
        const id=await createPreference()

        if(id){
            setPreferenceId(id)
        }
        
    }
    const handleCancel=()=>{
        setIsBuy(false)
        setPreferenceId("")
    }
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
        if(isBuy===true){
            handleBuy()
        }
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
                    <div className={style.itemsCont}>
                        <ul className={style.listItems}>
                            {
                                cart.products?.map(({name, quantity, price}, index)=>{
                                    return (
                                        <li key={index} className={style.item}>
                                            <p>{name}</p>
                                            <p>{price} x {quantity}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={style.priceCont}>
                        <p className={style.total}>TOTAL:</p>
                        <p className={style.totalPrice}>${cartData.total_price}</p>
                    </div>
                </div>  
                <div className={style.paymentButton}>
                    {isBuy===false&&<button className={style.buyButton} disabled={cart.product_quantity===0} onClick={handleBuy}>Comprar</button>}
                    {isBuy===true&&<button className={style.buyButton} onClick={handleCancel}>Cancelar</button>}
                </div>
            </div>
            {preferenceId && <Wallet initialization={{preferenceId}} />}
        </aside>
    </section>
  )
}

export default Cart
