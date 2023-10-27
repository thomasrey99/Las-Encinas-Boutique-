const Validates = (form, errors, setErrors) => {
    /^381\d{7}$/

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

if (form.address) {
    
    if (/^[A-Z][A-Za-z0-9\s]*$/.test(form.address)) {
        setErrors((prev) =>({...prev, address: ''}))
    } else {
        setErrors((prev) => ({...prev, address: '*Dirección inválida'}))
    };   
};

if (form.address) {
    
    if (/^[A-Z][A-Za-z0-9\s]*$/.test(form.address)) {
        setErrors((prev) =>({...prev, address: ''}))
    } else {
        setErrors((prev) => ({...prev, address: '*Dirección inválida'}))
    };   
};

if (form.email) {
    
    if (/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(form.email)) {
        setErrors((prev) =>({...prev, email: ''}))
    } else {
        setErrors((prev) => ({...prev, email: '*Dirección inválida'}))
    };   
};

if (form.phone) {
    
    if (/^381\d{7}$/.test(form.phone)) {
        setErrors((prev) =>({...prev, phone: ''}))
    } else {
        setErrors((prev) => ({...prev, phone: '*Dirección inválida'}))
    };   
};

if (form.password) {
    
    if (/^[a-zA-Z0-9]+$/.test(form.password)) {
        setErrors((prev) =>({...prev, password: ''}))
    } else {
        setErrors((prev) => ({...prev, password: '*Dirección inválida'}))
    };   
};
};

export default Validates;