// import { Cards } from '../../Components/cards/Cards.jsx';
import { useGetAllProductsQuery } from '../../libs/redux/services/productsApi.js';
import { Spin, Alert, Carousel } from 'antd';
import styles from './home.module.css'

const Home = () =>{

    const { data: products, isError, isLoading } = useGetAllProductsQuery();
    console.log(products);

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
                        <img src="https://www.eltiempo.com/files/article_main_1200/uploads/2023/02/27/63fd2da25213c.jpeg" alt="imagen1" className={styles.images}/>
                    </div>
                    <div className={styles.sliceContainer}>
                        <img src="https://www.eltiempo.com/uploads/2023/03/13/640fb61bb084a.jpeg" alt="imagen1" className={styles.images}/>
                    </div>
                    <div className={styles.sliceContainer}>
                        <img src="https://estaticos-cdn.epe.es/clip/996ddfce-c301-46d3-8776-aba599bba010_alta-libre-aspect-ratio_default_0.jpg" alt="imagen1" className={styles.images}/>
                    </div>
                </Carousel>
            </div>
            {/* <Cards products = {products}/> */}
        </div>
    );
}

export default Home;
