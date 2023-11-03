import React, { useState } from 'react'
import Style from './ControlPanel.module.css'
import Conteiner from '../Style/Conteiners.module.css'

import NavBarAdmin from '../../Components/NavBarAdmin/NavBarAdmin'
import CardAdmin from '../../Components/CardAdmin/CardAdmin';
import ChartLineAdmin from '../../Components/ChartJs/ChartLineAdmin';

const ControlPanel = () => {

  const [showAll, setShowAll] = useState(false);

  let products = [
    {
      id: "9d4a1bfe-1082-43d2-9a1c-5e68b3ea6e59",
      category: "Chocolates",
      description: "Chocolate en rama a elección (Semiamargo, con leche o blanco) en cajonera simple color blanca",
      image: "https://acortar.link/QxSZWK",
      name: "Tabletas Rellenas",
      price: "2400",
      rating: "4.5"
    },
    {
      id: "d0e2f380-dc12-4eac-8f9d-c95c3b5be8a9",
      category: "Bombones",
      description: "Chocolate en rama a elección (Semiamargo, con leche o blanco) en cajonera simple color blanca",
      image: "https://acortar.link/QxSZWK",
      name: "Bombones Baileys - Amarula x 12",
      price: "2400",
      rating: "4"
    },
    {
      id: "45e5ab98-7a32-45e3-aa7e-5e067d4a1121",
      category: "Bombones",
      description: "Chocolate en rama a elección (Semiamargo, con leche o blanco) en cajonera simple color blanca",
      image: "https://acortar.link/QxSZWK",
      name: "Bombones surtidos x18",
      price: "3600",
      rating: "5"
    },
    {
      id: "1b2b37c4-88d0-42a4-98c2-0e8965d7f5b8",
      category: "Bombones",
      description: "Chocolate en rama a elección (Semiamargo, con leche o blanco) en cajonera simple color blanca",
      image: "https://acortar.link/QxSZWK",
      name: "Bombones surtidos x 20",
      price: "3800",
      rating: "4"
    },
    {
      id: "51d2ca3a-7046-4b96-9c12-78e9b6834b6e",
      category: "Postres",
      description: "Chocolate en rama a elección (Semiamargo, con leche o blanco) en cajonera simple color blanca",
      image: "https://acortar.link/QxSZWK",
      name: "Frutillas bañadas en chocolate",
      price: "2700",
      rating: "5"
    },
    {
      id: "c1e5ec04-2b14-4f51-8fcb-7eaf4f8627b9",
      category: "Postres",
      description: "Chocolate en rama a elección (Semiamargo, con leche o blanco) en cajonera simple color blanca",
      image: "https://acortar.link/QxSZWK",
      name: "Nueces rellenas bañadas en chocolate",
      price: "3200",
      rating: "4.5"
    },
    {
      id: "942a08d6-f3aa-4b03-a6d6-3e9e1741e6c2",
      category: "Bocaditos",
      description: "Chocolate en rama a elección (Semiamargo, con leche o blanco) en cajonera simple color blanca",
      image: "https://acortar.link/QxSZWK",
      name: "Cajita de bocaditos Marroc x 3",
      price: "1800",
      rating: "3.5"
    },
    {
      id: "c8fefe56-2e11-4436-8c6c-fe4a0aa88efd",
      category: "Turrones",
      description: "Chocolate en rama a elección (Semiamargo, con leche o blanco) en cajonera simple color blanca",
      image: "https://acortar.link/QxSZWK",
      name: "Turron de Queaker & Nugaton",
      price: "6000",
      rating: "5"
    },
    {
      id: "6a51f9ea-e911-4f3a-b487-8295d832849f",
      category: "Chocolates",
      description: "Chocolate en rama a elección (Semiamargo, con leche o blanco) en cajonera simple color blanca",
      image: "https://acortar.link/QxSZWK",
      name: "Chocolate en Rama x 220gs",
      price: "3600",
      rating: "4"
    },
    {
      id: "c72ab86c-7b38-4d2d-ba7c-9c4ad1082d1d",
      category: "Chocolates",
      description: "Chocolate en rama a elección (Semiamargo, con leche o blanco) en cajonera simple color blanca",
      image: "https://acortar.link/QxSZWK",
      name: "Chocolate en Rama x 260gs",
      price: "3700",
      rating: "5"
    },
    {
      id: "f2539dfa-2a2c-469c-9f2b-27cfbd69cdee",
      category: "Alfajores",
      description: "fdafdadsa",
      image: "https://acortar.link/zYR2Za",
      name: "hola",
      price: "432423",
      rating: "2.5"
    }
  ];      

  const labels = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const data = labels.map(() => Math.floor(Math.random() * (40000 - 10000 + 1)) + 10000);

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
          <div className={Style.Grafics}>
          <ChartLineAdmin labels={labels} data={data} name={"Ventas"} />
          </div>
          <div className={Style.Grafics}>
          <ChartLineAdmin labels={labels} data={data} name={"Ingresos"} />
          </div>

        </div>
    </div>
  )
}

export default ControlPanel