import './App.css'
import {useSelector, useDispatch} from "react-redux"
import { useGetAllProductsQuery } from './libs/redux/services/productsApi'
import { useEffect } from 'react'
import { addProducts } from './libs/redux/features/productsSlice'
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
      <h1>hola mundo!!</h1>
    </main>
  )
}

export default App
