import React from 'react'

const Card = ({name, price, image}) => {
  return (
    <div>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <h2>${price}</h2>
    </div>
  )
}

export default Card