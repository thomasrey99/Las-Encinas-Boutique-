// import { useState } from 'react';
// import { useState } from 'react';
import Style from './Card.module.css'
import { useNavigate } from 'react-router-dom';
import { useGetAllFavProductsQuery, useGetFavProductQuery, 
  useAddFavProductMutation, useRemoveFavProductMutation } from '../../libs/redux/services/favoritesApi'
import { Card as AndCard, Rate, Button } from 'antd';
const { Meta } = AndCard;
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, } from '@ant-design/icons';


const Card = (props) => {

  const navigate = useNavigate();
  const userId = '5546a';
  const productId = props.id;
  const [ addFavProduct ] = useAddFavProductMutation();
  const [ removeFavProduct ] = useRemoveFavProductMutation();
  const { data: productFav, refetch  } = useGetFavProductQuery({userId, productId});
  const { refetch: refresh  } = useGetAllFavProductsQuery(userId);
  console.log(productFav);

  const handlefavClick = async (event) => {
    event.stopPropagation();

    if (productFav) {
      await removeFavProduct({userId, productId});
    } else {
      await addFavProduct({userId, productId});
    }
    refetch(); 
    refresh();
  }

  return (
    <div className={Style.productList}>

        <AndCard
          className={Style.card}
          hoverable
          style={{ width: 280, height: 400}}
          onClick={()=>navigate(`/detail/${productId}`)}
          cover={<img alt={props.name} src={props.image} style={{height: 200}} className={Style.img} />}>
          <Meta title={<p className={Style.name}>{props.name}</p>} />
          <Meta title={<div className={Style.raiting}><Rate disabled value={props.raiting}/></div>}
           description={<p className={Style.price}>${props.price}</p>} />
           <div className={Style.buttons}>
           <Button className={Style.button}><ShoppingCartOutlined/></Button>
           <Button className={Style.button} onClick={handlefavClick}>{productFav?<HeartFilled/>:<HeartOutlined/>}</Button>
           </div>
        </AndCard>

    </div>
  )
}

export default Card;