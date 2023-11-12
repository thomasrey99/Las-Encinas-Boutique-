import style from "./FilterAdmin.module.css"
import ClearButton from "../../../../Components/FIlters/clearButton/ClearButton";
import SelectCategory from "../../../../Components/FIlters/selectCategory/selectCategory";
import Type from "../../../../Components/FIlters/selectType/Type";
import SearchBarProducts from "../SearchBarProducts/SearchBarProducts";
import Status from "../../../../Components/FIlters/selectStatus/Status"

import { addFilter, statusFilter } from "../../../../libs/redux/features/filterSelice";

import { useDispatch } from "react-redux";

const FilterAdmin = () => {

  const dispatch = useDispatch()

  const handleChangeCategory = (value) => {
    dispatch(addFilter({
      name: "category",
      value: value
    }))
  }

  const handleChangeType = (value) => {
    dispatch(addFilter({
      name: "type",
      value: value
    }))
  }

  const handleChangeStatus = (value) => {
    if (value === 'Todos') {
      dispatch(statusFilter())
    } else {
      dispatch(addFilter({
        name: "status",
        value: value
      }))
    }
  }

  return (
    <div className={style.filterCont}>
      <div className={style.filterItem}>
        <SearchBarProducts />
      </div>
      <div className={style.filterItem}>
        <SelectCategory change={handleChangeCategory} />
      </div>
      <div className={style.filterItem}>
        <Type change={handleChangeType} />
      </div>
      <div className={style.filterItem}>
        <Status change={handleChangeStatus} />
      </div>
      <div className={style.filterItem}>
        <ClearButton />
      </div>
    </div>
  )

}

export default FilterAdmin