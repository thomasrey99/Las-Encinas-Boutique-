import { useState } from "react";
import { useAuth } from "../../../firebase/authContext";
import { Link, useNavigate } from "react-router-dom";


const FormResetPassword = ()=>{
    
    const navigate = useNavigate()
    const [error, setError] = useState()

    const [user, setUser] = useState({
        email: "",
        
    })

    const {login, resetPassword}= useAuth()
   
    


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
                await resetPassword(user.email);
                navigate('/home')
            } catch (error) {
               setError(error.message) 
                 
            }      
     
    }
    
     
    return(
        <div>
            {error && <p>{error}</p>}
            <h2>Restaurar contraseña</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <br></br>
                
                <button>Enviar correo de recuperación</button>
                
                
            </form>
            
        </div>
        
    )
}

export default FormResetPassword;