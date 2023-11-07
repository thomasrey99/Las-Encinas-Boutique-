import { useEffect } from 'react';
import Style from './Card.module.css'
import { useNavigate } from 'react-router-dom';
import { useGetAllFavProductsQuery, useGetFavProductQuery, 
  useAddFavProductMutation, useRemoveFavProductMutation } from '../../libs/redux/services/favoritesApi'
import { Card as AndCard, Rate, Button } from 'antd';
const { Meta } = AndCard;
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, } from '@ant-design/icons';
import { addProductCart } from '../../libs/redux/features/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { usePutCartMutation } from '../../libs/redux/services/CartApi';
import { useAuth } from '../../firebase/authContext';

const Card = (props) => {

  const {user}=useAuth()

  const dispatch=useDispatch()
  const navigate = useNavigate();
  const cartData=useSelector((state)=>state.cart)
  const id_cart=useSelector((state)=>state.user.userCartId)
  const currentUser= useSelector((state)=>state.user.userLog)
  const userId =  currentUser?.uid;
  console.log(currentUser);
  const productId = props.id;
  const [ addFavProduct ] = useAddFavProductMutation();
  const [ removeFavProduct ] = useRemoveFavProductMutation();
  const { data: productFav, refetch  } = useGetFavProductQuery({userId, productId});
  const { refetch: refresh  } = useGetAllFavProductsQuery(userId);
  const [mutate]=usePutCartMutation()
  console.log(productFav);

  useEffect(() => {
    if (userId) {
        refetch();
    }
},[productFav, userId])

  const handlefavClick = async (event) => {
    event.stopPropagation();

    if(user===null){
      alert("Tienes que registrarte para agregar productos a favoritos")
      navigate("/login")
    }else{
      if (productFav) {
        await removeFavProduct({userId, productId});
      } else {
        await addFavProduct({userId, productId});
      }
      refetch(); 
      refresh();
    }
  }

  const handleProductCart=async (product)=>{
    if(user===null){
      alert("Tienes que registrarte para agregar productos al carrito")
      navigate("/login")
    }else{
      dispatch(addProductCart(product))
      await mutate({ dataUpdate: cartData, id_cart: id_cart })
    }
  }

  console.log("info del carrito",cartData)
  console.log("id del carrito", id_cart)
  return (
    <div className={Style.productList}>

        <AndCard
          className={Style.card}
          hoverable
          style={{ width: 280, height: 400}}
          cover={<img alt={props.name} src={props.image} style={{height: 200}} className={Style.img} />}>
          <Meta  onClick={()=>navigate(`/detail/${productId}`)} title={<p className={Style.name}>{props.name}</p>} />
          <Meta title={<div className={Style.raiting}><Rate disabled value={props.raiting}/></div>}
           description={<p className={Style.price}>${props.price}</p>} />
           <div className={Style.buttons}>
           <Button className={Style.button} onClick={()=>handleProductCart(props)}><ShoppingCartOutlined/></Button>
           <Button className={Style.button} onClick={handlefavClick}>{productFav?<HeartFilled/>:<HeartOutlined/>}</Button>
           </div>
        </AndCard>

    </div>
  )
}

export default Card;