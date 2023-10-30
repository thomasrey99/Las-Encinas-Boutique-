import Style from './Card.module.css'
import { Link } from 'react-router-dom';
import { Card as AndCard, Rate, Button } from 'antd';
const { Meta } = AndCard;
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, } from '@ant-design/icons';

const Card = ({name, price, image, raiting, id}) => {

  return (
    <div className={Style.productList}>
      <Link to={`/detail/${id}`} className={Style.link}>
        <AndCard
          className={Style.card} 
          hoverable
          style={{ width: 280, height: 400}}
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
    </div>
  )
}

export default Card;
