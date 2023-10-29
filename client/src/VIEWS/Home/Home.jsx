import { Pagination } from "antd";
import Card from "../../Components/Card/Card.jsx";
import IniciarMap from "../../Components/Maps/Maps.jsx";
import Carousel from "../../Components/carousel/Carousel";
import Filters from "../../Components/FIlters/Filters.jsx";
import Searchbar from "../../Components/searchBar/Searchbar";
import { setCurrentPage } from "../../libs/redux/features/productsSlice.js";
import styles from "./home.module.css";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items.allProducts);
  const currentPage = useSelector((state) => state.items.currentPage);
  const itemsPerPage = useSelector((state) => state.items.itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = products.slice(startIndex, endIndex);

  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className={styles.homeContainer}>
      <Carousel />
      <Searchbar />
      <Filters />
      <div className={styles.pagCont}>
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={products.length}
        onChange={paginate}
      />
      </div>

      <div className={styles.cardCont}>
        {productsToDisplay?.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            raiting={product.raiting}
            
          />
        ))}
      </div>
      <IniciarMap />
    </div>
  );
};

export default Home;
