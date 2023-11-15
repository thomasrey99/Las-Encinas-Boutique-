import { Typography, Space } from "antd";
import { useAuth } from "../../firebase/authContext.jsx"; //Esto sirve para la autenticación
import IniciarMap from "../../Components/Maps/Maps.jsx";
import Carousel from "../../Components/carousel/Carousel.jsx";
import styles from "./home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { WhatsAppOutlined, WechatOutlined } from "@ant-design/icons";
import cajonera1 from "./image/cajonera1.jpg";
import cajonerra2 from "./image/cajonerra2.jpg";
import { useTranslation } from "react-i18next";
import { getUserLog } from "../../libs/redux/features/actions/userActions.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "../../Components/products/products.jsx";



const Home = () => {
  const { t} = useTranslation("global");
  const { user} = useAuth();
  const dispatch = useDispatch();
  useEffect(()=>{
    user && dispatch(getUserLog(user.uid))

  },[])
  const whatsappLink = `https://wa.me/+5493816771213?text=Hola! Cómo te va? Me pasarías info por favor?`;  
  const {Title, Text} = Typography;



  return (
    <div className={styles.homeContainer}>
      <Carousel />
      <Products/>
      <div className={styles.content}>
        <img className={styles.contentImg} src={cajonera1} alt="ChocoImagen" />

        <div className={styles.contentBanner}>
            <Title className={styles.h1} level={1}>{t("banner.title")}</Title>
            <Title className={styles.h3} level={3}>{t("banner.description1")}</Title>
            <Space direction='vertical'>
                <Text className={styles.text} type='secondary' >{t("banner.description2")}</Text>
                <Text className={styles.text} type='secondary' >{t("banner.description3")}</Text>
                <Text className={styles.text} type='secondary' >{t("banner.description4")}</Text> 
                <Text className={styles.text} type='secondary' >{t("banner.description5")}</Text>
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
      <hr></hr>
      <hr></hr>
      <Link to="/chat"><WechatOutlined className={styles.chatIcon} /></Link>
    </div>
  );
};

export default Home;

