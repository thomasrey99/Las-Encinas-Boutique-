import Card from 'antd/es/card/Card';
import React, { useEffect } from 'react';
import { addProducts } from '../../libs/redux/features/productsSlice';
import { useGetAllProductsQuery } from '../../libs/redux/services/productsApi';
import { useDispatch, useSelector } from 'react-redux';

const Cards = () => {

  const as = [{name: "Hola", price: 1000}]

  const dispatch = useDispatch()

  const {data, isLoading, isError } = useGetAllProductsQuery()

  useEffect(() => {
    if (data) {
      dispatch(addProducts(data));
    }
  }, [data, dispatch]);

  const products = useSelector((state) => state.products.allProducts);

  console.log(data);
  return (
    <>
      {isLoading ? (
        <div>Cargando...</div>
      ) : isError ? (
        <div>Error al cargar los productos</div>
      ) : (
        products.map((p) => (
          <Card name={p.name} price={p.price} key={p.id} />
        ))
      )}
    </>
  );
};

export default Cards;
