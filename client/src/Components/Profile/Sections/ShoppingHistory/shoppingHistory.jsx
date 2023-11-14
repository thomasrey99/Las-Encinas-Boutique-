import { useGetAllRequestQuery } from '../../../../libs/redux/services/requestApi';
import { Button, Tag, Table, Spin } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import styles from './shoppingHistory.module.css'

const ShoppingHistory = () => {

  const { data: requests, isLoading, refetch } = useGetAllRequestQuery();
  console.log(requests);
   
  const columns = [
    {
      title: 'Fecha',
      dataIndex: 'date',
      key: 'date',
      render: text => new Date(text).toLocaleDateString(),
    },
    {
      title: 'ID Pedido',
      dataIndex: 'id_request',
      key: 'id_request',
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <Tag color={status === 'complete' ? 'green' : 'volcano'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Producto(s)',
      dataIndex: 'products',
      key: 'products',
      render: products => products.map(product => product.name).join(', '),
    },
    {
      title: 'Cantidad',
      dataIndex: 'products',
      key: 'quantity',
      render: products => products.map(product => product.quantity).join(', '),
    },
    {
      title: 'Total',
      dataIndex: 'total_amount',
      key: 'total_amount',
      render: total_amount => `$ ${total_amount}`
    },
    {
      title: 'Detalles',
      key: 'actions',
      render: (text, record) => (
        <Button type="primary" onClick='{() => showPurchaseDetails(record)}'>
          <EyeOutlined/>
        </Button>
      ),
    },
  ];
  
  return (
    <div className={styles.historyContainer}>
      {isLoading ?
      <Spin tip="Cargando" className={styles.loading}><div className="content"/></Spin>
      :<Table columns={columns} dataSource={requests} pagination={{ pageSize: 4 }}/>}
    </div>
  );
}

export default ShoppingHistory;