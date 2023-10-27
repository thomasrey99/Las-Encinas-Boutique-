import { useEffect } from 'react';
import Carousel from '../../Components/carousel/Carousel';
import Searchbar from '../../Components/searchBar/Searchbar';
import styles from './home.module.css'

import { useGetAllProductsQuery } from "../../libs/redux/services/productsApi"

import CustomCard from '../../Components/Cards/Cards.jsx';

const Home = () =>{

    const {data, isLoading}=useGetAllProductsQuery(search)
    
  useEffect(()=>{
    dispatch(addProducts(data))
  }, [data])


    return(
        <div className ={styles.homeContainer}>
            <Carousel/>
            <Searchbar/>
            <CustomCard products = {products}/> 
        </div>
    );
}

export default Home;
