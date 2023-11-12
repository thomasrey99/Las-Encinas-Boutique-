import style from "./NavBar.module.css";
// import style from "./menu.module.css";
import menuStyle from "./menu.module.css"
import { useAuth } from "../../firebase/authContext";
import { NavLink } from "react-router-dom";


import HamburgerMenu from "../HamburgerMenu/menu";
import cartIcon from "../../assets/carrito.png";
import logo from "../../assets/Las_encinas_Logo.png";
import title from "../../assets/las_encinas_letras.png";
import flagUsa from "../../assets/Usa.png";
import flagArg from "../../assets/Arg.png";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../libs/redux/features/userSlice";
import { useEffect, useState } from "react";
import { addCart, cleanCart } from "../../libs/redux/features/CartSlice";
import { getUserByUid } from "../../libs/redux/features/actions/userActions";
import { useTranslation} from "react-i18next";

import { useCreateRequestMutation } from "../../libs/redux/services/requestApi";

const URL_SERVER = import.meta.env.VITE_URL_SERVER; 

const getUserById=async(id)=>{

  const responseUser=(await axios(`${URL_SERVER}/users/${id}`)).data
  const {id_Cart}=responseUser.Cart
  const responseCart=(await axios(`${URL_SERVER}/cart/${id_Cart}`)).data
  const response={
    user:responseUser,
    cart:responseCart
  }
  return response
}

const NavBar = ({handleOPen, isOPen}) => {

  const [mutate]=useCreateRequestMutation()

  const [madeRequest, setMadeRequest]=useState(false)

  const url = new URL(window.location.href);

  let status=url.searchParams.get("status")

  const { user, logout } = useAuth();
  const { t, i18n } = useTranslation("global");

 
  const dispatch = useDispatch();

  const cart=useSelector((state)=>state.cart)
  const totalItemsCart=useSelector((state)=>state.cart.product_quantity)
  const currentUser = useSelector(state => state.user.userLog)
  console.log("user actual:",currentUser)


  user && getUserByUid(user.uid)

  const handleOnClick = async () => {
    await logout();
  };



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

  useEffect(()=>{
    if(status==="approved" && currentUser && cart?.products.length!==0 && !madeRequest){
      const payment_id=url.searchParams.get("payment_id")
      mutate({
        payment_id:payment_id,
        id_user:currentUser.uid,
        products:cart.products,
        address:currentUser.address,
        total_amount:cart.total_price
      })
      dispatch(cleanCart())
      setMadeRequest(true)
    }
  },[currentUser])

  console.log("usuario registrado: ", currentUser)

  return (
    <nav className={style.navCont}>
        <div className={style.logCont}>
          <NavLink to='/home'><img src={logo} className={style.img}/></NavLink>   
          <NavLink to='/home'><img src={title} className={style.brand}/></NavLink>
        </div>
        <div className={style.navItems}>
          <NavLink to={"/cart"}>
            <div className={style.cartIconCont}>
              <img src={cartIcon} className={style.cartIcon}/>
              <p className={style.TotaItems}>{totalItemsCart}</p>
            </div>
          </NavLink>
          <div className={style.navLinks}>
              {!user&&<p>{t("navBar.not-costumer-yet?")} <NavLink to={"/registeruser"} onClick={handleOnClick} className={style.item}>{t("navBar.Register")}</NavLink></p>}
              {user&&<p>{`${t("navBar.Hello")} ${currentUser?.name}`}</p>}
          </div>
          <div className={menuStyle.menuCont}>
          <input
            type='checkbox'
            name="checkbox"
            checked={isOPen}
            id={menuStyle.checkbox}
          />
          <label htmlFor='checkbox' className={menuStyle.toggle} onClick={handleOPen}>
            <div className={menuStyle.bars} id={menuStyle.bar1}></div>
            <div className={menuStyle.bars} id={menuStyle.bar2}></div>
            <div className={menuStyle.bars} id={menuStyle.bar3}></div>
          </label>
        </div>
        <div className={style.languageButtons}>
        <button onClick={() => i18n.changeLanguage("es")}><img src={flagArg} alt="Argentina Flag" /></button>
          <button onClick={() => i18n.changeLanguage("en")}><img src={flagUsa} alt="US Flag" /></button>
        </div>
      {/* <div className={style.wrapper}>
      <div className={style.option}>
        <input
          checked={i18n.language === 'es'}
          onChange={() => i18n.changeLanguage('es')}
          type="radio"
          name="language"
          id="es"
          className={style.input}
        />
        <label htmlFor="es" className={style.btn}>
          <span className={style.span}>es</span>
        </label>
      </div>
      <div className={style.option}>
        <input
          checked={i18n.language === 'en'}
          onChange={() => i18n.changeLanguage('en')}
          type="radio"
          name="language"
          id="en"
          className={style.input}
        />
        <label htmlFor="en" className={style.btn}>
          <span className={style.span}>en</span>
        </label>
      </div>
        </div>          */}
    </div>

          
        
    </nav>
  );
};

export default NavBar;