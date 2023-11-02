import React from 'react';
import { useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import Password from 'antd/es/input/Password';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { Item } = Form
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        name: 'login',
        password: ''
    });

    const handlerCange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })

    };

    const handleSubmit = () => {
        e.preventDefault();

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Ingresar</h1>
                <Form initialValues={{recordar: true}} >
                    <Item label= 'Usuario' name='name' rules={[{required: true, message: 'Ingrese su usuario'}]} >
                        <Input placeholder='Ingresar e-mail...' onChange={handlerCange}/>
                    </Item>
            
                    <Item label= 'Contraseña' name='password' rules={[{required: true, message: 'Ingrese su contraseña'}]} >
                        <Password placeholder='Ingrese contraseña...' onChange={handlerCange}/>
                    </Item>

                    <Item name='recordar' valuePropName='checked' >
                        <Checkbox>Recordar usuario</Checkbox>
                    </Item>
                </Form>

                <button type='submit'>Ingresar</button>
            </form>
        </div>
    )
};

export default Login; 