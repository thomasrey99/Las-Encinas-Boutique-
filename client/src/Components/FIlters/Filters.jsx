import style from "./Filters.module.css"
import ClearButton from "./clearButton/ClearButton";
import SelectCategory from "./selectCategory/selectCategory";
import Order from "./selectOrder/Order";
import Type from "./selectType/Type";
import { addFilter } from "../../libs/redux/features/filterSelice";
import { useSelector, useDispatch} from "react-redux";


const Filters = () => {

  const dispatch=useDispatch()
  
  const filters=useSelector((state)=>state.filters)

  const handleChangeCategory=(event)=>{
    dispatch(addFilter({
      name:"category",
      value:event
    }))
  }
  const handleChangeOrder=(event)=>{
    dispatch(addFilter({
      name:"order",
      value:event
    }))
  }

  console.log(filters)

  return (
        <div className={style.filterCont}>
          <SelectCategory change={handleChangeCategory}/>
          <Order change={handleChangeOrder}/>
          <Type/>
          <ClearButton/>
        </div>
  )
}

export default Filters