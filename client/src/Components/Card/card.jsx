import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';

import Style from './Card.module.css'

import { Link } from 'react-router-dom';

const Card = ({name, price, image, raiting, id}) => {

  const roundedRating = Math.round(raiting);

  return (
    <>
    <div className={Style.productList}>
      <div key={id} className={Style.productCard}>

        <Link to={`/detail/${id}`}>

            <img src={image} alt={name} className={Style.img} />
        </Link>

        <FaShoppingCart className={Style.productCard__cart} />
        <FaRegBookmark className={Style.productCard__wishlist} />
        <FaFireAlt className={Style.productCard__fastSelling} />

        <div className={Style.productCard__content}>
          <h1 className={Style.productName}>{name}</h1>
          <div className={Style.displayStack__1}>
            <div className={Style.productPrice}>${price}</div>
          </div>
          <div className={Style.displayStack__2}>
              <div className={Style.productRating}>
                {[...Array(roundedRating)].map((index) => (
                  <FaStar id={index + 1} key={index} />
                ))}
              </div>
            </div>
        </div>
      </div>              
      </div>
    </>
  )
}

export default Card;