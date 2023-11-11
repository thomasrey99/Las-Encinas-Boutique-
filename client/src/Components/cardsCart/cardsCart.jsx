import style from "./cardsCart.module.css"
const CardsCart = ({name, image, price, quantity, onDelete, decrement, increment}) => {
  return (
    <div className={style.cardCont}>
        <div className={style.title}>{name}</div>
        <div className={style.info}>
            <img src={image} className={style.img}/>
            <div>
              <button className={style.deleteButton} onClick={()=>onDelete({name:name, price:price, quantity:quantity})}>Eliminar</button>
            </div>
            <div className={style.incrementDecrement}>
<<<<<<< HEAD
              <button disabled={quantity===10} onClick={()=>increment({name:name})}>+</button>
              <button disabled={quantity===1} onClick={()=>decrement({name:name})}>-</button>
=======
              <button disabled={quantity===1} onClick={()=>decrement({name:name})}>-</button>
              <button disabled={quantity===10} onClick={()=>increment({name:name})}>+</button>
>>>>>>> develop
            </div>
            <p className={style.total}>{price} x {quantity}</p>
        </div>
    </div>
  )
}
export default CardsCart