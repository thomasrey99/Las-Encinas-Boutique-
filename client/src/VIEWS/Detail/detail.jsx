import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetProductByIdQuery } from '../../libs/redux/services/productsApi';

const Detail = () => {

    const { id } = useParams();
    console.log(id);
    const [productDetail] = useGetProductByIdQuery();

    useEffect(() => {
        productDetail();
    },[productDetail]);

    const detailProduct = { 
        name: "Chocolate blanco", 
        id: 1, 
        precio: 2.99, 
        imagen: 'https://www.eltiempo.com/uploads/2023/03/13/640fb61bb084a.jpeg'
    };

    return(
        <div>
            <h1>{detailProduct.name}</h1>
            <span>{detailProduct.id}</span>
            <span>{detailProduct.precio}</span>
            <img src={detailProduct.imagen} alt="chocolate" />
        </div>
    );
};

export default Detail;