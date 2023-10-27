import  Cards  from '../../Components/Cards/Cards.jsx';
import Carousel from '../../Components/carousel/Carousel';
import Searchbar from '../../Components/searchBar/Searchbar';
import styles from './home.module.css'


const Home = () =>{

    return(
        <div className ={styles.homeContainer}>
            <Carousel/>
            <Searchbar/>
            <Cards/>
        </div>
    );
}

export default Home;