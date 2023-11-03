import { useState } from "react";
import { useAuth } from "../../../firebase/authContext";
import { Link, useNavigate } from "react-router-dom";


const LoginFirebase = ()=>{
    
    const navigate = useNavigate()
    const [error, setError] = useState()

    const [user, setUser] = useState({
        email: "",
        password:"",
    })

    const {login, loginWithGoogle}= useAuth()
   
    


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
                // console.log(error.code)
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
    
    
    // console.log("email:",user.email)
    // console.log("password", user.password)
    return(
        <div>
            {error && <p>{error}</p>}
            {/* {console.log("Contenido del error")} */}

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <br></br>
                <input type="password" name="password" id="password" placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <br></br>

                <button>Ingresar</button>
                <Link to='/registeruser'><button>Registrate</button></Link>
                <br></br>
                <Link to='/resetpassword'>Olvidé mi constraseña</Link>
                
            </form>
            <button onClick={handleGoogle}>Ingresa con Google</button>
        </div>
        
    )
}

export default LoginFirebase;