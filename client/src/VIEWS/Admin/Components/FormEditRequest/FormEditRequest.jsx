import axios from "axios"
import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import {useUpdateRequestMutation, useGetAllRequestQuery} from '../../../../libs/redux/services/requestApi'
import styles from './FormEditRequest.module.css';

import { Select } from 'antd';
const { Option } = Select;

import { async } from "@firebase/util";

const EditRequest = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  
    const { data } = useGetAllRequestQuery();
    const [mutate] = useUpdateRequestMutation();
  
    const [state, setState] = useState({status: ""});
  
    const eventOnChange = (value) => {
      setState({status:value});
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await mutate({ status: state, id_request: id });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Estado de pedido actualizado",
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          navigate("/ordersAdmin")
        })
      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error al cambiar de estado",
          showConfirmButton: false,
          timer: 1500
        })
      }
    };
  
    const handleCancel = () => {
      navigate("/ordersAdmin");
    };
  
    console.log(state, id);
  
    return (
      <div className={styles.container}>
        <Link to={"/ordersAdmin"} className={styles.backLink}>Back</Link>
        <h1 className={styles.title}>Editar Estado</h1>
        <form className={styles.formCont}>
          <Select
            placeholder="Selecciona un estado"
            onChange={eventOnChange}
            value={state.status}
            style={{ width: "30vw" }}
          >
            <Option value="complete">Realizados</Option>
            <Option value="pending">Pendientes</Option>
            <Option value="cancelled">Cancelados</Option>
          </Select>
          <div className={styles.buttonsCont}>
            <button
              className={styles.buttonCancel}
              onClick={handleCancel}
            >
              Cancelar
            </button>
            <button
              className={styles.buttonSave}
              onClick={handleSubmit}
              type="submit"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default EditRequest;
  