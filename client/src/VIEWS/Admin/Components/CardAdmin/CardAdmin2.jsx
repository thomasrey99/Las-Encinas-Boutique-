import React from 'react'
import Style from './CardAdmin.module.css'

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CardAdmin = ({ image, name, description }) => {

const descriptionEdit = description.slice(0, 35)

  return (
    <div className={Style.Card}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{descriptionEdit + "..."}</p>
        <div>
            <button><DeleteOutlined /></button>
            <button><EditOutlined/></button>
        </div>
        
    </div>
  )
}

export default CardAdmin