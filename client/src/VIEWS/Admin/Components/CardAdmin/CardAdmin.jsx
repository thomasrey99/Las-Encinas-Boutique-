import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';

const { Meta } = Card;

const CardAdmin = ({ image, name, description, id_product }) => {

  const descriptionEdit = description.slice(0, 35)

  return (
    <div>
        <Card
        style={{
          margin: "5% 0 0 0",
          width: "18em"
        }}
        cover={
          <img
            alt={name}
            src={image}
            style={{
              width: "100%",
              height: "auto",
              position: "static",
              top: "0",
              left: "0",
              }}
          />
        }
        actions={[
          <NavLink to={"/productsAdmin"}><SettingOutlined key="setting" /></NavLink>,
          <NavLink to={`/editProductAdmin/${id_product}`}><EditOutlined key="edit" /></NavLink>,
        ]}
      >
        <Meta
          title={name}
          description={descriptionEdit + "..."}
        />
      </Card>
      </div>
  )
}

export default CardAdmin