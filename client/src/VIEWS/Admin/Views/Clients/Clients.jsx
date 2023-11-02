import React from 'react'
import Conteiner from '../Style/Conteiners.module.css'

import NavBarAdmin from '../../Components/NavBarAdmin/NavBarAdmin';
import ErrorPage from '../../../../Components/ErrorPage/errorPage'


const Clients = () => {
  return (
    <div className={Conteiner.Container}>
      <NavBarAdmin/>
      <div className={Conteiner.Panel}>
      <ErrorPage/>
      </div>
    </div>
  )
}

export default Clients