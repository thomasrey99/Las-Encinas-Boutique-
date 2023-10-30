import { useSelector } from 'react-redux';
import { useState } from 'react';
import Validates from './validates';
import { useCreateUsersMutation } from '../../../libs/redux/services/usersApi';
import { Form, Input, Button, message } from 'antd';
import style from './user.module.css';



const FormUser = () => {
    const { Item } = Form
    const { Password } = Input;
    const userForm = useSelector(state => state.user)
    const [mutate] = useCreateUsersMutation();
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        address: '',
        email: '',
        // phone: '',
        password: ''
    })

    let [errors, setErrors] = useState({
        name: '',
        lastName: '',
        address: '',
        email: '',
        // phone: '',
        password: ''
    })

    const [isFormValid, setIsFormValid] = useState(false);

    const handlerCange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        const newErrors = { ...errors };

        Validates({
            ...form,
            [e.target.name]: e.target.value
        },
            newErrors,
            setErrors
            );
            const hasErrors = Object.values(newErrors).some((error) => error !== '');
            setIsFormValid(!hasErrors);
    }
    
    const handlerSubmit = async (event) => {
        event.preventDefault();
        
        if (
            !form.name ||
            !form.lastName ||
            !form.address ||
            !form.email ||
            // !form.phone ||
            !form.password 
        ) {
            alert('Por favor complete todos los campos')
            return;
        }
        //agregar dispatch
        try {
           await mutate(form);
           console.log();
        } catch (error) {
            return error
        }
    }
console.log(form);
    return (
        <div className={style.div}>
            <div className={style.containerPrincipal}>
                <div className={style.containerSegundario}>
                    <form name= 'form' onSubmit={handlerSubmit}>
                        <Item label='Nombre:'
                        name='name'
                        rules={[{
                            required: true,
                            message: 'Ingresa tu nombre'
                        }]}>
                            <Input name='name' onChange={handlerCange}/>
                            {errors.name !== '' ? <span>{errors.name}</span> : ''}
                        </Item>
 
                        <Item label='Apellido:'

                        name='lastName'
                        rules={[{
                            required: true,
                            message: 'Ingresa tu apellido'
                      }]}>
                          <Input name='lastName' onChange={handlerCange}/>
                          {errors.lastName !== '' ? <span>{errors.lastName}</span> : ''}
                     </Item>

                      <Item label='E-mail:'
                      name='email'
                      rules={[{
                         required: true,
                         message: 'Ingresa tu e-mail'
                     }]}>
                         <Input name='email' onChange={handlerCange}/>
                         {errors.email !== '' ? <span>{errors.email}</span> : ''}
                      </Item>

                     <Item label='Contraseña'
                        name='password'
                     rules={[{
                            required: true,
                            message: 'Ingresa una contraseña'
                     }]}>
                          <Password name='password' onChange={handlerCange}/>
                          {errors.password !== '' ? <span>{errors.password}</span> : ''}
                     </Item>

                     <Item label='Dirección:'
                      name='address'
                      rules={[{
                            required: true,
                            message: 'Ingresa tu dirección'
                     }]}>
                            <Input name='address' onChange={handlerCange}/>
                           {errors.address !== '' ? <span>{errors.address}</span> : ''}
                      </Item>
                    
                     <button type='submit'>Registrar</button>

                    </form>
                </div>
            </div>
        </div>
    )
};

export default FormUser;

