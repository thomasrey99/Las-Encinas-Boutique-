import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Button } from 'antd';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;

const CardAdmin = ({ image, name, description }) => {

    const descriptionEdit = description.slice(0, 35)

  return (
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
            height: 300,
          }}
      />
    }
    actions={[
      <NavLink to={"/productsAdmin"}><SettingOutlined key="setting" /></NavLink>,
      <NavLink to={"/productsAdmin"}><EditOutlined key="edit" /></NavLink>
    ]}
  >
    <Meta
      title={name}
      description={descriptionEdit + "..."}
    />
  </Card>
  )
}

export default CardAdmin