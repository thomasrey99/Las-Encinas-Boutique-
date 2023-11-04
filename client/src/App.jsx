import style from './App.module.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './VIEWS/Home/Home';
import Landing from './VIEWS/Landing/Landing';
import Detail from './VIEWS/Detail/detail';
import NavBar from './Components/Navbar/NavBar';
import FormProducts from './VIEWS/FormProduct/FormProducts';
import FormUser from './VIEWS/Forms/FormsUser/user';
import AboutUs from './VIEWS/AboutUs/aboutUs';
import ErrorPage from './Components/ErrorPage/errorPage';
import Footer from './Components/Footer/footer';
import Login from './VIEWS/Forms/Login/login';
import Register from './VIEWS/Forms/Register/Register';
import { AuthProvider } from './firebase/authContext';
import LoginFirebase from './VIEWS/Forms/LoginFirebase/LoginFirebase';
import { ProtectedRoute } from './firebase/ProtectedRoute'; //Envuelve a rutas que necesitan autenticación
import FormResetPassword from './VIEWS/Forms/FormResetPassword/FormResetPassword';
import {Cart} from "./VIEWS/cart/Cart"
//Admin
import ControlPanel from './VIEWS/Admin/Views/ControlPanel/ControlPanel';
import Products from './VIEWS/Admin/Views/Products/Products';
import Payments from './VIEWS/Admin/Views/Payments/Payments';
import Orders from './VIEWS/Admin/Views/Orders/Orders';
import Clients from './VIEWS/Admin/Views/Clients/Clients';

const App = () => {
  const userRole = "admin" //Esta información se obtendrá de la Base de datos.
                           //Esto solo es una prueba.
  const location = useLocation();

  const validate =
  location.pathname !== '/controlAdmin' && 
  location.pathname !== '/productsAdmin' &&
  location.pathname !== '/paymentsAdmin' &&
  location.pathname !== '/clientsAdmin' &&
  location.pathname !== '/ordersAdmin'
  
  return (
    <main className={style.mainCont}>
      
      
      {/* AuthProvider es un contexto que permite saber cuando un usuario está logeado */}
      <AuthProvider>
        {validate && <NavBar />}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='home' element={<Home />} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='createProduct' element={<FormProducts />} />
          <Route path='registeruser' element={<Register />} />
          <Route path='about' element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
          <Route path='login' element={<Login/>} />
          <Route path='resetpassword' element={<FormResetPassword />} />
          <Route path='/cart' element={<Cart/>}/>
          {/* Rutas protegidas del admin */}
          {userRole === 'admin' ? <Route path='/controlAdmin' element={<ControlPanel />} /> : <Route path='/controlAdmin' element={<ErrorPage />} />}
          <Route path='/productsAdmin' element={<Products />} />
          <Route path='/paymentsAdmin' element={<Payments />} />
          <Route path='/ordersAdmin' element={<Orders />} />
          <Route path='/clientsAdmin' element={<Clients />} />
        </Routes>
        {validate && <Footer />}
      </AuthProvider>
     
       
    </main>
  )
}

export default App
