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

import ControlPanel from './VIEWS/Admin/Views/ControlPanel/ControlPanel';
import Products from './VIEWS/Admin/Views/Products/Products';
import Payments from './VIEWS/Admin/Views/Payments/Payments';
import Orders from './VIEWS/Admin/Views/Orders/Orders';
import Clients from './VIEWS/Admin/Views/Clients/Clients';

const App = () => {

  const location = useLocation();

  const validate = location.pathname !== '/' && 
  location.pathname !== '/controlAdmin' && 
  location.pathname !== '/productsAdmin' &&
  location.pathname !== '/paymentsAdmin' &&
  location.pathname !== '/clientsAdmin' &&
  location.pathname !== '/ordersAdmin'
  
  return (
    <main className={style.mainCont}>
      {validate && <NavBar/>}
      <Routes> 
        <Route path='/' element={<Landing/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='detail/:id' element={<Detail/>} />  
        <Route path='createProduct' element={<FormProducts/>} />
        <Route path='registeruser' element={<FormUser/>} />
        <Route path='about' element={<AboutUs/>} />
        <Route path='*' element={<ErrorPage/>} />
        <Route path='/prueba' element={<Prueba/>} />

        <Route path='/controlAdmin' element={<ControlPanel/>} />
        <Route path='/productsAdmin' element={<Products/>} />
        <Route path='/paymentsAdmin' element={<Payments/>} />
        <Route path='/ordersAdmin' element={<Orders/>} />
        <Route path='/clientsAdmin' element={<Clients/>} />

      </Routes>
      {validate && <Footer/>}
    </main>
  )
}

export default App
