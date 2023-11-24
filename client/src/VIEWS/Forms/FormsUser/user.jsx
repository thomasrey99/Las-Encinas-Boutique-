import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import style from './user.module.css';
import { useAuth } from "../../../firebase/authContext";
import validates from './validates';
import { sendEmailVerification, getAuth } from 'firebase/auth';
import Swal from 'sweetalert2'
import RegisterUserForm from './register';

const FormUser = () => {

    const {signup} = useAuth()

    const navigate = useNavigate()

    const [formInfo, setForm] = useState({
        name: '',
        lastName: '',
        address: '',
        email: '',
        phone: "",
        password: ''
    })

    const [error, setError] = useState({});

    const [isSeting, setIsSeting]=useState(false)

    const numberOfKeys = Object.keys(error).length;

    const handleCange = (event) => {
        const {name, value}=event.target
        setIsSeting(true)
        setForm({
            ...formInfo,
            [name]:value
        })
    }
    const errorsNotification = () => {
        if (typeof error === 'object' && error !== null) {
          const errorText = Object.keys(error)
            .map(key => `<p>${error[key]}</p>`)
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

    const handleSubmit = async (event) => {
        event.preventDefault();   
        if (
            !formInfo.name ||
            !formInfo.lastName ||
            !formInfo.address ||
            !formInfo.email ||
            !formInfo.phone ||
            !formInfo.password 
        ) {
            Swal.fire("Completa todos los campos");
            return;
        }
        try {
           
           setError({})

                await signup(formInfo.email, formInfo.password, formInfo.name, formInfo.lastName, formInfo.phone, formInfo.address);
                const auth = getAuth();
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    //console.log("Email enviado!!!!")
                });
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
                    title: "Usuario registrado con exito con extio"
                  }).then(()=>{
                    navigate('/home')
                  })
                } catch (error) {
                // console.log(error.code)
                if(error.code === 'auth/invalid-email'){
                    setError("Correo electrónico inválido")
                    Swal.fire("Correo invalido");
                } else if(error.code === 'auth/weak-password'){
                    Swal.fire("La contraseña debe tener al menos 8 caracteres");
                    setError("La constraseña debe tener al menos 8 caracteres")
                }else if(error.code === 'auth/email-already-in-use'){
                    Swal.fire("El correo electrónico ya está registrado!!!");
                    setError("El correo electrónico ya está registrado!!!")
                }
                
        }
    };

    useEffect(()=>{
        const validationErrors=validates(formInfo)
        setError(validationErrors)
    }, [formInfo])
    console.log(numberOfKeys)
    return (

        <div className={style.formPage}>
            <RegisterUserForm change={handleCange} submit={handleSubmit} errors={error} isSeting={isSeting} errorsNotification={errorsNotification} info={formInfo}/>
        </div>
        
    )
};

export default FormUser;