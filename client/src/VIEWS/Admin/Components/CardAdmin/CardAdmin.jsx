import React, { useState } from 'react'
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import FormEditAdmin from '../FormEditAdmin/FormEditAdmin'

const { Meta } = Card;

const CardAdmin = ({ image, name, description, id }) => {

  const [isEditing, setIsEditing] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
  }

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
          <span onClick={handleEditClick}><EditOutlined key="edit" /></span>
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