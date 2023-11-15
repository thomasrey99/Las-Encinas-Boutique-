import axios from "axios"
import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from '../../Views/Style/Forms.module.css'
import Swal from 'sweetalert2';
import {useUpdateRequestMutation, useGetAllRequestQuery} from '../../../../libs/redux/services/requestApi'
import style from '../FormEditUser/FormEditUser.module.css';
import { Select } from 'antd';
import { async } from "@firebase/util";

const EditRequest = () => {
   const [mutate] = useUpdateRequestMutation();
   const {data} = useGetAllRequestQuery();
   const [state, setState] = useState('');
   const navigate = useNavigate()
   const { id } = useParams();

   const eventOnChange = (value) => {
       
       setState(value);
   };
   
   const handleSubmit = async () => {

       await mutate({ status: state, id_request: id})
    //    navigate("/ordersAdmin")
   };

   const handleCancel = ()=>{
    navigate("/ordersAdmin");
  }
  
console.log(state);
   return (
    <div className={styles.container}>
        <h1 className={styles.title}>Editar Estado</h1>
        <form>
            <Select 
            placeholder="Selecciona un estado"
            onChange={eventOnChange}>
                <Option value="complete">Realizados</Option>
                <Option value="pending">Pendientes</Option>
                <Option value="cancelled">Cancelados</Option>
            </Select>
            <button className={styles.buttonCancel} onClick={handleCancel}>Cancelar</button>
            <button className={styles.button} onClick={handleSubmit} type="submit">Guardar</button>
        </form>
    </div>
   )
};

export default EditRequest;