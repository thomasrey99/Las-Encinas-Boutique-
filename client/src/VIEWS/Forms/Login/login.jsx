import { useEffect, useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import Password from "antd/es/input/Password";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../firebase/authContext";
import { GoogleCircleFilled } from "@ant-design/icons";
import logo from "../../../assets/las_encinas_logo.png";
import "./login.css";
const { TextArea } = Input;
const URL_SERVER = import.meta.env.VITE_URL_SERVER; 
const Login = () => {

    const navigate = useNavigate();
    const {login, loginWithGoogle}= useAuth();
    const { Item } = Form;
    
    const [error, setError] = useState();

    
    
    const [form, setForm] = useState({
        email: '',
        password: '',
        isBlocked: false
    });

    useEffect(() => {
        // Aquí haces una solicitud al servidor para obtener la información del usuario
        // La respuesta de la solicitud debe incluir el estado de bloqueo del usuario
    
        
        fetch(`${URL_SERVER}/users?email=${form.email}`)
          .then((response) => response.json())
          .then((data) => {
            setForm({
              email: data.email,
              isBlocked: data.isBlocked,
            });
          })
          .catch((error) => {
            console.error('Error al obtener información del usuario', error);
          });
      }, [form.email]);
    

  const handlerChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (form.isBlocked) {
            navigate('/homeblocked')
          } else {
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

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 12,
      },
      sm: {
        span: 8,
      },
    },
    wapperCol: {
      xs: {
        span: 4,
      },
      sm: {
        span: 20,
      },
    },
  };

  return (
    <div className="formPage">
      {error && <p>{error}</p>}
            {/* {console.log("Contenido del error")} */}
      <form onSubmit={handleSubmit} className="form">
        <img src={logo} className="logoImg" />
        <Form.Item
          label="E-mail"
          name="email"
          {...formItemLayout}
          rules={[
            { marginTop: "5%", required: true, message: "Ingrese el nombre" },
          ]}
        >
          <Input
            name="email"
            placeholder="Ingrese su email..."
            value={form.email}
            onChange={(e) => handlerChange("email", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          {...formItemLayout}
          rules={[{ required: true, message: "Ingrese el precio" }]}
        >
          <Password
            name="password"
            placeholder="Ingrese su contraseña..."
            value={form.password}
            onChange={(e) => handlerChange("password", e.target.value)}
          />
        </Form.Item>

        <div>
          <Button type="primary" htmlType="submit" className="button-submit">
            Ingresar
          </Button>
          <div className="passwordReset">
            <Link to="/resetpassword">Olvidé mi constraseña</Link>
          </div>
          <div className="register">
            <Button className="btnregistry">
              {" "}
              <Link to="/registeruser">Registrate</Link>
            </Button>
            <Button onClick={handleGoogle} className="btnGoogle">
              <GoogleCircleFilled className="logoGoogle" /> Google
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
