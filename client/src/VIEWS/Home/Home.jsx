// import { Cards } from '../../Components/cards/Cards.jsx';
import Carousel from '../../Components/carousel/Carousel';
import Searchbar from '../../Components/searchBar/Searchbar';
import styles from './home.module.css'


const Home = () =>{

    return(
        <div className ={styles.homeContainer}>
            <Carousel/>
            <Searchbar/>
            {/* <Cards products = {products}/> */}
           
        </div>
        
        
    );
}

export default Home;
