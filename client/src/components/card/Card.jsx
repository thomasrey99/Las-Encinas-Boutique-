import React from 'react'

const Card = ({name, price}) => {
  return (
    <div>
        <h1>Carta de {name}</h1>
        <h2>{name}</h2>
        <h2>${price}</h2>
    </div>
  )
}

export default Card