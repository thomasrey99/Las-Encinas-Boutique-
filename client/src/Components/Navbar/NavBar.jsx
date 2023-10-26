import style from "./NavBar.module.css";
import { Searchbar } from "../searchBar/Searchbar";
import { NavLink } from "react-router-dom"
import cart from "../../assets/carrito.png"
import logo from "../../assets/muffin.png"
const NavBar = () => {
  return (
    <nav className={style.navCont}>
        <div className={style.logCont}>
          <img src={logo} className={style.img}/>
        </div>
        <Searchbar/>
        <div className={style.navLinks}>
            {/*<NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>*/}
        </div>
    </nav>
  )
}

export default NavBar;