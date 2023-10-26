import './App.css'
import {useSelector, useDispatch} from "react-redux"
import { useGetAllProductsQuery } from './libs/redux/services/productsApi'
import { useEffect } from 'react'
import { addProducts } from './libs/redux/features/productsSlice'
function App() {
  
  const dispatch=useDispatch()

  const products=useSelector((state)=>state.items.allProducts)
  
  const {data}=useGetAllProductsQuery()

  useEffect(()=>{
    dispatch(addProducts(data))
  },[])

  console.log("productos en el estado",products)
  return (
    <main>
      <h1>hola mundo!!</h1>
    </main>
  )
}

export default App
