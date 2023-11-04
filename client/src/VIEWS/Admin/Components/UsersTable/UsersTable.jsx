// import { useGetAllUsersQuery } from "../../../../libs/redux/services/usersApi"
// import { useEffect } from "react"

// const UsersTable = () => {
//     const { data } = useGetAllUsersQuery()

//     return (
//     <div>
//         <h1>Lista de usuarios</h1>

//         <table>
//             <thead>
//                 <tr>
//                     <th>Nombres</th>
//                     <th>Apellidos</th>
//                     <th>Email</th>
//                     <th>Telefono</th>
//                     <th>Direccion</th>
//                     <th>Administrador</th>
//                 </tr>
//             </thead>
//             <tbody>
                
//                     {data && data.map(el => (
//                         <tr key={el.id}>
//                             <td>{el.name}</td>
//                             <td>{el.lastName}</td>
//                             <td>{el.email}</td>
//                             <td>{el.phone}</td>
//                             <td>{el.address}</td>
//                             <td>{el.isAdmin}</td>
//                         </tr>
//                     ))}
             
//             </tbody>
//         </table>




//     </div>)
// }

// export default UsersTable

import React from 'react';
import { Table } from 'antd';
import styles from "./UsersTable.module.css"
import { useGetAllUsersQuery } from "../../../../libs/redux/services/usersApi"

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
    dataIndex: 'telefono',
    key: '3',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a onClick={handleAction}>action</a>,
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