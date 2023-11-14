import { useEffect } from 'react';
import { useGetRequestByIdQuery } from '../../../../../libs/redux/services/requestApi';
import { Card, List, Descriptions } from 'antd';
const { Meta } = Card;
import styles from './requestDetail.module.css';

const RequestDetail = ({id_request}) => {

    console.log(id_request);
    const { data: requestById, isLoading, refetch } = useGetRequestByIdQuery(id_request);
    console.log(requestById);

    useEffect(()=> {
        if (!requestById || requestById == null || requestById === undefined) {
            refetch();
        }
    },[requestById]);


    return(
        <div className={styles.historyContainer}>
            <Descriptions  bordered className={styles.descriptions}>
                <Descriptions.Item label="ID del Pedido">{requestById.id_request}</Descriptions.Item>
                <Descriptions.Item label="Fecha">{new Date(requestById.date).toLocaleDateString()}</Descriptions.Item>
                <Descriptions.Item label="Estado">{requestById.status}</Descriptions.Item>
                <Descriptions.Item label="Dirección">{requestById.address}</Descriptions.Item>
                <Descriptions.Item label="ID de Pago">{requestById.payment_id}</Descriptions.Item>
                <Descriptions.Item label="Total">${requestById.total_amount}</Descriptions.Item>
            </Descriptions>
            <h2>Productos:</h2>
            <List
                grid={{ column: 1 }}
                dataSource={requestById.products}
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