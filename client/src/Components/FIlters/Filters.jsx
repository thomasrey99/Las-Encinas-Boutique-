import style from "./Filters.module.css"
import ApplyButton from "./applyButton/ApplyButton";
import ClearButton from "./clearButton/ClearButton";
import SelectCategory from "./selectCategory/selectCategory";
import Order from "./selectOrder/Order";
import Type from "./selectType/Type";

const Filters = () => {
  return (
        <div className={style.filterCont}>
          <SelectCategory/>
          <Order/>
          <Type/>
          <ApplyButton/>
          <ClearButton/>
        </div>
  )
}

export default Filters