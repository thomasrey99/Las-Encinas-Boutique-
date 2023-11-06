import React from 'react'
import Style from './TextCardAdmin.module.css'


const TextCardAdmin = ({name, info}) => {

  return (
    <div className={Style.Card}>
        <p>{name}</p>
        <p className={Style.p1} style={{fontSize: "200%", color: "#582f0e"}} >{info}</p>
    </div>
  )
}

export default TextCardAdmin