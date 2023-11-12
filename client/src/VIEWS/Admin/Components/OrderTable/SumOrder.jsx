import { useDispatch, useSelector } from 'react-redux';
import { useGetAllRequestQuery } from '../../../../libs/redux/services/requestApi';
import { getUserLog } from '../../../../libs/redux/features/actions/userActions';


const Sumorder = () => {
    const dispatch = useDispatch();
    const allRequests = useSelector(state => state.request.AllRequest)
    console.log(allRequests);

    
    const OrdersPlaced = 5;
    const BackOrders = 2;
    const CancelledOrders = 1;
    const PromotionalStock = CancelledOrders;
    const TotalOrders = (OrdersPlaced + BackOrders) - CancelledOrders
    return (
        <div>
            <ul>
                <li>Pedidos realizados: {OrdersPlaced}</li>
                <li>Pedidos pendientes: {BackOrders}</li>
                <li>Pedidos Cancelados: {CancelledOrders}</li>
                <li>Stock Promocional: {PromotionalStock}</li>
            </ul>
            <h3>Total de pedidos: {TotalOrders} </h3>
        </div>
    )
}

export default Sumorder;