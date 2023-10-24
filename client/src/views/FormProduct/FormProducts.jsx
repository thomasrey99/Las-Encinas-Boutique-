import React, { useState} from 'react'
// import { useDispatch } from "react-redux"

const FormProducts = () => {
    
    // Falta funcion que postee los productos
    // Falta conocer el modelo para añadir propiedades al state
    // falta un InitialState de los productos

    //const products = useSelector(state => state.productsBackUp) futura funcion que traiga la informacion de los
    //productos para hacer una barra desplegable de categorias, sabores, ect

    const [state, setState ] = useState({
        name: "",
        price: ""
        //ect
    });

    const buttonDisabled = () => {
        let disabled = false
        for (let s in state) {
            if (state[s] === "") {
                disabled = true;
                break;
            }
        }
        return disabled;
    }

    const resetState = () => {
        setState({
            name: "",
            price: ""
            //ect
        })
    }

    const handleChange = (e) => {
        
        let updatedValue = e.target.value;

        setState({
            ...state,
            [e.target.name]: updatedValue
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //dispatch(postProduct(state))
        resetState()
    } 

  return (
    <>
        <div>FormProducts</div>
        <form onSubmit={handleSubmit}>

            <label>Nombre: </label>
            <input placeholder='Elegir nombre...' name='name' type="text" value={state.name} onChange={handleChange} />
        
            <label>Precio: </label>
            <input placeholder='Elegir precio...' name='price' type="number" value={state.price} onChange={handleChange} />
        
            <button disabled={buttonDisabled()}>Crear producto</button>
        </form>
    </>
  )
}

export default FormProducts