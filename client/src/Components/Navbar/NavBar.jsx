import style from "./NavBar.module.css";
import { useAuth } from "../../firebase/authContext";
import { Link, NavLink } from "react-router-dom"
import HamburguerMenu from "../HamburgerMenu/menu";
import cart from "../../assets/carrito.png"
import logo from "../../assets/Las_encinas_Logo.png"

const NavBar = () => {
  const {user, logout}= useAuth() //Esto trae la info del usuario que está logeado actualmente
  const handleOnClick = async()=>{
    await logout();
  }

  console.log(user&&user)
  return (
    <nav className={style.navCont}>
        <div className={style.logCont}>
          <img src={logo} className={style.img}/>
        </div>  
        <div className={style.navItems}>
          {user && ((user.displayName? <p>Bienvenido(a):{user.displayName}</p>: <p>Bienvenido(a):{user.email}</p>)) }
          <Link to={"/cart"}><img src={cart} className={style.cartIcon}/></Link>
          <div className={style.navLinks}>
              <NavLink to={"/home"} className={style.item}>Pagina Principal</NavLink>
              <NavLink to={"/about"} className={style.item}>Conócenos</NavLink>
              <NavLink to={"/controlAdmin"} className={style.item}>Dashboard</NavLink>
              {user?<NavLink to={"/home"} onClick={handleOnClick} className={style.item}>Cerrar Sesión</NavLink>:<NavLink to={"/login"} className={style.item}>Inicia sesión</NavLink>}
              <HamburguerMenu/>
          </div>
        </div>
    </nav>
  )
}

export default NavBar;