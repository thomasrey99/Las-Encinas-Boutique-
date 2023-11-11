import { Pagination, Typography, Space } from "antd";
import { useAuth } from "../../firebase/authContext.jsx"; //Esto sirve para la autenticación
import Card from "../../Components/Card/Card.jsx";
import IniciarMap from "../../Components/Maps/Maps.jsx";
import Carousel from "../../Components/carousel/Carousel.jsx";
import Searchbar from "../../Components/searchBar/Searchbar.jsx";
import Filters from "../../Components/FIlters/Filters.jsx";
import { setCurrentPage } from "../../libs/redux/features/productsSlice.js";
import styles from "./home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { WhatsAppOutlined } from "@ant-design/icons";
import cajonera1 from "./image/cajonera1.jpg";
import cajonerra2 from "./image/cajonerra2.jpg";
import { getUserByUid } from "../../libs/redux/features/actions/userActions.js";
import { useEffect } from "react";



const Home = () => {
  const { user, logout } = useAuth();
  console.log("Este es el user del home:",user)
  useEffect(()=>{
    user && dispatch(getUserByUid(user.uid))
  },[])
  const whatsappLink = `https://wa.me/+5493816771213`;  
  const {Title, Text} = Typography;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items.allProducts);
  const productsFilter=products?.filter((product) => product.is_Delete ===false)
  const currentPage = useSelector((state) => state.items.currentPage);
  const itemsPerPage = useSelector((state) => state.items.itemsPerPage);

  const {name}=useSelector((state)=>state.filters)

  const startIndex = (currentPage-1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = productsFilter.slice(startIndex, endIndex);
  

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
          total={productsFilter.length}
          onChange={paginate}
        />
      </div>

      <div className={styles.cardCont}>
        {name && (
          <p className={styles.searchResult}>
            Resultados de la busqueda: {`"${name}"`}
          </p>
        )}
        <div className={styles.cardLayout}>
          {productsToDisplay?.map((product) => (
            <Card
              key={product.id_product}
              id={product.id_product}
              name={product.name}
              price={product.price}
              image={product.image}
              raiting={product.raiting}
              type={product.type}
            />
          ))}
        </div>
        {productsToDisplay.length === 0 && (
          <p className={styles.errorSearch}>No se encontraron productos</p>
        )}
      </div>
      <div className={styles.content}>
        <img className={styles.contentImg} src={cajonera1} alt="ChocoImagen" />

        <div className={styles.contentBanner}>
            <Title className={styles.h1} level={1}>Disfrute de las mejores delicias de la región.</Title>
            <Title className={styles.h3} level={3}>Ideales para agasajar con un regalo para alguien especial.</Title>
            <Space direction='vertical'>
                <Text className={styles.text} type='secondary' >* Pedidos personalizados</Text>
                <Text className={styles.text} type='secondary' >*  Tarjetas que expresan nuestros mejores deseos.</Text>
                <Text className={styles.text} type='secondary' >* Elaboración con materia prima de la más alta calidad.</Text> 
                <Text className={styles.text} type='secondary' >* Atención en horario comercial de 9 a 13hs y de 16 a 21hs.</Text>

            </Space>
        </div>

        <img className={styles.contentImg} src={cajonerra2} alt="ChocoImagen" />
      </div>
      <hr />
      <IniciarMap />
      <hr />
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <WhatsAppOutlined className={styles["whatsapp-icon"]} />
      </a>
    </div>
  );
};

export default Home;

