import React from 'react';
import { useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import Password from 'antd/es/input/Password';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../firebase/authContext";

const Login = () => {
    const navigate = useNavigate();

    const {login, loginWithGoogle}= useAuth();
    const { Item } = Form;
    
    const [user, setUser] = useState({
        name: '',
        password: ''
    });
    const [error, setError] = useState();

    const handlerCange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
         try {
            
         } catch (error) {
            
         }
    };

    const handleSubmit = async () => {
        e.preventDefault();
        try {
            await login(login.email, login.password);
            navigate('/home')
        } catch (error) {
            console.log(error.code)
            if(error.code === 'auth/invalid-login-credentials'){
                setError("Contraseña o correo electrónico incorrecto.")

            }if(error.code === 'auth/too-many-requests'){
                setError("Su cuenta esta temporalmente bloqueada por multiples intententos fallidos, restaure su contraseña.")
            }    
        }
    };

    const handleGoogle = async()=>{
        try {
            await loginWithGoogle()
            navigate('/home')
        } catch (error) {
            setError("Ocurrió un error, inténtelo otra vez.")
        }
        
    }

    console.log("email:",login.email)
    console.log("password", login.password)

    return (
        <div>
            {error && <p>{error}</p>}
            {console.log("Contenido del error")}

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