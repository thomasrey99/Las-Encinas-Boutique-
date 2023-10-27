const Validates = (form, errors, setErrors) => {

    if (form.name) {
        
        if (/^[A-Z][a-z]*$/.test(form.name)) {
            setErrors((prev) =>({...prev, name: ''}))
        } else {
            setErrors((prev) => ({...prev, name: '*Nombre inválido'}))
        }        
}; 

    if (form.last_name) {
    
        if (/^[A-Z][a-z]*(?:\s[A-Z][a-z]*)*$/.test(form.last_name)) {
            setErrors((prev) =>({...prev, last_name: ''}))
        } else {
            setErrors((prev) => ({...prev, last_name: '*Apellido inválido'}))
        };   
};

};

export default Validates;