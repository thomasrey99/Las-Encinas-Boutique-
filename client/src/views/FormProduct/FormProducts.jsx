import React, { useState} from 'react'
// import { useDispatch } from "react-redux"

import Style from "./FormProduct.module.css"

const FormProducts = () => {
    
    // Falta funcion que postee los productos
    // Falta conocer el modelo para añadir propiedades al state
    // falta un InitialState de los productos

    //const products = useSelector(state => state.productsBackUp) futura funcion que traiga la informacion de los
    //productos para hacer una barra desplegable de categorias, sabores, ect

    const [state, setState ] = useState({
        name: "",
        image: "",
        price: "",
        description: "",
        raiting: "",
        category: []
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
            image: "",
            price: "",
            description: "",
            raiting: "",
            category: []
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
        <form onSubmit={handleSubmit} className={Style.Form}>

            <label>Nombre: </label>
            <input placeholder='Elegir nombre...' name='name' type="text" value={state.name} onChange={handleChange} />

            <label>Imagen: </label>
            <input placeholder='Elegir imagen...' name='image' type="file" value={state.image} onChange={handleChange} />
        
            <label>Precio: </label>
            <input placeholder='Elegir precio...' name='price' type="number" value={state.price} onChange={handleChange} />
        
            <label>Descripcion: </label>
            <input placeholder='Elegir descripcion...' name='description' type="text" value={state.description} onChange={handleChange} />
        
            <label>Raiting: </label>
            <input placeholder='Elegir raiting...' name='raiting' type="number" value={state.raiting} onChange={handleChange} />
        
            <label>Categoria: </label>
            <input placeholder='Elegir categoria...' name='category' type="text" value={state.category} onChange={handleChange} />
        
            <button disabled={buttonDisabled()}>Crear producto</button>
        </form>
    </>
  )
}

export default FormProducts