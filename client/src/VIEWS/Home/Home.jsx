import { useGetAllProductsQuery } from '../../libs/redux/services/productsApi.js';
import { Spin, Alert, Carousel} from 'antd';
import styles from './home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Cards from '../../Components/Cards/Cards.jsx';
import Pagination from '../../Components/Pagination/Pagination.jsx';


const Home = () =>{
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(4);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    useEffect(() => {
        dispatch(useGetAllProductsQuery());
    }, [dispatch])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };


    const { data: productsData, isError, isLoading } = useGetAllProductsQuery();
    console.log(productsData);

    return(
        <div className ={styles.homeContainer}>
            {/* { isLoading&&       
                <Spin tip="Cargando" size="large">
                    <div className="content" />
                </Spin> 
            }
            { isError&&     
                <Alert
                message="Error"
                description="Por favor, intente de nuevo más tarde."
                type="error"
                showIcon
                />
            } */}
            <div className={styles.carouselContainer}>
                <Carousel autoplay dots= {true}>
                    <div className={styles.sliceContainer}>
                        <img src="https://lalicorera.com/img/banners/Banner-chocolates.jpg" alt="imagen1" className={styles.images}/>
                    </div>                    
                    <div className={styles.sliceContainer}>
                        <img src="https://images.ecestaticos.com/l5CHYyiQo9cvHpB-f26l6GJAWa4=/147x52:1960x1413/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ff62%2F2d0%2F7af%2Ff622d07af6329223b76f0bf4dacfc760.jpg" alt="imagen1" className={styles.images}/>
                    </div>
                    <div className={styles.sliceContainer}>
                        <img src="https://www.eltiempo.com/uploads/2023/03/13/640fb61bb084a.jpeg" alt="imagen1" className={styles.images}/>
                    </div>
                    <div className={styles.sliceContainer}>
                        <img src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/chocolate-tableta.jpg.webp?itok=ctVzStkD" alt="imagen1" className={styles.images}/>
                    </div>
                </Carousel>
                
            </div>
            <div className={styles.paginationCont}>
                <Pagination
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                products={products}
                paginate={paginate}
                />
            </div>
            <div className={styles.pagContCards}>
  {currentProducts.map((products, index) => (
    <Cards key={index} name={products.nombre} price={products.precio} />
  ))}
</div>

            {/* <Cards products = {products}/> */}
           
        </div>
        
        
    );
}

export default Home;
