import { NavLink } from "react-router-dom"
import style from "./loginForm.module.css"

const LoginForm = ({loginGoogle, submit, change, data, validates, isSeting, numberKeys, errorsNotifications}) => {

  console.log("errores", validates)



  return (
    <form className={style.form} onSubmit={submit}>
      {numberKeys>0 && isSeting &&  <div className={style.infoIcon} onClick={errorsNotifications}><span className="material-symbols-outlined" onClick={errorsNotifications}>info</span></div>}
      <p className={style.title}>Iniciar sesion</p>
      {
        isSeting && (validates.emptyEmail || validates.invalidEmail) ?
        (
          <label className={style.errorValidationInput}>
            <input className={style.input} value={data.email} name="email" type="text" placeholder="" required="" onChange={change}/>
            <span>Email</span>
          </label>
        )
        :
        (
          <label>
            <input className={style.input} value={data.email} name="email" type="text" placeholder="" required="" onChange={change}/>
            <span>Email</span>
          </label>
        )
      }
      {
        isSeting && (validates.emptyPassword || validates.smallPassword) ?
        (
          <label className={style.errorValidationInput}>
            <input name="password" value={data.password} required="" placeholder="" type="password" className={style.input} onChange={change}/>
            <span>Password</span>
          </label>
        )
        :
        (
          <label>
            <input name="password" value={data.password} required="" placeholder="" type="password" className={style.input} onChange={change}/>
            <span>Password</span>
          </label>
        )
      }
      <p className={style.signin}>¿Olvidaste tu contraseña? <NavLink to={"/registeruser"} className={style.signin}>Recuperar</NavLink></p>   
      
      <button className={style.submit} type="submit">Submit</button>
      <p className={style.signin}>¿No tienes una cuenta? <NavLink to={"/registeruser"} className={style.signin}>Registrate</NavLink></p>
      <p className={style.signin}>O accede con</p>
      <button
            className={style.btn}
            onClick={loginGoogle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              width="20"
              id="Layer_1"
              x="0px"
              y="0px"
              xmlSpace="preserve"
            >
              <path
                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                  c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                  C103.821,274.792,107.225,292.797,113.47,309.408z"
                style={{ fill: "#FBBB00" }}
              />
              <path
                d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                  c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                  c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                style={{ fill: "#518EF8" }}
              />
              <path
                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                  c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                  c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                style={{ fill: "#28B446" }}
              />
              <path
                d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                  c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                  C318.115,0,375.068,22.126,419.404,58.936z"
                style={{ fill: "#F14336" }}
              />

            </svg>{" "}
            Google
          </button>
    </form>

  )
}

export default LoginForm
