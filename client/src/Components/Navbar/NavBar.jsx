import style from "./NavBar.module.css";
import { useAuth } from "../../firebase/authContext";
import { NavLink } from "react-router-dom";
import HamburguerMenu from "../HamburgerMenu/menu";
import cart from "../../assets/carrito.png";
import logo from "../../assets/Las_encinas_Logo.png";
import title from "../../assets/las_encinas_letras.png";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../libs/redux/features/userSlice";
import { useEffect } from "react";
import { addCart } from "../../libs/redux/features/CartSlice";

const getUserById = async (id) => {
  const responseUser = (await axios(`http://localhost:3001/users/${id}`)).data;
  const { id_Cart } = responseUser.Cart;
  const responseCart = (await axios(`http://localhost:3001/cart/${id_Cart}`))
    .data;
  const response = {
    user: responseUser,
    cart: responseCart,
  };
  return response;
};

const NavBar = () => {
  const dispatch = useDispatch();

  const totalItemsCart = useSelector((state) => state.cart.product_quantity);

  const { user, logout } = useAuth();

  const handleOnClick = async () => {
    await logout();
  };
  const currentUser = "Admin";
  useEffect(() => {
    const getUserData = async () => {
      if (user) {
        const { uid } = user;
        try {
          const response = await getUserById(uid);
          dispatch(addUser(response.user));
          dispatch(addCart(response.cart));
        } catch (error) {
          console.error("Error al obtener datos del usuario", error);
        }
      }
    };

    getUserData();
  }, [dispatch, user]);

  return (
    <nav className={style.navCont}>
      <div className={style.logCont}>
        <img src={logo} className={style.img} />
        <img src={title} className={style.brand} />
      </div>
      <div className={style.navItems}>
        {user &&
          (user.displayName ? (
            <p>Bienvenido(a):{user.displayName}</p>
          ) : (
            <p>Bienvenido(a):{user.email}</p>
          ))}
        <NavLink to={"/cart"}>
          <div className={style.cartIconCont}>
            <img src={cart} className={style.cartIcon} />
            <p className={style.TotaItems}>{totalItemsCart}</p>
          </div>
        </NavLink>
        <div className={style.navLinks}>
          <NavLink to={"/home"} className={style.item}>
            Pagina Principal
          </NavLink>
          <NavLink to={"/about"} className={style.item}>
            Conócenos
          </NavLink>
          {currentUser === "Admin" && (
            <NavLink to={"/controlAdmin"} className={style.item}>
              Dashboard
            </NavLink>
          )}

          {user ? (
            <NavLink
              to={"/home"}
              onClick={handleOnClick}
              className={style.item}
            >
              Cerrar Sesión
            </NavLink>
          ) : (
            <NavLink to={"/login"} className={style.item}>
              Inicia sesión
            </NavLink>
          )}
          <HamburguerMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
