import React from 'react'
import Card from "../card/Card"

const chocolates = [
    { nombre: "Chocolate Blanco", precio: 2.99 },
    { nombre: "Chocolate con Leche", precio: 3.49 },
    { nombre: "Chocolate Amargo 70%", precio: 4.99 },
    { nombre: "Chocolate de Avellanas", precio: 3.79 },
    { nombre: "Chocolate de Caramelo", precio: 2.89 },
    { nombre: "Chocolate de Fresa", precio: 2.99 },
    { nombre: "Chocolate de Naranja", precio: 2.99 },
    { nombre: "Chocolate de Menta", precio: 2.99 },
    { nombre: "Chocolate con Almendras", precio: 3.29 },
    { nombre: "Chocolate de Vainilla", precio: 2.99 },
    { nombre: "Chocolate de Cereza", precio: 3.09 },
    { nombre: "Chocolate de Coco", precio: 2.99 },
    { nombre: "Chocolate de Frambuesa", precio: 3.19 },
    { nombre: "Chocolate de Café", precio: 3.29 },
    { nombre: "Chocolate de Plátano", precio: 2.99 },
    { nombre: "Chocolate de Canela", precio: 2.99 },
    { nombre: "Chocolate de Maracuyá", precio: 3.39 },
    { nombre: "Chocolate de Pistachos", precio: 3.49 },
    { nombre: "Chocolate de Mora", precio: 3.19 },
    { nombre: "Chocolate de Melocotón", precio: 3.09 }
  ];

const Cards = () => {
  return (
    <div>
        {chocolates.map(c => (
        <Card key={c.nombre} name={c.nombre} price={c.precio}
        />))}
    </div>
  )
}

export default Cards