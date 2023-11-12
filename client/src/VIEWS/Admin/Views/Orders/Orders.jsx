import React from 'react'
import Conteiner from '../Style/Conteiners.module.css'
import NavBarAdmin from '../../Components/NavBarAdmin/NavBarAdmin';
import ErrorPage from '../../../../Components/ErrorPage/errorPage'
import OrderTable from '../../Components/orderTable/orderTable';

const Orders = () => {
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