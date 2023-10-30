
import { Select, Space } from 'antd';
import style from "../Filters.module.css"
const SelectCategory = ({change}) => {

    const categories = [
        "Todas",
        "Alfajores",
        "Chocolate en rama",
        "Bocaditos",
        "Chocolate en barra", 
        "Volcáncito",
        "Marroc",
        "Huevos de pascua",
        "Oreo",
        "Brownie"
    ];

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
            label: category,
            value: category==="Todas"?"":category,
          }))}
        />
      </Space>
  )
}
export default SelectCategory