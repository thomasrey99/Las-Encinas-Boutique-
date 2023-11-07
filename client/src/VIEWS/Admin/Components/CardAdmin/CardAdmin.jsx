import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useSoftDeleteMutation } from '../../../../libs/redux/services/productsApi'

const { Meta } = Card;

const CardAdmin = ({ image, name, description, id_product, is_Delete }) => {

  const [softDelete, { data, isLoading, isError, error, }] = useSoftDeleteMutation()
  const descriptionEdit = description.slice(0, 35)

  const handleDelete=()=> {
    const body = {
      id_product: id_product,
      is_Delete: true
    }
    softDelete(body)
  }

  return (
    <div>
        <Card
        style={{
          margin: "5% 0 0 0",
          width: "18em",
          border: is_Delete ? "solid 2px red" : "transparent"
        }}
        cover={
          <img
            alt={name}
            src={image}
            style={{
              width: "100%",
              height: "18em",
              position: "static",
              top: "0",
              left: "0"
              }}
          />
        }
        actions={[
          <button onClick={handleDelete}><DeleteOutlined /></button>,
          <NavLink to={`/editProductAdmin/${id_product}`}><EditOutlined key="edit" /></NavLink >
        ]}
      >
        <Meta 
          style={{minHeight: "6em"}}
          title={name}
          description={descriptionEdit + "..."}
        />
      </Card>
      </div>
  )
}

export default CardAdmin