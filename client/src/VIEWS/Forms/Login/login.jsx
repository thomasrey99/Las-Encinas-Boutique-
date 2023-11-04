import React from 'react';
import { useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import Password from 'antd/es/input/Password';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../firebase/authContext";
const { TextArea } = Input;

const Login = () => {

    const navigate = useNavigate();
    const {login, loginWithGoogle}= useAuth();
    const { Item } = Form;
    
    const [error, setError] = useState();
    
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    

    const handlerChange = (name, value) => {
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await login(form.email, form.password);
            navigate('/home')
        } catch (error) {
            console.log(error.code)
            if(error.code === 'auth/invalid-login-credentials'){
                setError("La contraseña o el E-mail son incorrectos.")

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
            setError("Ha Ocurrido un error, inténtelo nuevamente.")
        }
        
    }
    console.log(form);
    

    return (
        <div>
            {/* {error && <p>{error}</p>}
            {console.log("Contenido del error")} */}
            <form onSubmit={handleSubmit}>
                <h1>Ingresar</h1>
                <Form.Item label="E-mail" name="email" rules={[{ marginTop: "5%", required: true, message: 'Ingrese el nombre'}]}>
                    <Input name="email" value={form.email} onChange={(e) => handlerChange('email', e.target.value)} />
                </Form.Item>

                <Form.Item label="Contraseña" name="password" rules={[{ required: true, message: 'Ingrese el precio' }]}>
                    <Password name="password" placeholder='Ingrese su contraseña...' value={form.password} onChange={(e) => handlerChange('password', e.target.value)} />
                </Form.Item>
                     
                <div>
                    <Button type="primary" htmlType="submit">Ingresar</Button>
                    <Link to='/resetpassword'>Olvidé mi constraseña</Link>
                    <Link to='/registeruser'><Button>Registrate</Button></Link>
                    <Button onClick={handleGoogle}>Ingresa con Google</Button>
                </div>

            </form>
            
           
        </div>
    )
};

export default Login; 