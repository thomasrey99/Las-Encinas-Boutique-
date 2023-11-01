import style from "./NavBar.module.css";
import { useAuth } from "../../firebase/authContext";
import { NavLink } from "react-router-dom"
import cart from "../../assets/carrito.png"
import logo from "../../assets/Las_encinas_Logo.png"

const NavBar = () => {
  const {user}= useAuth() //Esto trae la info del usuario que está logeado actualmente
  return (
    <nav className={style.navCont}>
        <div className={style.logCont}>
          <img src={logo} className={style.img}/>
          
        </div>  
        <div className={style.navItems}>
          {user && <p>Bienvenido(a):{user.email}</p>}
          <img src={cart} className={style.cartIcon}/>
          <div className={style.navLinks}>
              <NavLink to={"/home"} className={style.item}>Pagina Principal</NavLink>
              <NavLink to={"/about"} className={style.item}>Conócenos</NavLink>
              <NavLink to={"/createProduct"} className={style.item}>Crear producto</NavLink>
              <NavLink to={"/registeruser"} className={style.item}>Registrarse aquí</NavLink>
          </div>
        </div>
    </nav>
  )
}

export default NavBar;