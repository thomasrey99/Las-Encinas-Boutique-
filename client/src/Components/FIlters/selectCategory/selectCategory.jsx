import { Select, Space } from 'antd';
import style from "../Filters.module.css"
import { useSelector, useDispatch} from "react-redux";
import { useGetAllCategoriesQuery } from "../../../libs/redux/services/categoriesApi";
import { addCategories } from "../../../libs/redux/features/categoriesSlice";
import { useEffect } from 'react';

const SelectCategory = ({change}) => {
  
  const dispatch=useDispatch()

  const categories=useSelector((state)=>state.categories.allCategories)

  const {data}=useGetAllCategoriesQuery()

  useEffect(()=>{
    if(data && data.length>0){
      dispatch(addCategories(data))
    }
  }, [data])

    return (
      <Space wrap className={style.selectCont}>
        <label htmlFor='category'>Categorias</label>
        <Select
          onChange={change}
          name="category"
          defaultValue={"Todas"}
          style={{
            width: "15vw",
          }}
          options={categories.map((category) => ({
            label: category.name,
            value: category.name==="Todas"?"":category.name,
          }))}
          
        />
      </Space>
  )
}
export default SelectCategory