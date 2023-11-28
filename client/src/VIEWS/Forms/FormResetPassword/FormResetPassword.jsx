import { useState } from "react";
import { useAuth } from "../../../firebase/authContext";
import { useNavigate } from "react-router-dom";
import { Form, Input, Checkbox, Button } from 'antd';
import style from  "./formReset.module.css"
import Swal from 'sweetalert2'

const FormResetPassword = ()=>{
    
    const navigate = useNavigate()
    const [error, setError] = useState()

    const [user, setUser] = useState({
        email: "",
    })

    const {login, resetPassword}= useAuth()

    const handlerChange = (name, value) => {
        setUser({
            ...user,
            [name]: value
        })
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('')

            try {
                await resetPassword(user.email);
                navigate('/home')
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Revisa tu correo",
                showConfirmButton: false,
                timer: 1500
                });
            } catch (error) {
               setError(error.message) 
                 
            }      
     
    }
    //    console.log(user);
    return(
        <div className={style.mainPage}>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} className={style.formPassword}>
                <div className={style.resetTitle}>
                <h2 >Restaurar contraseña</h2>
                </div>
                    <Form.Item onSubmit={handleSubmit} label="E-mail" name="email" rules={[{ marginTop: "5%", required: true, message: 'Ingrese el nombre'}]}>
                        <Input name="email" value={user.email} onChange={(e) => handlerChange('email', e.target.value)} />
                    </Form.Item>
                   <Button type="primary" htmlType="submit" className={style.buttonSubmit}>Enviar correo de recuperación</Button>
            </form>
            
        </div>
        
    )
}

export default FormResetPassword;