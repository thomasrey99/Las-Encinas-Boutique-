import { useSelector } from 'react-redux';
import { useGetAllRequestQuery } from '../../../../libs/redux/services/requestApi';
// import { getUserLog } from '../../../../libs/redux/features/actions/userActions';


const Sumorder = () => {
    const order = useSelector(state => state.request.allRequest);
    const { data } = useGetAllRequestQuery();
    
    
    
    const OrdersPlaced = () => {
        data.map((order) => {
            order.products.map((cant) => {
               return cant.quantity
            })
        })
    };




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