import React, { useEffect } from 'react';
import Style from './NavBarAdmin.module.css';
import { NavLink } from "react-router-dom"

import { ControlOutlined, HomeOutlined, ShoppingOutlined, UserOutlined, ShoppingCartOutlined, DollarOutlined } from '@ant-design/icons';

import icon from '../../../../assets/Las_encinas_Logo.png';

import { useGetAllProductsQuery } from '../../../../libs/redux/services/productsApi';
import { addProducts } from '../../../../libs/redux/features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {

  const dispatch = useDispatch()


  const filter = {
    category: "",
    maxPrice: "",
    minPrice: "",
    name: "",
    order: "",
    type: ""
  }

  const {data}=useGetAllProductsQuery(filter)

  useEffect(()=>{
    dispatch(addProducts(data))
  }, [data])

  return (
    <div className={Style.NavBar}>
      <img src={icon} alt="Las encinas boutic" />
      <ul>

        <li>
          <div className={Style.Items}>
            <HomeOutlined style={{ marginRight: "5%", fontSize: '30px', color: 'white' }} />
            <NavLink to={"/home"} className={Style.a}>Home</NavLink>
          </div>
        </li>

        <li>
          <div className={Style.Items}>
            <ControlOutlined style={{ fontSize: '30px', color: 'white' }} />
            <NavLink to={"/controlAdmin"} className={Style.a}>Panel de control</NavLink>
          </div>
        </li>

        <li>
          <ShoppingOutlined style={{ fontSize: '24px', color: 'white' }} />
          <NavLink to={"/productsAdmin"} className={Style.a}>Productos</NavLink>
        </li>

        <li>
          <div className={Style.Items}>
            <ShoppingCartOutlined style={{ marginRight: "5%", fontSize: '24px', color: 'white' }} />
            <NavLink to={"/ordersAdmin"} className={Style.a}>Pedidos</NavLink>
          </div>
        </li>

        <li>
          <UserOutlined style={{ fontSize: '24px', color: 'white' }} />
          <NavLink to={"/clientsAdmin"} className={Style.a}>Clientes</NavLink>
        </li>

        <li>
          <DollarOutlined style={{ fontSize: '24px', color: 'white' }} />
          <NavLink to={"/paymentsAdmin"} className={Style.a}>Pagos</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
