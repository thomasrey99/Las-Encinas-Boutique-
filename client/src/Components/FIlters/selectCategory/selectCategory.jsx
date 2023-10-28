
import { Select, Space } from 'antd';
import style from "../Filters.module.css"
const SelectCategory = () => {

    const categories = [
        "todas",
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

    const handleProvinceChange = (value) => {
      console.log(value)
    };
    return (
      <Space wrap className={style.selectCont}>
        <label htmlFor='category'>categorias</label>
        <Select
          name="category"
          defaultValue={"Todas"}
          style={{
            width: "15vw",
          }}
          onChange={handleProvinceChange}
          options={categories.map((category) => ({
            label: category,
            value: category==="Todas"?"":category,
          }))}
        />
      </Space>
  )
}
export default SelectCategory