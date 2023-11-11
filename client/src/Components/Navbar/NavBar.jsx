import style from "./NavBar.module.css";
<<<<<<< HEAD
=======
// import style from "./menu.module.css";
>>>>>>> develop
import menuStyle from "./menu.module.css"
import { useAuth } from "../../firebase/authContext";
import { NavLink } from "react-router-dom";

<<<<<<< HEAD
import HamburgerMenu from "../HamburgerMenu/menu";
import cart from "../../assets/carrito.png";
=======

import HamburgerMenu from "../HamburgerMenu/menu";
import cartIcon from "../../assets/carrito.png";
>>>>>>> develop
import logo from "../../assets/Las_encinas_Logo.png";
import title from "../../assets/las_encinas_letras.png";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../libs/redux/features/userSlice";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import { addCart } from "../../libs/redux/features/CartSlice";
import { getUserByUid } from "../../libs/redux/features/actions/userActions";


const getUserById=async(id)=>{

  const responseUser=(await axios(`https://las-encinas-boutique-server.onrender.com/users/${id}`)).data
  const {id_Cart}=responseUser.Cart
  const responseCart=(await axios(`https://las-encinas-boutique-server.onrender.com/cart/${id_Cart}`)).data
=======
import { addCart, cleanCart } from "../../libs/redux/features/CartSlice";
import { getUserByUid } from "../../libs/redux/features/actions/userActions";
import { useCreateRequestMutation } from "../../libs/redux/services/requestApi";

const URL_SERVER = import.meta.env.VITE_URL_SERVER; 

const getUserById=async(id)=>{

  const responseUser=(await axios(`${URL_SERVER}/users/${id}`)).data
  const {id_Cart}=responseUser.Cart
  const responseCart=(await axios(`${URL_SERVER}/cart/${id_Cart}`)).data
>>>>>>> develop
  const response={
    user:responseUser,
    cart:responseCart
  }
  return response
}

const NavBar = ({handleOPen, isOPen}) => {

<<<<<<< HEAD
=======
  const [mutate]=useCreateRequestMutation()

  const [madeRequest, setMadeRequest]=useState(false)

  const url = new URL(window.location.href);

  let status=url.searchParams.get("status")

>>>>>>> develop
  const { user, logout } = useAuth();
  
 
  const dispatch = useDispatch();

<<<<<<< HEAD
  
  const totalItemsCart=useSelector((state)=>state.cart.product_quantity)
  const currentUser = useSelector(state => state.user.userLog)
  console.log("user actuallllllllll:",currentUser?.is_Admin)
=======
  const cart=useSelector((state)=>state.cart)
  const totalItemsCart=useSelector((state)=>state.cart.product_quantity)
  const currentUser = useSelector(state => state.user.userLog)
  // console.log("user actuallllllllll:",currentUser?.is_Admin)
>>>>>>> develop


  user && getUserByUid(user.uid)

  const handleOnClick = async () => {
    await logout();
  };
<<<<<<< HEAD
  
=======



>>>>>>> develop
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

<<<<<<< HEAD
  return (
    <nav className={style.navCont}>
        <div className={style.logCont}>
          <img src={logo} className={style.img}/>
=======
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
          <NavLink to='/'><img src={logo} className={style.img}/></NavLink>   
>>>>>>> develop
          <img src={title} className={style.brand}/>
        </div>
        <div className={style.navItems}>
          <NavLink to={"/cart"}>
            <div className={style.cartIconCont}>
<<<<<<< HEAD
              <img src={cart} className={style.cartIcon}/>
=======
              <img src={cartIcon} className={style.cartIcon}/>
>>>>>>> develop
              <p className={style.TotaItems}>{totalItemsCart}</p>
            </div>
          </NavLink>
          <div className={style.navLinks}>
              {!user&&<p>¿Aun no sos cliente? <NavLink to={"/registeruser"} onClick={handleOnClick} className={style.item}>Resgistrate</NavLink></p>}
              {user&&<p>{`Hola de nuevo ${currentUser?.name}`}</p>}
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
        </div>
        
    </nav>
  );
};

export default NavBar;

