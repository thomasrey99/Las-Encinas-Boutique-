import { useGetAllRequestQuery } from '../../../../libs/redux/services/requestApi';
import { Card, List, Timeline, Button, Tag } from 'antd';
const { Meta } = Card;
import styles from './shoppingHistory.module.css'

const ShoppingHistory = () => {

    const requests = [
      {
        address: "Av 5", 
        date: "2023-11-13T17:39:48.017Z",
        id_request: "9be61477-30b2-4f9a-a7a6-dab8078e2e6c",
        payment_id: "1319498967",
        products: [
          {
            id: "8a35950f-47c0-41d7-b875-2df97ca42ed2",
            image: "https://imagenes.elpais.com/resizer/LdipMe8bmBK7QyafbHtPUIYVGpo=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TRSPFPMO2BEJVNMFJHDWPGUAMQ.png",
            name: "CHOCOLATES DE LA CASA",
            price: 10,
            quantity: 2,
            total_price: 20
          },
          {
            id: "637c87f8-0a04-440c-886c-74896f139602",
            image: "https://imagenes.elpais.com/resizer/LdipMe8bmBK7QyafbHtPUIYVGpo=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TRSPFPMO2BEJVNMFJHDWPGUAMQ.png",
            name: "Caja nueva2344444",
            price: 1,
            quantity: 1,
            total_price: 1
          }
        ],
        total_amount: "11",
        uid: "1HCzngduptVcsYNSy4PEM7emTRB3"
      }
    ]

    const columns = [
      {
        title: 'Fecha',
        dataIndex: 'date',
        key: 'date',
        render: text => new Date(text).toLocaleDateString(),
      },
      {
        title: 'ID',
        dataIndex: 'id_request',
        key: 'id_request',
      },
      {
        title: 'Estado',
        dataIndex: 'status',
        key: 'status',
        render: status => (
          <Tag color={status === 'Entregado' ? 'green' : 'volcano'}>
            {status.toUpperCase()}
          </Tag>
        ),
      },
      {
        title: 'Total',
        dataIndex: 'total_amount',
        key: 'total_amount',
      },
      {
        title: 'Producto',
        dataIndex: 'products',
        key: 'products',
        render: products => (
          <>
            {products.map(product => (
              <Tag color="blue" key={product.id}>
                {product.name}
              </Tag>
            ))}
          </>
        ),
      },
      {
        title: 'Cantidad',
        dataIndex: 'products',
        key: 'quantity',
        render: products => (
          <>
            {products.map(product => (
              <p key={product.id}>{product.quantity}</p>
            ))}
          </>
        ),
      },
    ];
    const { data: userRequest, isLoading, refetch } = useGetAllRequestQuery();
    console.log(userRequest);

  return (
    <div className={styles.historyContainer}>
      <List
        itemLayout="vertical"
        dataSource={requests}
        renderItem={request => (
          <List.Item>
            <Card title={<div><span className={styles.idRequest}>#{request.id_request}</span> 
              <span className={styles.date}>{new Date(request.date).toLocaleDateString()}</span></div>}>
              <p>Total: {request.total_amount}</p>
              <p>Productos:</p>
              <ul>
                {request.products.map((product, i) => (
                  <li key={i}>{product.name}</li>
                ))}
              </ul>
              <Button type="primary">
                Ver detalles
              </Button>
            </Card>
          </List.Item>
        )}
      />
    </div>
    );
}

export default ShoppingHistory;