import React from "react";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Producto 1", price: 10 },
    { id: 2, name: "Producto 2", price: 20 },
    { id: 3, name: "Producto 3", price: 15 },
  ];

  const calculateTotal = () => {
    // Función para calcular el total de los elementos en el carrito
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      <button>Completar Compra</button>
    </div>
  );
};

export default Cart;
