import { useEffect, useState } from "react"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import style from "./Cart.module.css"
import {useSelector, useDispatch} from "react-redux"
import CardsCart from "../../Components/cardsCart/cardsCart"
import { deleteProductCart, decrementQuantity, incrementQuantity } from "../../libs/redux/features/CartSlice"
import { usePutCartMutation } from "../../libs/redux/services/CartApi"
<<<<<<< HEAD
import axios from "axios"
=======
import axios from "axios";
const URL_SERVER = import.meta.env.VITE_URL_SERVER; 


>>>>>>> develop

export const Cart = () => {

    initMercadoPago("TEST-d4fe7a19-dc73-4789-9253-4f723e555e54")


    const dispatch=useDispatch()

<<<<<<< HEAD
    const cart=useSelector((state)=>state.cart)

    const id_cart=useSelector((state)=>state.user.userCartId)

    const [mutate]=usePutCartMutation()


    const [preferenceId, setPreferenceId]=useState("")

    const [cartData, setCartData]=useState({
=======
    const cart = useSelector((state) => state.cart)

    const user=useSelector((state)=>state.user.userLog)

    const id_cart=useSelector((state)=>state.user.userCartId)


    const [mutate] = usePutCartMutation()

    const [preferenceId, setPreferenceId] = useState("")

    const [cartData, setCartData] = useState({
>>>>>>> develop
        products:cart.products,
        product_quantity:cart.product_quantity,
        total_price:cart.total_price
    })
<<<<<<< HEAD
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
                quantity:1
            })
            const {id}=response.data
            return id
=======

    const [isBuy, setIsBuy] = useState(false)

    const createPreference = async() => {
        let arrayDescription = []
        let description = ""
        if (cart.product_quantity>0) {
            cart.products.forEach(({name, quantity}) => {
                arrayDescription.push(`${name} x ${quantity}`)
            })
            description = arrayDescription.join(", ")
        }

        try {
            const response=await axios.post(`${URL_SERVER}/products/create_preference`, {
                id_user:user.uid,
                description: description,
                price:cart.total_price,
                quantity:1,
            })
            const {id} = response.data
            return id;
>>>>>>> develop
        } catch (error) {
            throw new Error(error)
        }
    }
<<<<<<< HEAD
    const handleBuy= async()=>{

        setIsBuy(true)
        
        const id=await createPreference()
=======
    const handleBuy = async() => {

        setIsBuy(true)
        
        const id =  await createPreference()
>>>>>>> develop

        if(id){
            setPreferenceId(id)
        }
        
    }
<<<<<<< HEAD
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
=======
    const handleCancel = () => {
        setIsBuy(false)
        setPreferenceId("")
    }
    const handleDelete = async (data) => {
        dispatch(deleteProductCart(data))
    }

    const handleDecrement = (name) => {
        dispatch(decrementQuantity(name))
    }
    const handleIncrement = (name) => {
        dispatch(incrementQuantity(name))
    }

    useEffect(() => {
        setCartData(cart)
        mutate({dataUpdate: cart, id_cart: id_cart})
        if(isBuy === true){
>>>>>>> develop
            handleBuy()
        }
    }, [cart])


<<<<<<< HEAD

=======
console.log("usuario desde el carrito", user)
>>>>>>> develop
  return (
    <section className={style.CartCon}>
        <div className={style.productsCont}>
            {
                cartData?cartData.products.length===0 ? <p>Carrito vacio</p>
                :
<<<<<<< HEAD
                cartData?.products.map(({name, image, price, quantity}, i)=>{
=======
                cartData?.products.map(({name, image, price, quantity}, i) => {
>>>>>>> develop
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
                <h3 className={style.title}>Resumen de compra</h3>
            </div>
            <div className={style.payment}>
                <div className={style.paymentInfo}>
                    <div className={style.itemsCont}>
                        <ul className={style.listItems}>
                            {
<<<<<<< HEAD
                                cart.products?.map(({name, quantity, price}, index)=>{
=======
                                cart.products?.map(({name, quantity, price}, index) => {
>>>>>>> develop
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
