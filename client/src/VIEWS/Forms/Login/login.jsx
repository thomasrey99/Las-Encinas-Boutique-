import React from 'react';
import { useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import Password from 'antd/es/input/Password';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../firebase/authContext";

const Login = () => {

    const navigate = useNavigate();
    const [error, setError] = useState();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const {login, loginWithGoogle}= useAuth();
    const { Item } = Form;
    

    const handleChange = ({target: {name, value}})=>{
        setUser({
            ...user,
            [name]: value

        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('')

            try {
                await login(user.email, user.password);
                navigate('/home')
            } catch (error) {
                console.log(error.code)
                if(error.code === 'auth/invalid-login-credentials'){
                    setError("Contraseña o correo electrónico incorrecto.")

                }if(error.code === 'auth/too-many-requests'){
                    setError("Su cuenta esta temporalmente bloqueada por multiples intententos fallidos, restaure su contraseña.")

                }
                
            }      
     
    }

    const handleGoogle = async()=>{
        try {
            await loginWithGoogle()
            navigate('/home')
        } catch (error) {
            setError("Ocurrió un error, inténtelo otra vez.")
        }
        
    }

    console.log("email:",user.email)
    console.log("password", user.password)

    return (
        <div>
            <h1>Ingresar</h1>
            {error && <p>{error}</p>}
            {console.log("Contenido del error")}

            <form onSubmit={handleSubmit}>
                
                <Form initialValues={{recordar: true}} >
                    <Item label= 'Usuario' name='email' rules={[{required: true, message: 'Ingrese un email válido', type:'email'}]} >
                        <Input name='email' placeholder='Ingresar e-mail...' onChange={handleChange}/>
                    </Item>
            
                    <Item label= 'Contraseña' name='password' rules={[{required: true, message: 'Ingrese su contraseña'}]} >
                        <Password name='password' placeholder='Ingrese contraseña...' onChange={handleChange}/>
                    </Item>

                    <Item name='recordar' valuePropName='checked' >
                        <Checkbox>Recordar usuario</Checkbox>
                    </Item>
                </Form> 

                <button type='submit'>Ingresar</button>
                <Link to='/registeruser'><button>Registrate</button></Link>
                <br></br>
                <Link to='/resetpassword'>Olvidé mi constraseña</Link>
            </form>
            <button onClick={handleGoogle}>Ingresa con Google</button>
        </div>
    )
};

export default Login; 