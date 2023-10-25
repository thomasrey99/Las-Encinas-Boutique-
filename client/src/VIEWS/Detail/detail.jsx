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

    return(
        <div>
            Detail
        </div>
    );
};

export default Detail;