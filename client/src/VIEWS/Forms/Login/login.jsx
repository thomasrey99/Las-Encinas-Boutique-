// import React from 'react';
// import { useState } from 'react';
// import { Form, Input, Checkbox, Button } from 'antd';
// import Password from 'antd/es/input/Password';
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../../../firebase/authContext";
// const { TextArea } = Input;

// const Login = () => {

//     const navigate = useNavigate();
//     const {login, loginWithGoogle}= useAuth();
//     const { Item } = Form;

//     const [error, setError] = useState();

//     const [form, setForm] = useState({
//         email: '',
//         password: ''
//     });

//     const handlerChange = (name, value) => {
//         setForm({
//             ...form,
//             [name]: value
//         })
//     };

//     const handleSubmit = async (e)=>{
//         e.preventDefault();
//         try {
//             await login(form.email, form.password);
//             navigate('/home')
//         } catch (error) {
//             console.log(error.code)
//             if(error.code === 'auth/invalid-login-credentials'){
//                 setError("La contraseña o el E-mail son incorrectos.")

//                 }if(error.code === 'auth/too-many-requests'){
//                     setError("Su cuenta esta temporalmente bloqueada por multiples intententos fallidos, restaure su contraseña.")
//                 }
//             }
//     }

//     const handleGoogle = async()=>{
//         try {
//             await loginWithGoogle()
//             navigate('/home')
//         } catch (error) {
//             setError("Ha Ocurrido un error, inténtelo nuevamente.")
//         }

//     }
//     console.log(form);

//     return (
//         <div>
//             {/* {error && <p>{error}</p>}
//             {console.log("Contenido del error")} */}
//             <form onSubmit={handleSubmit}>
//                 <h1>Ingresar</h1>
//                 <Form.Item label="E-mail" name="email" rules={[{ marginTop: "5%", required: true, message: 'Ingrese el nombre'}]}>
//                     <Input name="email" value={form.email} onChange={(e) => handlerChange('email', e.target.value)} />
//                 </Form.Item>

//                 <Form.Item label="Contraseña" name="password" rules={[{ required: true, message: 'Ingrese el precio' }]}>
//                     <Password name="password" placeholder='Ingrese su contraseña...' value={form.password} onChange={(e) => handlerChange('password', e.target.value)} />
//                 </Form.Item>

//                 <div>
//                     <Button type="primary" htmlType="submit">Ingresar</Button>
//                     <Link to='/resetpassword'>Olvidé mi constraseña</Link>
//                     <Link to='/registeruser'><Button>Registrate</Button></Link>
//                     <Button onClick={handleGoogle}>Ingresa con Google</Button>
//                 </div>

//             </form>

//         </div>
//     )
// };

// export default Login;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../firebase/authContext";
import "./login.css";
import { Form, Input } from "antd";
import Password from "antd/es/input/Password";
const { TextArea } = Input;

const Login = () => {
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();
  const { Item } = Form;

  const [error, setError] = useState();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate("/home");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-login-credentials") {
        setError("La contraseña o el E-mail son incorrectos.");
      }
      if (error.code === "auth/too-many-requests") {
        setError(
          "Su cuenta está temporalmente bloqueada por múltiples intentos fallidos, restaure su contraseña."
        );
      }
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/home");
    } catch (error) {
      setError("Ha ocurrido un error, inténtelo nuevamente.");
    }
  };

  return (
    <div className="formPage">
      <form onSubmit={handleSubmit} className="form">
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <svg
            className="svgContainer"
            height="20"
            viewBox="0 0 32 32"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_3" data-name="Layer 3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
            </g>
          </svg>
          <Input
            name="email"
            placeholder="Ingrese su Email..."
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <svg
            className="svgContainer"
            height="20"
            viewBox="-64 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
          </svg>
          <Password
            name="password"
            placeholder="Ingrese su contraseña..."
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        <div className="flex-row">
          <Link to="/resetpassword">Olvidé mi constraseña</Link>
        </div>
        <button className="button-submit">Ingresar</button>
        <p className="p">
          No tenés cuenta? <Link to="/registeruser">Regístrate</Link>
        </p>
        <p className="p line">O con</p>
        <div className="flex-row">
          <button onClick={handleGoogle} className="btnGoogle">
            <svg viewBox="0 0 48 48" width="25" height="25">
              <clipPath id="g">
                <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
              </clipPath>
              <g className="colors" clipPath="url(#g)">
                <path fill="#FBBC05" d="M0 37V11l17 13z" />
                <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
              </g>
            </svg>
            Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
