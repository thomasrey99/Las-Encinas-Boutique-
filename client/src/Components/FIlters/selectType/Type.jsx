import { Select, Space } from 'antd';
import style from "../Filters.module.css"
import { useGetAllTypesQuery } from '../../../libs/redux/services/typesApi';
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from 'react';
import { addTypes } from '../../../libs/redux/features/typesSlice';

const Type = ({change}) => {

  const dispatch=useDispatch()

  const types=useSelector((state)=>state.types.allTypes)

  const {data}=useGetAllTypesQuery()

  useEffect(()=>{
    if(data && data.length>0){
      dispatch(addTypes(data))
    }
  }, [data])

  return (
    <Space wrap className={style.selectCont}>
        <label htmlFor='type'>Tipo de Chocolate</label>
        <Select
          name="type"
          defaultValue={"Todos"}
          style={{
            width: "15vw",
          }}
          onChange={change}
          options={types?.map((type) => ({
            label: type.name,
            value: type.name==="Todos"?"":type.name
          }))}
        />
      </Space>
  )
}
export default Type