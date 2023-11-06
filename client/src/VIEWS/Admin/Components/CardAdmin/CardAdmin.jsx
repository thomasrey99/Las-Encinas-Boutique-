import React, { useState } from 'react'
import { CheckCircleOutlined, DeleteOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import FormEditAdmin from '../FormEditAdmin/FormEditAdmin'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useSoftDeleteMutation } from '../../../../libs/redux/services/productsApi'

const { Meta } = Card;

const ActivateButton = ({ handleClick, isDelete }) => {
  const buttonn = isDelete && <span onClick={handleClick}><CheckCircleOutlined key='activate' /></span>
  return buttonn
}

const DeleteButton = ({ handleClick, isDelete }) => {
  const buttonn = !isDelete && <span onClick={handleClick}><DeleteOutlined key='delete' /></span>
  return buttonn
}

const CardAdmin = ({name, id_product, image, description, is_Delete }) => {

  const [softDelete, { data, isLoading, isError, error, }] = useSoftDeleteMutation()
  const [isEditing, setIsEditing] = useState(false)

  const products=useSelector((state)=>state.items.allProducts)
  console.log(products)   

  const handleEditClick = () => {
    setIsEditing(true)
  }
const handleDelete=()=> {
  const body = {
    id_product: id_product,
    is_Delete: true
  }
  softDelete(body)
}

const handleActivate = () => {
  const body = {
    id_product: id_product,
    is_Delete: false
  }
  softDelete(body)
}

  //console.log(products)

  const descriptionEdit = description.slice(0, 35)

  return (
    <>
      {isEditing ? (
        <FormEditAdmin id={id}/>
      ) : (
        <Card
        style={{
          width: "22%",
          height: "30%",
          margin: "1%",
          border: is_Delete ? "solid 2px red" : "transparent"
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
          <ActivateButton handleClick={handleActivate} isDelete={is_Delete} />,
          <NavLink to={"/productsAdmin"}><SettingOutlined key="setting" /></NavLink>,
          <span onClick={handleEditClick}><EditOutlined key="edit" /></span>,
          <DeleteButton handleClick={handleDelete} isDelete={is_Delete} />
        ]}
      >
        <Meta
          title={name}
          description={descriptionEdit + "..."}
        />
      </Card>
      )}
      </>
  )
}

export default CardAdmin