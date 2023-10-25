import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../libs/redux/services/productsApi';

const Detail = () => {

    const { id } = useParams();
    console.log(id);
    const { data: productDetail, isError, isLoading, error } = useGetProductByIdQuery();

    if ( isLoading ) return <div>Loading...</div>
    else if ( isError ) return <div>Error {error.message} ..Please Try Again Later...</div>

    return(
        <div>
            <h1>{productDetail.name}</h1>
            <span>{productDetail.id}</span>
            <span>{productDetail.precio}</span>
            <img src={productDetail.imagen} alt="chocolate" />
        </div>
    );
};

export default Detail;