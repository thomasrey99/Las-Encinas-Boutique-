import searchIcon from "../../assets/search.png"
import style from "./Searchbar.module.css"
import { useEffect, useState } from "react"
import { useGetAllProductsQuery } from "../../libs/redux/services/productsApi"
import { addProducts } from "../../libs/redux/features/productsSlice"
import { useDispatch, useSelector } from "react-redux"

export const Searchbar = () => {

  const dispatch=useDispatch()

  const products=useSelector((state)=>state.items.allProducts)

  const [name, setName]=useState("")

  const [search, setSearch]=useState("")

  const {data, isLoading}=useGetAllProductsQuery(search)


  const handleChange=(event)=>{
    const {value}=event.target
    setName(value)
  }

  const handleSearch=()=>{
    setSearch(name)
  }

  useEffect(()=>{
    dispatch(addProducts(data))
  }, [search, data])

  console.log(products)
  console.log(isLoading)
  return (
    <div className={style.searchCont}>
        <div className={style.inputCont}>
          <input type="text" value={name} className={style.input} onChange={handleChange}/>
          <button className={style.button} onClick={handleSearch}><img src={searchIcon} className={style.img}/></button>
        </div>
    </div>
  )
}
