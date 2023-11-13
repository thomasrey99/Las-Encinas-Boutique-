import style from "./SearchBarProducts.module.css"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { addFilter } from "../../../../libs/redux/features/filterSelice"
import { useLocalStorage } from "../../../../Hooks/useLocalStorage"

import { Input , Space } from 'antd';

const SearchBarProducts = ({width}) => {

  const dispatch=useDispatch()

  const [name, setName]=useLocalStorage("")

  const [search, setSearch]=useState("")

  const handleChange=(event)=>{
    const {value}=event.target
    setName(value)
  }

  useEffect(() => {
    dispatch(addFilter({
        name:"name",
        value:name
      }))
      setSearch(name)
  }, [name])

  return (
    <Space wrap className={style.selectCont}>
    <label htmlFor='searchProduct'>Buscar por nombre</label>
        <Input
        placeholder='Buscar por nombre...' 
        name="search" 
        value={name} 
        onChange={handleChange}
        style={{
            width: width
          }}
        />
  </Space>
  )
}
export default SearchBarProducts