import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../../firebase/authContext";
import style from "./login.module.css";
import Swal from "sweetalert2/dist/sweetalert2.js"
import LoginForm from "./loginForm";
import validatesLogin from "./validations";
const URL_SERVER = import.meta.env.VITE_URL_SERVER; 

const Login = () => {

    const navigate = useNavigate();

    const {login, loginWithGoogle}= useAuth();
    
    const [form, setForm] = useState({
        email: '',
        password: '',
        isBlocked: false
    });

    const [isSeting, setIsSeting]=useState(false)

    const [validates, setValidates]=useState({})

    const numberOfKeys = Object.keys(validates).length;

    useEffect(() => {
        // Aquí haces una solicitud al servidor para obtener la información del usuario
        // La respuesta de la solicitud debe incluir el estado de bloqueo del usuario
    
        
        fetch(`${URL_SERVER}/users?email=${form.email}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("Estado del usuario", data?.isBlocked)
            setForm({
              ...form,
              isBlocked: data.isBlocked,
            });
            const validations=validatesLogin(form)
            setValidates(validations)
          })
          .catch((error) => {
            console.error('Error al obtener información del usuario', error);
          });
        const validations=validatesLogin(form)
        setValidates(validations)
      }, [form.email, form.password]);
    

    const handleChange = (event) => {

    const {name, value}=event.target

    setForm({
      ...form,
      [name]: value,
    });

    setIsSeting(true)

  };
    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (form.isBlocked) {
            navigate('/homeblocked')
          } else {
            try {
                await login(form.email, form.password);
                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                  }
                });
                Toast.fire({
                  icon: "success",
                  title: "Logueado con extio"
                }).then(()=>{
                  navigate('/home')
                })
               
            } catch (error) {
                // console.log(error.code)
                if(error.code === 'auth/invalid-login-credentials'){
                    
                  Swal.fire({
                    position: "top-mid",
                    icon: "error",
                    title: "email o contraseña invalida",
                    showConfirmButton: false,
                    timer: 1500
                  });
    
                    }if(error.code === 'auth/too-many-requests'){
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        confirmButtonText: 'Restablecer contraseña',
                        text: "Cuenta bloqueda por limite de intentos"
                      }).then((result)=>{
                        if(result.isConfirmed){
                          navigate("/resetpassword")
                        }
                      })
                    }
                }  
          }
        
            
    }

    const handleGoogle = async()=>{
        try {
            await loginWithGoogle()
            navigate('/home')
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: "Logueado con extio"
            }).then(()=>{
              navigate('/home')
            })

        } catch (error) {
          Swal.fire({
            icon:"error",
            title: 'Ah ocurrido un error'
          });
        }
        
    }
    const errorsNotification = () => {
      if (typeof validates === 'object' && validates !== null) {
        const errorText = Object.keys(validates)
          .map(key => `<p>${validates[key]}</p>`)
          .join('');
    
        Swal.fire({
          icon:"error",
          title: 'Errores:',
          html: errorText,
        });
      } else {
        console.error('El objeto errors no es un objeto válido.');
      }
    };

  return (
    <div className={style.mainPage}>
      <LoginForm loginGoogle={handleGoogle} submit={handleSubmit} change={handleChange} data={form} validates={validates} isSeting={isSeting} numberKeys={numberOfKeys} errorsNotifications={errorsNotification}/>
    </div>
  );
};
export default Login;
