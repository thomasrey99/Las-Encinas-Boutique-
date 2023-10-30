import { Select, Space } from 'antd';
import style from "../Filters.module.css"
const types=[
    "Todos",
    "Chocolate blanco",
    "Chocolate con leche",
    "Chocolate semi- amargo",
    
]

const Type = () => {

  const handleProvinceChange = (value) => {


  };
  return (
    <Space wrap className={style.selectCont}>
        <label htmlFor='type'>Tipo de Chocolate</label>
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