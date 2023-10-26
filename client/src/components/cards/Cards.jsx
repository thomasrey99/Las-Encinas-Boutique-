import Card from 'antd/es/card/Card';
import React from 'react'
import { useSelector } from 'react-redux'

const Cards = () => {

    const products=useSelector((state)=>state.items.products)
    console.log(products)  

  return (
    <>
     {products.map(p => (
        <Card name={p.name} price={p.price}/>
     ))}
    </>
  )
}

export default Cards
