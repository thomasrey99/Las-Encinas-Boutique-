

import React, { useEffect } from 'react';
import { Table } from 'antd';
import styles from "./UsersTable.module.css"
import { useGetAllUsersQuery } from "../../../../libs/redux/services/usersApi"
import { EditOutlined, StopOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByUid, getUsers } from '../../../../libs/redux/features/actions/userActions';
import SearchBarUsers from '../SearchBarUsers/SearchBarUsers';



import { Link } from 'react-router-dom'

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
    title: 'Bloqueado',
    dataIndex: 'isBlocked',
    key: '5',
    width: 150,
    render: (text, record) => {
      return text ? "Sí" : "No";
    },
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




const UsersTable = () => {
  const users = useSelector(state => state.user.allUsers)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUsers())
  },[])

  // const { data } = useGetAllUsersQuery()
  // const users = data;
  console.log("Esto son los usuariossssss:", users)
  return (
    <div className={styles.container}>
      <h1 className={styles.titleTable}>Lista de usuarios</h1>
      <SearchBarUsers/>
      <br></br>
      
      <Table 
        columns={columns}
        dataSource={users}

      />
    </div>
  )


}; 
export default UsersTable; 