import React from 'react'

import { Card } from 'antd';
const { Meta } = Card;

const CustomCard = ({name, price, image}) => {
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt={name} src={image} />}
    >
    <Meta title={name} description={"$" + price} />
    </Card>
  )
}

export default CustomCard