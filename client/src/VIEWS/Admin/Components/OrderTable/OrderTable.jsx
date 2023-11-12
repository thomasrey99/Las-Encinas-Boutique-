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

const columns = [
  {
    title: 'Nombres',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Apellidos',
    width: 100,
    dataIndex: 'lastName',
    key: 'lastName',
    fixed: 'left',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: '1',
    width: 150,
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Teléfono',
    dataIndex: 'phone',
    key: '3',
    width: 150,
  },
  {
    title: 'Pedidos',
    dataIndex: 'order',
    key: '4',
    width: 150,
    render: () => {
      <div>
        <Link>
          
        </Link>
      </div>
    }
  },
  {
    title: 'Editar',
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




const OrderTable = () => {
  const order = useSelector(state => state.request.allRequest);
  const { data } = useGetAllRequestQuery()
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <h1 className={styles.titleTable}>Lista de usuarios</h1>
        <Sumorder/>
        <SearchBarUsers/>
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