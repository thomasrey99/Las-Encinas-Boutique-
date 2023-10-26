import React from 'react'

import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: "30%",
};

const landig = () => {
  return (
    <>
    <div>
      <h1>Las Encinas Boutique</h1>
      <a href={"/QuienesSomos?"}>¿Quienes Somos?</a>
      <h1>Promociones recientes</h1>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
    
    </>
  )
}

export default landig