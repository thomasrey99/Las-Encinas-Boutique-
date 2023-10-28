import  Cards  from '../../Components/Cards/Cards.jsx';
import Carousel from '../../Components/carousel/Carousel';
import Searchbar from '../../Components/searchBar/Searchbar';
import styles from './home.module.css'
import Filters from '../../Components/FIlters/Filters.jsx';
import { WhatsAppOutlined } from '@ant-design/icons'

const Home = () =>{
    const whatsappLink = `https://wa.me/+5493816771213`;
    return(
        <div className ={styles.homeContainer}>
            <Carousel/>
            <Searchbar/>
            <Filters/>
            <Cards/>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppOutlined className={styles['whatsapp-icon']} />
            </a>

        </div>
    );
}

export default Home;