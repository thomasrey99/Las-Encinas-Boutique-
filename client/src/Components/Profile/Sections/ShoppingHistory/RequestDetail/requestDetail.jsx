import { useGetAllRequestQuery } from '../../../../../libs/redux/services/requestApi'; 
import { Card, List, Descriptions } from 'antd';
const { Meta } = Card;
import styles from './requestDetail.module.css';

const RequestDetail = (id_request) => {

    const request = {
        id_request: "82a17154-8505-484b-a72d-82f8e3b8942c",
        products: [
            {
                name: "Caja nueva2344444",
                price: 1,
                quantity: 1,
                total_price: 1,
                image: "https://imagenes.elpais.com/resizer/LdipMe8bmBK7QyafbHtPUIYVGpo=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TRSPFPMO2BEJVNMFJHDWPGUAMQ.png",
                id: "637c87f8-0a04-440c-886c-74896f139602"
            },
            {
                name: "CHOCOLATES DE LA CASA",
                price: 10,
                quantity: 1,
                total_price: 10,
                image: "https://imagenes.elpais.com/resizer/LdipMe8bmBK7QyafbHtPUIYVGpo=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TRSPFPMO2BEJVNMFJHDWPGUAMQ.png",
                id: "8a35950f-47c0-41d7-b875-2df97ca42ed2"
            }
        ],
        date: "2023-11-13T17:48:08.882Z",
        status: "pending",
        address: "Av 5",
        payment_id: "1319502035",
        total_amount: "11",
        uid: "1HCzngduptVcsYNSy4PEM7emTRB3"
    }


    return(
        <div className={styles.historyContainer}>
            <Descriptions title="Detalles de la Compra" bordered>
                <Descriptions.Item label="ID del Pedido">{request.id_request}</Descriptions.Item>
                <Descriptions.Item label="Fecha">{new Date(request.date).toLocaleDateString()}</Descriptions.Item>
                <Descriptions.Item label="Estado">{request.status}</Descriptions.Item>
                <Descriptions.Item label="Dirección">{request.address}</Descriptions.Item>
                <Descriptions.Item label="ID de Pago">{request.payment_id}</Descriptions.Item>
                <Descriptions.Item label="Total">${request.total_amount}</Descriptions.Item>
            </Descriptions>
            <h2>Productos:</h2>
            <List
                grid={{ column: 1 }}
                dataSource={request.products}
                renderItem={item => (
            <List.Item>
                <Card
                className={styles.productCard}
                cover={<div className={styles.imageContainer}><img alt={item.title} src={item.image} className={styles.productImage} /></div>}
                >
                <Meta title={item.name} />
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Total: ${item.total_price}</p>
                </Card>
            </List.Item>
            )}
        />
    </div>
    );
}

export default RequestDetail;