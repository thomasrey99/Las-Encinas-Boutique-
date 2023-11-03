import React, { useState } from 'react'
import Style from './ControlPanel.module.css'
import Conteiner from '../Style/Conteiners.module.css'

import NavBarAdmin from '../../Components/NavBarAdmin/NavBarAdmin'
import CardAdmin from '../../Components/CardAdmin/CardAdmin';
import ChartLineAdmin from '../../Components/ChartJs/ChartLineAdmin';
import { useSelector } from 'react-redux';

const ControlPanel = () => {

  const [showAll, setShowAll] = useState(false);

  const products=useSelector((state)=>state.items.allProducts)   

  const labels = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const dataVentas = labels.map(() => Math.floor(Math.random() * (40000 - 10000 + 1)) + 10000);
  const dataPedidos = labels.map(() => Math.floor(Math.random() * (40000 - 10000 + 1)) + 10000);

  const handleClick = () => {
    setShowAll(!showAll);
  }

  const seeMoreText = showAll ? 'Ver menos...' : 'Ver más...';

  return (
    <div className={Conteiner.Container}>
        <NavBarAdmin/>
        <div className={Conteiner.Panel}>

          <div className={Style.Texts}>
          <h1>Las Encinas Boutique</h1>
          <h3>Ingresos totales: $40.000</h3>
          <h3>Numero de pedidos: 54</h3>
          <h3>Numero de visitantes: 4.223</h3>
          </div>
          
          <div className={Style.Prod}>
            <h2>Productos mas vendidos</h2>
            <span onClick={handleClick} className={Style.SeeMoreText}>
            {seeMoreText}
            </span>
          </div>
          
          <div className={Style.Cards}>
          {showAll
            ? products.map((p) => (
                <CardAdmin name={p.name} image={p.image} description={p.description} />
              ))
            : products.slice(0, 4).map((p) => (
                <CardAdmin name={p.name} image={p.image} description={p.description} />
              ))}
          </div>

          <h2 className={Style.h2Ventas}>Ventas anuales: </h2>
          <div className={Style.Grafics}>
          <ChartLineAdmin labels={labels} data={dataVentas} name={"Ventas"} />
          </div>
          
          <h2 className={Style.h2Ventas}>Numero de pedidos anuales: </h2>
          <div className={Style.Grafics}>
          <ChartLineAdmin labels={labels} data={dataPedidos} name={"Pedidos"} />
          </div>
        </div>
    </div>
  )
}

export default ControlPanel