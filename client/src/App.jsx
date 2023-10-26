import './App.css'
import {useSelector, useDispatch} from "react-redux"
import { useGetAllProductsQuery } from './libs/redux/services/productsApi'
import { useEffect } from 'react'
import { addProducts } from './libs/redux/features/productsSlice'
import { Routes, Route } from 'react-router-dom';
import Home from './VIEWS/Home/home';
import Landing from './VIEWS/Landind/landig';
import Detail from './VIEWS/Detail/detail';

function App() {
  
  const dispatch=useDispatch()

  const {data}=useGetAllProductsQuery()

  const products=useSelector((state)=>state.items.allProducts)
  
  

  useEffect(()=>{
    dispatch(addProducts(data))
  },[data])

  console.log("productos en el estado",products)
  return (
    <main>
      <Routes> 
        <Route path='/' element={<Landing/>} />
        <Route path='home' element={<Home/>} />
        <Route path='detail/:id' element={<Detail/>} />  
        {/* agregar un about con descripcion del negocio, y presentacion del equipo (about Us)        */}
      </Routes>
    </main>
  )
}

export default App
