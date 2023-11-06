import React from 'react';
import NavBarAdmin from '../../Components/NavBarAdmin/NavBarAdmin';

import Conteiner from '../Style/Conteiners.module.css'
import Style from './Products.module.css';

import { NavLink } from 'react-router-dom';
import CardAdmin from '../../Components/CardAdmin/CardAdmin';
import { useSelector } from 'react-redux';

const Products = () => {

  const products=useSelector((state)=>state.items.allProducts)   

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

        <div className={Style.Cards}>
          {products.map((p) => {
            console.log('p', p)
            return (
              <>
                <CardAdmin name={p.name} id_product={p.id_product} image={p.image} description={p.description}  is_Delete={p.is_Delete}/>
              </>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
