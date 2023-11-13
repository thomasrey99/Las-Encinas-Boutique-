import React, { useEffect } from 'react';
import { Table } from 'antd';
import styles from "../UsersTable/UsersTable.module.css";
import { EditOutlined, StopOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByUid, getUsers } from '../../../../libs/redux/features/actions/userActions';
import SearchBarUsers from '../SearchBarUsers/SearchBarUsers';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Sumorder from './Sumorder';
import { useGetAllRequestQuery } from '../../../../libs/redux/services/requestApi';
import Search from '../SearchBarProducts/Search'

  



const OrderTable = () => {
  const order = useSelector(state => state.request.allRequest);
  const { data } = useGetAllRequestQuery();
  const dispatch = useDispatch();

  

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
    render: (record) => (
      <div>
        <Link to={`/editUserAdmin/${record.uid}`}>
          <EditOutlined className={styles.marginIcon} />
        </Link>
      </div>
    ),
  },
];


  return (
    <div className={styles.container}>
      <h1 className={styles.titleTable}>Lista de Pedidos</h1>
        {/* <Sumorder/> */}
        <Search/>
      <br></br>
      
      <Table 
        className={styles.tableContainer}
        columns={columns}
        dataSource = {data}
      />
    </div>
  )


}; 
export default OrderTable; 