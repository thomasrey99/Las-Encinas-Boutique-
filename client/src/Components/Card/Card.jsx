import Style from './Card.module.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { addFavorite, removeFavorite } from "../../libs/redux/features/favoritesSlice";
import { Card as AndCard, Rate, Button } from 'antd';
const { Meta } = AndCard;
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, } from '@ant-design/icons';


const Card = (props) => {

  // const favorites = useSelector(state => state.favorites.favoriteProducts)
  // console.log(favorites);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // useEffect(() => {
  //   if (favorites.length > 0 ){
  //     const isFavorite = favorites.some(fav => fav.id === props.id);
  //     setIsFav(isFavorite);
  //   }
  // }, [favorites, props.id]);

  const [ isFav, setIsFav ] = useState();

  const handlefavClick = (event) => {
    event.stopPropagation();

    // const isFavorite = favorites.some(prod => prod.id === props.id);

    // if (isFavorite) {
    //   setIsFav(false);
    //   dispatch(removeFavorite(props));
    // } else {
    //   setIsFav(true);
    //   dispatch(addFavorite(props));
    // }
  }

  return (
    <div className={Style.productList}>

        <AndCard
          className={Style.card} 
          hoverable
          style={{ width: 280, height: 400}}
          onClick={()=>navigate(`/detail/${props.id}`)}
          cover={<img alt={props.name} src={props.image} style={{height: 200}} className={Style.img} />}>
          <Meta title={<p className={Style.name}>{props.name}</p>} />
          <Meta title={<div className={Style.raiting}><Rate disabled value={props.raiting}/></div>}
           description={<p className={Style.price}>${props.price}</p>} />
           <div className={Style.buttons}>
           <Button className={Style.button}><ShoppingCartOutlined/></Button>
           <Button className={Style.button} onClick={handlefavClick}>{isFav?<HeartFilled/>:<HeartOutlined/>}</Button>
           </div>
        </AndCard>

    </div>
  )
}

export default Card;