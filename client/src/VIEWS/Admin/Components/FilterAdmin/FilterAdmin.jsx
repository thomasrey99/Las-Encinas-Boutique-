import style from "./FilterAdmin.module.css"
import ClearButton from "../../../../Components/FIlters/clearButton/ClearButton";
import SelectCategory from "../../../../Components/FIlters/selectCategory/selectCategory";
import Order from "../../../../Components/FIlters/selectOrder/Order";
import Type from "../../../../Components/FIlters/selectType/Type";

import { addFilter } from "../../../../libs/redux/features/filterSelice";

import {useDispatch} from "react-redux";


const FilterAdmin = () => {

  const dispatch=useDispatch()

  const handleChangeCategory=(value)=>{
    dispatch(addFilter({
      name:"category",
      value:value
    }))
  }
  const handleChangeOrder=(value)=>{
    dispatch(addFilter({
      name:"order",
      value:value
    }))
  }
  const handleChangeType=(value)=>{
    dispatch(addFilter({
      name:"type",
      value:value
    }))
  }

  return (
    <div className={style.filterCont}>
      <div className={style.filterItem}>
        <SelectCategory change={handleChangeCategory}/>
      </div>
      <div className={style.filterItem}>
        <Order change={handleChangeOrder}/>
      </div>
      <div className={style.filterItem}>
        <Type change={handleChangeType}/>
      </div>
      <div className={style.filterItem}>
        <ClearButton/>
      </div>
    </div>
  )
  
}

export default FilterAdmin