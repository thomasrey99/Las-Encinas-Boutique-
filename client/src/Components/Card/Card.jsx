import Style from './Card.module.css'
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../libs/redux/features/favoritesSlice";
import { Card as AndCard, Rate, Button } from 'antd';
const { Meta } = AndCard;
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, } from '@ant-design/icons';

=======
import { Link } from 'react-router-dom';
import { Card as AndCard, Rate, Button } from 'antd';
const { Meta } = AndCard;
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, } from '@ant-design/icons';
>>>>>>> 0af3d76ce655ddf1d3305597bf3b2ea8a0c13dd8

const Card = (props) => {

<<<<<<< HEAD
  const favorites = useSelector(state => state.favorites.favoriteProducts)
  console.log(favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (favorites.length > 0 ){
      const isFavorite = favorites.some(fav => fav.id === props.id);
      setIsFav(isFavorite);
    }
  }, [favorites, props.id]);

  const [ isFav, setIsFav ] = useState();

  const handlefavClick = (event) => {
    event.stopPropagation();

    const isFavorite = favorites.some(prod => prod.id === props.id);

    if (isFavorite) {
      setIsFav(false);
      dispatch(removeFavorite(props));
    } else {
      setIsFav(true);
      dispatch(addFavorite(props));
    }
  }

  return (
    <div className={Style.productList}>

=======
  return (
    <div className={Style.productList}>
      <Link to={`/detail/${id}`} className={Style.link}>
>>>>>>> 0af3d76ce655ddf1d3305597bf3b2ea8a0c13dd8
        <AndCard
          className={Style.card} 
          hoverable
          style={{ width: 280, height: 400}}
<<<<<<< HEAD
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

=======
          cover={<img alt={name} src={image} style={{height: 200}} className={Style.img}/>}>
          <Meta title={<p className={Style.name}>{name}</p>} />
          <Meta title={<div className={Style.raiting}><Rate disabled value={raiting}/></div>}
           description={<p className={Style.price}>${price}</p>} />
           <div className={Style.buttons}>
           <Button className={Style.button}><ShoppingCartOutlined/></Button>
           <Button className={Style.button}><HeartOutlined/></Button>
           </div>
        </AndCard>
      </Link>
>>>>>>> 0af3d76ce655ddf1d3305597bf3b2ea8a0c13dd8
    </div>
  )
}

export default Card;