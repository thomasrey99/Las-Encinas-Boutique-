import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Validates  from './validates';


const FormUser = () => {
    const dispatch = useDispatch()
    const userForm = useSelector(state => state.user)
    const [form, setForm] = useState({
        name: '',
        last_name: '',
        address: '',
        email: '',
        phone: '',
        password: ''
    })

    let [errors, setErrors] = useState({
        name: '',
        last_name: '',
        address: '',
        email: '',
        phone: '',
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
    }
    
    const handlerSubmit = (event) => {
        event.preventDefault();

        if (
            !form.name ||
            !form.last_name ||
            !form.address ||
            !form.email ||
            !form.phone ||
            !form.password 
        ) {
            alert('Por favor complete todos los campos')
            return;
        }
        //agregar dispatch
    }

    return (
        <div>
            <h1>Registro de Usuario</h1>
            <form>
                <label htmlFor="name">Nombre: </label>
                <input type="text" name= 'name'  placeholder='Ingresar nombre...' onChange={handlerCange} />
                <hr />
                <label htmlFor="last_name">Apellido: </label>
                <input type="text" name= 'last_name'  placeholder='Ingresar apellido...' onChange={handlerCange} />
                <hr />
                <label htmlFor="address">Dirección: </label>
                <input type="text" name= 'address'  placeholder='Ingresar dirección...' onChange={handlerCange} />
                <hr />
                <label htmlFor="email">E-Mail: </label>
                <input type="text" name= 'email'  placeholder='Escribe tu e-mail...' onChange={handlerCange} />
                <hr />
                <label htmlFor="phone">Teléfono: </label>
                <input type="text" name= 'phone'  placeholder='Dejanos tu contacto...' onChange={handlerCange} />
                <hr />
                <label htmlFor="password">Contraseña: </label>
                <input type="text" name= 'password'  placeholder='Debe ser secreta...' onChange={handlerCange} />
                <hr />
            </form>
        </div>
    )
};

export default FormUser;