const Validates = (data) => {

    const {name, lastName, address, email, phone, password}=data

    let errors={}

    const regex=/^[A-Za-z\s]+$/u

    const regexEmail = /.*@.*\.com$/

    const regexPhone = /^[0-9+()]+$/

    //!validaciones de Name

    if(name.length===0){
        errors.emptyName="Coloque su nombre"
    }

    if(name.length!==0 && !regex.test(name)){
        errors.invalidName="El nombre no puede contener caracteres especiales"
    }

    if(name.length>30){
        errors.longName="El nombre no puede contener mas de 30 caracteres"
    }

    //!validaciones del lastName
    if(lastName.length===0){
        errors.emptyLastName="Coloque su apellido"
    }

    if(lastName.length!==0 && !regex.test(lastName)){
        errors.invalidLastName="El apellido no puede contener caracteres especiales"
    }

    if(lastName.length>20){
        errors.longLastName="El apellido no puede contener mas de 20 caracteres"
    }


    //!validaciones de address
    if(address.length===0){
        errors.emptyAddress="Coloque su direccion"
    }

    if(address.length>50){
        errors.longAddress="El apellido no puede contener mas de 50 caracteres"
    }

    //!validaciones de email

    if(email.length===0){
        errors.emptyEmail="Coloque su email"
    }

    if(email.length!==0 && !regexEmail.test(email)){
        errors.invalidEmail="El formato de email es invalido"
    }

    //!validaciones de Phone

    if (phone.length === 0) {
        errors.emptyPhone = "Coloque su numero de telefono";
      } else if (phone.length > 0 && phone.length < 15 && !regexPhone.test(phone)) {
        errors.invalidPhone = "El numero de telefono es invalido";
      } else if (phone.length > 15) {
        errors.longPhone = "El numero es demasiado largo";
      }
    
    //!validaciones de Password

    if(password.length===0){
        errors.emptyPassword="Coloque una contraseña"
    }

    if(password.length!==0 && password.length<8){
        errors.smallPassword="La contraseña debe contener al menos 8 caracteres"
    }

    return errors
};

export default Validates;