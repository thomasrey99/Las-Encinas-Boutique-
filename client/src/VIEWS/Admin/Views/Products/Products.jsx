import React, { useState } from 'react';
import NavBarAdmin from '../../Components/NavBarAdmin/NavBarAdmin';

import Conteiner from '../Style/Conteiners.module.css'
import Style from './Products.module.css';

import { NavLink } from 'react-router-dom';
import CardAdmin from '../../Components/CardAdmin/CardAdmin';
import { useSelector } from 'react-redux';


const Products = () => {

  const products = useSelector((state) => state.items.allProducts);
  
  const [showAll, setShowAll] = useState(false);       

  const handleClick = () => {
    setShowAll(!showAll);
  }
  const seeMoreText = showAll ? 'Ver menos...' : 'Ver más...';

  return (
    <div className={Conteiner.Container}>
      <NavBarAdmin />
      <div className={Conteiner.Panel}>
        <div className={Style.buttons}>
          <NavLink to="/createProduct" className={`${Style.button} ${Style.marron}`}>
            Crear producto
          </NavLink>
          <NavLink to="/createProduct" className={`${Style.button} ${Style.marron}`}>
            Agregar promoción
          </NavLink>
        </div>

        <div className={Style.Prod}>
            <h2>Productos mas vendidos</h2>
            <span onClick={handleClick} className={Style.SeeMoreText}>
            {seeMoreText}
            </span>
          </div>

        <div className={Style.Cards}>
          {showAll
            ? products?.map((p) => (
                <CardAdmin name={p.name} image={p.image} description={p.description} />
              ))
            : products.slice(0, 8).map((p) => (
                <CardAdmin name={p.name} image={p.image} description={p.description} id_product={p.id_product} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
