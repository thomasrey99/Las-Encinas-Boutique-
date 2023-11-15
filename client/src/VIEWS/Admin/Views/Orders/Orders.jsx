import React, { useEffect } from 'react'
import Conteiner from '../Style/Conteiners.module.css'
import NavBarAdmin from '../../Components/NavBarAdmin/NavBarAdmin';
<<<<<<< HEAD
// import ErrorPage from '../../../../Components/ErrorPage/errorPage'
import OrderTable from '../../Components/OrderTable/OrderTable';
=======
import OrderTable from '../../Components/OrderTable/OrderTable'
>>>>>>> develop
import { useGetAllRequestQuery } from '../../../../libs/redux/services/requestApi';
import { useDispatch, useSelector } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const Orders = () => {
  const order = useSelector(state => state.request.allRequest);
  const { data } = useGetAllRequestQuery();
  const dispatch = useDispatch();
  

  return (
    <div className={Conteiner.Container}>
      <NavBarAdmin />
      <div className={Conteiner.Panel}>
       <OrderTable/>
      </div>
    </div>
  )
}

export default Orders