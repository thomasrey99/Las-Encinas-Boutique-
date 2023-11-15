import React, { useEffect, useState } from 'react';
import { Table, Select } from 'antd';
import styles from "../UsersTable/UsersTable.module.css";
import { EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Sumorder from './SumOrder';
import { useGetAllRequestQuery } from '../../../../libs/redux/services/requestApi';
import style from './class.module.css';

const OrderTable = () => {
  const { data } = useGetAllRequestQuery();
  const dispatch = useDispatch();
  const request = data ? Object.values(data) : [];
  const [filter, setFilter] = useState([]);
  
  const columns = [
  {
    title: 'Pedidos',
    dataIndex: 'products',
    key: 'products',
    width: 150,
    render: (products) => (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <span>{product.name}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Estado',
    width: 100,
    dataIndex: 'status',
    key: 'status',
    fixed: 'left',
  },
  {
    title: 'Cantidad',
    dataIndex: 'products',
    key: 'products',
    width: 30,
    render: (products) => (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <span>{product.quantity}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: '2',
    width: 150,
  }, 
  {
    title: 'Cliente',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: (record, request) => (
      <div>
        <Link to={`/editUserAdmin/${record.uid}`}>
          <EditOutlined className={styles.marginIcon} />
        </Link>
        
        <Link to={`request/${request.id_request}`}>
          <EditOutlined className={styles.marginIcon} />
        </Link>
      </div>
    ),
  },
];

const eventOnChange = (value) => {
    if (value !== "all") {
      const orderProd = request.filter((ord) => ord.status === value)
      setFilter(orderProd)     
    } else {
      setFilter(request)
    }

};
console.log(request);
  return (
    <div className={styles.container}>
      <h1 className={styles.titleTable}>Lista de Pedidos</h1>
        <Sumorder/>

        <div className={style.selectContainer}>
          <Select 
          placeholder="Selecciona un estado"
          onChange={eventOnChange}>
            <Option value="all">Todos</Option>
            <Option value="complete">Realizados</Option>
            <Option value="pending">Pendientes</Option>
            <Option value="cancelled">Cancelados</Option>
          </Select>
        </div>

      <br></br>
      
      <Table 
        className={styles.tableContainer}
        columns={columns}
        dataSource = {filter.length > 0 ? filter : request}
      />
    </div>
  )


}; 
export default OrderTable; 