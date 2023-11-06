import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Validates from './validates';
import { useCreateUsersMutation } from '../../../../libs/redux/services/usersApi';
import { Form, Input, Button, InputNumber } from 'antd';
import { useAuth } from '../../../../firebase/authContext';
import { useNavigate } from 'react-router-dom';
import style from './FormEditUser.module.css';
import { useDispatch } from 'react-redux';
import { getUserByUid } from '../../../../libs/redux/features/actions/userActions';
import { useParams } from 'react-router-dom';

const FormEditUser = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const { Item } = Form;
  const { Password } = Input;
  const userForm = useSelector((state) => state.user);
  const userByUid = useSelector(state => state.user.userByUid)
  const { signup } = useAuth();
  const [mutate] = useCreateUsersMutation();

  

  useEffect(()=>{
    dispatch(getUserByUid(id))
  },[])

 

  


  const [form, setForm] = useState({
    name: '',
    lastName: '',
    address: '',
    email: '',
    phone: 0,
    password: '',
  });

  useEffect(() => {
    if (userByUid) {
      setForm(userByUid);
    }
  }, [userByUid]);


  let [error, setError] = useState();

  let [errors, setErrors] = useState({
    name: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
    password: '',
  });

  const [isFormValid] = useState(false);

  const handlerCange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });

    const newErrors = { ...errors };

    Validates(
      {
        ...form,
        [name]: value,
      },
      newErrors,
      setErrors
    );
  };

  const resetState = () => {
    setForm({
      name: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
      password: '',
    });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    if (
      !form.name ||
      !form.lastName ||
      !form.address ||
      !form.email ||
      !form.phone ||
      !form.password
    ) {
      alert('Por favor complete todos los campos');
      return;
    }

    try {
      setError('');

      await signup(form.email, form.password, form.name, form.lastName, form.phone, form.address);
      navigate('/home');
    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/invalid-email') {
        setError('Correo electrónico inválido');
      } else if (error.code === 'auth/weak-password') {
        setError('La contraseña debe tener al menos 6 caracteres');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('El correo electrónico ya está registrado!!!');
      }
    }
  };

  return (
    <div className={style.containerPrincipal}>
      <h1 className={style.h1}>Editar usuario</h1>
      <form onSubmit={handlerSubmit}>
        <Form.Item
          label="Nombre"
          name="name"
          rules={[{ required: true, message: 'Ingrese su nombre' }]}
        >
          <Input
            name="name"
            value={form.name}
            onChange={(e) => handlerCange('name', e.target.value)}
            className={style.formItem}
          />
        </Form.Item>
        {errors.name !== '' ? <span className={style.span}>{errors.name}</span> : ''}

        <Form.Item
          label="Apellido"
          name="lastName"
          rules={[{ required: true, message: 'Ingrese su apellido' }]}
        >
          <Input
            name="lastName"
            value={form.lastName}
            onChange={(e) => handlerCange('lastName', e.target.value)}
            className={style.formItem}
          />
        </Form.Item>
        {errors.lastName !== '' ? (
          <span className={style.span}>{errors.lastName}</span>
        ) : ''}

        <Form.Item
          label="Domicilio"
          name="address"
          rules={[{ required: true, message: 'Ingrese su domicilio' }]}
        >
          <Input
            name="address"
            value={form.address}
            onChange={(e) => handlerCange('address', e.target.value)}
            className={style.formItem}
          />
        </Form.Item>
        {errors.address !== '' ? (
          <span className={style.span}>{errors.address}</span>
        ) : ''}

        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: 'Ingrese su e-mail' }]}
        >
          <Input
            name="email"
            value={form.email}
            onChange={(e) => handlerCange('email', e.target.value)}
            className={style.formItem}
          />
        </Form.Item>
        {errors.email !== '' ? <span className={style.span}>{errors.email}</span> : ''}

        <Form.Item
          label="Teléfono"
          name="phone"
          rules={[{ required: true, message: 'Ingrese su contacto' }]}
        >
          <Input
            name="phone"
            value={form.phone}
            onChange={(e) => handlerCange('phone', e.target.value)}
            className={style.formItem}
          />
        </Form.Item>
        {errors.phone !== '' ? <span className={style.span}>{errors.phone}</span> : ''}

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: 'Ingrese su contraseña' }]}
        >
          <Password
            name="password"
            value={form.password}
            onChange={(e) => handlerCange('password', e.target.value)}
            className={style.formItem}
          />
        </Form.Item>
        {errors.password !== '' ? <span className={style.span}>{errors.password}</span> : ''}

        <Button type="primary" htmlType="submit" className={style.button}>
          Guardar
        </Button>
      </form>
    </div>
  );
};

export default FormEditUser;



