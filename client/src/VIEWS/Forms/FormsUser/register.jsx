import style from "./registerUserForm.module.css"
import { NavLink } from "react-router-dom";

const RegisterUserForm = ({change, submit, errors, isSeting, errorsNotification, info}) => {
  
  

  const numberOfKeys = Object.keys(errors).length;


  
  console.log(errors)
  return (
    <form className={style.form}>

        {numberOfKeys>0 && isSeting &&  <div className={style.infoIcon} onClick={errorsNotification}><span onClick={errorsNotification} className="material-symbols-outlined">info</span></div>}
        
        <p className={style.title}>Registrar usuario</p>
        <div className={style.flex}>
            {
                isSeting && (errors.emptyName||errors.invalidName||errors.longName) ? (
                    <label className={style.errorValidationInput}>
                        <input className={style.input} value={info.name} name="name" type="text" placeholder="" required="" onChange={change}/>
                        <span>Nombre</span>
                    </label>
                )
                :
                (
                    <label>
                        <input className={style.input} value={info.name} name="name" type="text" placeholder="" required="" onChange={change}/>
                        <span>Nombre</span>
                    </label>
                )
            }
            {
                isSeting && (errors.emptyLastName || errors.invalidLastName || errors.longLastNam) ?
                (
                    <label className={style.errorValidationInput}>
                        <input className={style.input} value={info.lastName} name="lastName" type="text" placeholder="" required="" onChange={change}/>
                        <span>Apellido</span>
                    </label>
                )
                :
                (
                    <label>
                        <input className={style.input} value={info.lastName} name="lastName" type="text" placeholder="" required="" onChange={change}/>
                        <span>Apellido</span>
                    </label>
                )
            }
        </div>
        {
            isSeting && (errors.emptyEmail || errors.invalidEmail) ?
            (
                <label className={style.errorValidationInput}>
                    <input className={style.input} value={info.email} name="email" type="email" placeholder="" required="" onChange={change}/>
                    <span>Email</span>
                </label>
            )
            :
            (
                <label>
                    <input className={style.input} value={info.email} name="email" type="email" placeholder="" required="" onChange={change}/>
                    <span>Email</span>
                </label>
            )
        }
        {
            isSeting && (errors.emptyPhone || errors.invalidPhone || errors.longPhone) ?
            (
                <label className={style.errorValidationInput}>
                    <input className={style.input} value={info.phone} name="phone" type="number" placeholder="" required="" onChange={change}/>
                    <span>Telefono</span>
                </label>
            )
            :
            (
                <label>
                    <input className={style.input} value={info.phone} name="phone" type="number" placeholder="" required="" onChange={change}/>
                    <span>Telefono</span>
                </label>
            )
        }
        {
            isSeting && (errors.emptyAddress || errors.longAddress) ?
            (
                <label className={style.errorValidationInput}>
                    <input className={style.input} value={info.address} name="address" type="text" placeholder="" required="" onChange={change}/>
                    <span>Direccion</span>
                </label>
            )
            :
            (
                <label>
                    <input className={style.input} value={info.address} name="address" type="text" placeholder="" required="" onChange={change}/>
                    <span>Direccion</span>
                </label>
            )
        }
        {
            isSeting && (errors.emptyPassword || errors.smallPassword) ?
            (
                <label className={style.errorValidationInput}>
                    <input className={style.input} value={info.password} name="password" type="password" placeholder="" required="" onChange={change}/>
                    <span>Contraseña</span>
                </label>
            )
            :
            (
                <label>
                    <input className={style.input} value={info.password} name="password" type="password" placeholder="" required="" onChange={change}/>
                    <span>Contraseña</span>
                </label>
            )
        }
        <button className={style.submit} onClick={submit}>Registrar</button>
        <p className={style.signin}>Ya tienes una cuenta? <NavLink>Login</NavLink> </p>
    </form>
  )
}
export default RegisterUserForm