import style from "./Cart.module.css"

export const Cart = () => {
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
                    <p className={style.totalPrice}>$199000</p>
                </div>  
                <div className={style.paymentButton}>

                </div>
            </div>
        </aside>
    </section>
  )
}

export default Cart
