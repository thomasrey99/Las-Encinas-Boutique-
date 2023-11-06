import Style from "./FilterAdmin.module.css"
import ClearButton from "./clearButton/ClearButton";
import SelectCategory from "./selectCategory/selectCategory";
import Order from "./selectOrder/Order";
import Type from "./selectType/Type";
import RangePrice from "./rangePrice/rangePrice";
import { addFilter } from "../../libs/redux/features/filterSelice";
import { useSelector, useDispatch} from "react-redux";


const FilterAdmin = () => {

  const dispatch=useDispatch()
  
  const filters=useSelector((state)=>state.filters)

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

  const handleMinPrice=(value)=>{
    if(value!==null){
      dispatch(addFilter({
        name:"minPrice",
        value:value
      }))
    }else{
      dispatch(addFilter({
        name:"minPrice",
        value:""
      }))
    }
  }

  const handleMaxPrice=(value)=>{
    if(value!==null){
      dispatch(addFilter({
        name:"maxPrice",
        value:value
      }))
    }else{
      dispatch(addFilter({
        name:"maxPrice",
        value:""
      }))
    }
  }

  return (
    <div className={Style.filterCont}>
      <div className={Style.filterItem}>
        <SelectCategory change={handleChangeCategory}/>
      </div>
      <div className={Style.filterItem}>
        <Order change={handleChangeOrder}/>
      </div>
      <div className={Style.filterItem}>
        <Type change={handleChangeType}/>
      </div>
      <div className={Style.filterItem}>
        <RangePrice changeMax={handleMaxPrice} changeMin={handleMinPrice}/>
      </div>
      <div className={Style.filterItem}>
        <ClearButton/>
      </div>
    </div>
  )
  
}

export default FilterAdmin