import Style from './Cards.module.css'

import Card from "../Card/Card"

import {useSelector} from "react-redux"


const Cards = () => {

  const isSearch=useSelector(state=>state.filters)
  const products=useSelector((state)=>state.items.allProducts)
  console.log("estoy en cards", isSearch)
  return (
    <div className={Style.Container}>
        {products?.map(props => (
        <Card key={props.id} props={props}
        />))}
    </div> 
  )
}

export default Cards