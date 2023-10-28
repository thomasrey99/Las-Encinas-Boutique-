// // import { Cards } from '../../Components/cards/Cards.jsx';
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import Carousel from "../../Components/carousel/Carousel";
import Searchbar from "../../Components/searchBar/Searchbar";
import IniciarMap from "../../Components/Maps/Maps";
import styles from "./home.module.css";
import { useState } from "react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const products = [
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
    { nombre: "Chocolate de Melocotón", precio: 3.09 },
  ];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log("Página actual:", pageNumber);
  };

  return (
    <div className={styles.homeContainer}>
      <Carousel />
      <Searchbar />
      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        products={products}
        paginate={paginate}
      />
      <div>
        {products.map((c) => (
          <Card key={c.nombre} name={c.nombre} price={c.precio} />
        ))}
      </div>
      <div className={styles.bannCont}>
        <IniciarMap />
      </div>

      {/* <Cards products={products} /> */}
    </div>
  );
};


export default Home;