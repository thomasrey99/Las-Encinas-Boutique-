import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Detail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    //const detailProduct = useSelector(state => state);

    useEffect(() => {
        dispatch((id));
    },[dispatch]);

    const detailProduct = { 
        name: "Chocolate Blanco", 
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