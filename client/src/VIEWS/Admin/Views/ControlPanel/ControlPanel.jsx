import React, { useState } from 'react';
import Style from './ControlPanel.module.css';
import Conteiner from '../Style/Conteiners.module.css';
import NavBarAdmin from '../../Components/NavBarAdmin/NavBarAdmin';
import CardAdmin from '../../Components/CardAdmin/CardAdmin';
import ChartLineAdmin from '../../Components/ChartJs/ChartLineAdmin';
import { useSelector } from 'react-redux';
import TextCardAdmin from '../../Components/TextCardAdmin/TextCardAdmin';

const ControlPanel = () => {
  const products = useSelector((state) => state.items.allProducts);
  const labels = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const dataVentas = labels.map(() => Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000);
  const dataPedidos = labels.map(() => Math.floor(Math.random() * (400 - 100 + 1)) + 100);

  const [mostrarGrafica1, setMostrarGrafica1] = useState(true);

  const toggleGrafica = () => {
    setMostrarGrafica1(!mostrarGrafica1);
  };

  return (
    <div className={Conteiner.Container}>
      <NavBarAdmin />
      <div className={Conteiner.Panel}>
        <div className={Style.SubHeader}>
          <div className={Style.InfoCards}>
            <div className={Style.CardsInfo}>
              <TextCardAdmin name={"Venta mensual"} info={"$1.200.000"} />
              <TextCardAdmin name={"Pedidos mesuales"} info={"3.454"} />
              <TextCardAdmin name={"Ventas realizadas"} info={"1.154"} />
            </div>
            <div className={Style.Grafics}>
              
              <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <h3 className={Style.h31}>Graficas</h3>

                <span
                className={Style.SeeMoreText}
                onClick={toggleGrafica}
                 >
                {mostrarGrafica1 ? " Ver pedidos" : "Ver ventas"}
                </span>
              </div>
              

              <ChartLineAdmin
                labels={labels}
                data1={dataVentas}
                data2={dataPedidos}
                name1={"Ventas"}
                name2={"Pedidos"}
                mostrarGrafica1={mostrarGrafica1}
              />
            </div>
          </div>
          <div className={Style.BestCard}>
            <h2>Producto estrella ⭐</h2>
            <div>
              {products.slice(0, 1).map((p) => (
                <CardAdmin
                  name={p.name}
                  image={p.image}
                  description={p.description}
                  id_product={p.id_product} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
