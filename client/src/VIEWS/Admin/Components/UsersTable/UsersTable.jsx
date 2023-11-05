

import React from 'react';
import { Table} from 'antd';
import styles from "./UsersTable.module.css"
import { useGetAllUsersQuery } from "../../../../libs/redux/services/usersApi"
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import {Link} from 'react-router-dom'
const handleAction = ()=>{
    alert("Soy el button")
}
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
    title: 'Administrador',
    dataIndex: 'is_Admin',
    key: '4',
    width: 150,
    render: (text, record) => {
      return text ? "Sí" : "No";
    },
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: (record) => (
      <div>
        <Link to={`/editUserAdmin/${record.uid}`}> 
          <EditOutlined className={styles.marginIcon} />
        </Link>
        <a>
          <DeleteOutlined className={styles.marginIcon} />
        </a>
      </div>
    ),
  },
];




const UsersTable = () => {
    const { data } = useGetAllUsersQuery()
    const users = data;
    console.log("Esto son los usuarios:",users)
    return(
<div >
        <h1 >Users Table</h1>
<Table className={styles.container} 
    columns={columns} 
    dataSource={users}
    
  />
    </div>
    )
    
  
    };
export default UsersTable; 