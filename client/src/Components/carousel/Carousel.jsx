import { useTranslation } from "react-i18next";
import styles from "./Carousel.module.css"
import { Spin, Alert, Carousel } from 'antd';
import logo from "../../assets/las_encinas_logo.png"
const CarouselImg = () => {
    const { t  } = useTranslation("global");
  return (
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
            <div className={styles.landingCont}>
                <img src={logo} className={styles.logoImg}/>
                <h1 className={styles.title}>{t("carousel.slogan")}</h1>
                <a href="#" className={styles.enter}>Comenzar</a>
            </div>
        </div>
  )
}

export default CarouselImg