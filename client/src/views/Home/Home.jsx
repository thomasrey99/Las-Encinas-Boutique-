import { Cards } from '../../Components/cards/Cards.jsx';
import { useGetAllProductsQuery } from '../../libs//redux/services/productsApi.js';

const Home = () =>{

    const { data: products, isError, isLoading, error } = useGetAllProductsQuery();

    if ( isLoading ) return <div>Loading...</div>
    else if ( isError ) return <div>Error {error.message} ..Please Try Again Later...</div>

    return(
        <div>
            <Cards products = {products}/>
        </div>
    );
}

export default Home;