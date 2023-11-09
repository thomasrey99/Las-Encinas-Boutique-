import { NavLink, Navigate } from "react-router-dom"
import style from "./Menu.module.css"
import { useAuth } from "../../firebase/authContext";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../libs/redux/features/userSlice";
import { addCart } from "../../libs/redux/features/CartSlice";

const Menu = ({handleOPen}) => {
  
  const dispatch=useDispatch()

  const { user, logout } = useAuth();

  const currentUser = useSelector(state => state.user.userLog)
  const handleOnClick = async () => {
    await logout();
    dispatch(addUser(null))
    dispatch(addCart({
        id_Cart:"",
        products:[],
        product_quantity:0,
        total_price:0
    }))
    handleOPen()
    Navigate("/home")
  };

  return (
    <section className={style.menuCont}>
        <div className={style.itemsCont}>
            <ul className={style.itemsList}>
                <li><NavLink to={"/home"} className={style.link} onClick={handleOPen}>Perfil</NavLink></li>
                <li><NavLink to={"/favorites"} className={style.link} onClick={handleOPen}>Productos favoritos</NavLink></li>
                <li><NavLink to={"/home"} className={style.link} onClick={handleOPen}>Pagina principal</NavLink></li>
                <li><NavLink to={"/about"} className={style.link} onClick={handleOPen}>Conócenos</NavLink></li>
                {user?<NavLink to={"/home"} onClick={handleOnClick} className={style.link}>Cerrar Sesión</NavLink>:<NavLink to={"/login"} className={style.link} onClick={handleOPen}>Inicia sesión</NavLink>}
                <li>{((user) && (currentUser?.is_Admin === true)) && <NavLink to={"/controlAdmin"}  className={style.link} onClick={handleOPen}>Panel de Administrador</NavLink>}</li>
            </ul>
        </div>
    </section>
  )
}

export default Menu
