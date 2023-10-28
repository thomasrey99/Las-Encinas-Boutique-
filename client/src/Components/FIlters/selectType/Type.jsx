import { Select, Space } from 'antd';
import style from "../Filters.module.css"
const types=[
    "Todos",
    "chocolate blanco",
    "chocolate con leche",
    "Chocolate semi- amargo",
    
]

const Type = () => {

  const handleProvinceChange = (value) => {


  };
  return (
    <Space wrap className={style.selectCont}>
        <label htmlFor='type'>tipo de chocolate</label>
        <Select
          name="type"
          defaultValue={"Todos"}
          style={{
            width: "15vw",
          }}
          onChange={handleProvinceChange}
          options={types.map((type) => ({
            label: type,
            value: type==="Todos"?"":type
          }))}
        />
      </Space>
  )
}
export default Type