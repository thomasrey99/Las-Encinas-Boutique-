import { useEffect } from 'react';
import { Cards } from '../../Components/cards/Cards.jsx';
import { useGetAllProductsQuery } from '../../libs//redux/services/productsApi.js';

const Home = () =>{

    const [allProducts] = useGetAllProductsQuery();

    useEffect(() =>
    {
        allProducts();
    },[allProducts]);

    return(
        <div>
            <Cards products = {allProducts}/>
        </div>
    );
}

export default Home;