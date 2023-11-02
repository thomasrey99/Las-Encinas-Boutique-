import style from './App.module.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './VIEWS/Home/Home';
import Landing from './VIEWS/Landind/Landig';
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
const App = () => {

  const location = useLocation();

  
  return (
    <main className={style.mainCont}>
      
      
      {/* AuthProvider es un contexto que permite saber cuando un usuario está logeado */}
      <AuthProvider> 
      {location.pathname !== '/' && <NavBar/>}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='home' element={<Home />} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='createProduct' element={<FormProducts />} />
          <Route path='registeruser' element={<Register />} />
          <Route path='about' element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
          <Route path='login' element={<LoginFirebase />} />
          <Route path='resetpassword' element={<FormResetPassword/>} />
        </Routes>
        {location.pathname !== '/' && <Footer/>} 
      </AuthProvider>
     
       
    </main>
  )
}

export default App
