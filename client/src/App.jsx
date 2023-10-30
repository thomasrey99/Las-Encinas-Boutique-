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
import Prueba from './Components/Prueba/Prueba';

const App = () => {

  const location = useLocation();

  
  return (
    <main className={style.mainCont}>
      {location.pathname !== '/' && <NavBar/>}
      <Routes> 
        <Route path='/' element={<Landing/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='detail/:id' element={<Detail/>} />  
        <Route path='createProduct' element={<FormProducts/>} />
        <Route path='registeruser' element={<FormUser/>} />
        <Route path='about' element={<AboutUs/>} />
        <Route path='*' element={<ErrorPage/>} />
        <Route path='/prueba' element={<Prueba/>} />
      </Routes>
      {location.pathname !== '/' && <Footer/>}
    </main>
  )
}

export default App
