import  Cards  from '../../Components/Cards/Cards.jsx';
import Carousel from '../../Components/carousel/Carousel';
import Searchbar from '../../Components/searchBar/Searchbar';
import styles from './home.module.css'
import Filters from '../../Components/FIlters/Filters.jsx';

const Home = () =>{

    return(
        <div className ={styles.homeContainer}>
            <Carousel/>
            <Searchbar/>
            <Filters/>
            <Cards/>

        </div>
    );
}

export default Home;