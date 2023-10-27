// import { Cards } from '../../Components/cards/Cards.jsx';
import { useSelector } from 'react-redux';
import CarouselImg from '../../Components/carousel/Carousel';
import styles from './home.module.css'

const Home = () =>{

    const products=useSelector((state)=>state.items.allProducts)
    console.log(products);

    return(
        <div className ={styles.homeContainer}>
            <CarouselImg/>
            {/* <Cards products = {products}/> */}

        </div>
    );
}

export default Home;
