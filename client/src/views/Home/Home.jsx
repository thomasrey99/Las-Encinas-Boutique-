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
        <div>Componente Home
            <Cards products = {allProducts}/>
        </div>
    );
}

export default Home;