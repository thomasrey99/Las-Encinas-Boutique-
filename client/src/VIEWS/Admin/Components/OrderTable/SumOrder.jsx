import { useDispatch, useSelector } from 'react-redux';

const SumOrder = () => {
    const users = useSelector(state => state.user.userLog)
    console.log(userLog);
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

export default SumOrder;