import { NavLink, Navigate } from "react-router-dom"
import style from "./Menu.module.css"
import { useAuth } from "../../firebase/authContext";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../libs/redux/features/userSlice";
import { addCart } from "../../libs/redux/features/CartSlice";
import { useTranslation } from "react-i18next";

const Menu = ({handleOPen}) => {

  const { t } = useTranslation("global");
  
  const dispatch=useDispatch()

  const { user, logout } = useAuth();

  const currentUser = useSelector(state => state.user.userLog)
  console.log(currentUser);
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
                <li><NavLink to={"/profile"} className={style.link} onClick={handleOPen}>{t("menu.Profile")}</NavLink></li>
                <li><NavLink to={"/favorites"} className={style.link} onClick={handleOPen}>{t("menu.Favorite-products")}</NavLink></li>
                <li><NavLink to={"/home"} className={style.link} onClick={handleOPen}>{t("menu.Homepage")}</NavLink></li>
                <li><NavLink to={"/about"} className={style.link} onClick={handleOPen}>{t("menu.Meet-us")}</NavLink></li>
                {user?<NavLink to={"/home"} onClick={handleOnClick} className={style.link}>{t("menu.Log-off")}</NavLink>:<NavLink to={"/login"} className={style.link} onClick={handleOPen}>{t("menu.Log-in")}</NavLink>}
                <li>{((user) && (currentUser?.is_Admin === true)) && <NavLink to={"/controlAdmin"}  className={style.link} onClick={handleOPen}>{t("menu.Administrator-Panel")}</NavLink>}</li>
            </ul>
        </div>
    </section>
  )
}

export default Menu
