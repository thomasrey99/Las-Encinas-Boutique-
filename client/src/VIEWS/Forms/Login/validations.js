const validatesLogin=(data)=>{

    const {email, password}=data

    let errors={}

    const regexEmail = /.*@.*\.com$/

    //!validaciones de email

    if(email.length===0){
        errors.emptyEmail="Coloque su email"
    }

    if(email.length!==0 && !regexEmail.test(email)){
        errors.invalidEmail="El formato de email es invalido"
    }

    //!validaciones de Password

    if(password.length===0){
        errors.emptyPassword="Coloque una contraseña"
    }

    if(password.length!==0 && password.length<8){
        errors.smallPassword="La contraseña debe contener al menos 8 caracteres"
    }

    return errors
}

export default validatesLogin