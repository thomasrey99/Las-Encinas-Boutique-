import { useAuth } from "../../firebase/authContext.jsx"; //Esto sirve para la autenticación
import Map from "../../Components/Maps/Maps.jsx";
import Carousel from "../../Components/carousel/Carousel.jsx";
import styles from "./home.module.css";
import { useDispatch} from "react-redux";
import { WhatsAppOutlined, WechatOutlined } from "@ant-design/icons";
import { getUserLog } from "../../libs/redux/features/actions/userActions.js";
import { useEffect} from "react";
import { Link } from "react-router-dom";
import Products from "../../Components/products/products.jsx";
import Banner from "../../Components/infoProducts/banner.jsx";
import emailjs from '@emailjs/browser'
import { useLocation } from 'react-router-dom';



const Home = () => {

  const { user} = useAuth();

  const dispatch = useDispatch();

  //Esto es para EmailJS
  const refTemplate = useRef();
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const status = searchParams.get('status')
  const userMail = useSelector((state) => state.user.userLog)
  //_____________________________________________________________

  useEffect(()=>{

    user && dispatch(getUserLog(user.uid))
    
  }, [])

  const whatsappLink = `https://wa.me/+5493816771213?text=Hola! Cómo te va? Me pasarías info por favor?`;

  /*It is for handleAdminMail */

  console.log(userMail)
  useEffect(() => {
    if (status === 'approved') {
      handleAdminMail()
    }
  }, [status])
  
  const handleAdminMail = () => {
    const serviceId = "service_zigdlws"
    const templateAdminId = "template_8gadd5r"
    const templateClientId = "template_gs77yab"
    
    const apikey = "jYr3TGnr-3SdDMbpq"
    
    emailjs.send(serviceId, templateAdminId, {
      admin_name: "Admin encinas boutique",
    }, apikey)
    .then(response => { console.log('SUCCESS!', response.status, response.text); })
    .catch(err => { console.log('FAILED...', err); })
    
    emailjs.send(serviceId, templateClientId, {
      user_name: `${user.name}`,
      address: `${user.address}`,
      reply_to: `${user.email}`,
    }, "jYr3TGnr-3SdDMbpq")
    .then(response => { console.log('SUCCESS!', response.status, response.text); })
    .catch(err => { console.log('FAILED...', err); })
  }
  /*----------------------------------------- */
  
  return (
    <div className={styles.homeContainer}>
      <Carousel />
      <Products/>
      <Banner/>
      <Map/>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <WhatsAppOutlined className={styles["whatsapp-icon"]} />
      </a>
      <Link to="/chat"><WechatOutlined className={styles.chatIcon} /></Link>
    </div>
  );
};

export default Home;

