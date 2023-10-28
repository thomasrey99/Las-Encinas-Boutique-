import { Select, Space } from 'antd';
import style from "../Filters.module.css"
const order=[
    {
        label:"a-z",
        value:"name_asc"
    },
    {
        label:"z-a",
        value:"name_desc"
    },
    {
        label:"menor precio",
        value:"price_asc"
    },
    {
        label:"mayor precio",
        value:"price_desc"
    }
]

const Order = () => {
    
    const handleProvinceChange = (value) => {


    };
    return (
      <Space wrap className={style.selectCont}>
        <label htmlFor='order'>Ordenar</label>
        <Select
          name="order"
          defaultValue={"a-z"}
          style={{
            width: "15vw",
          }}
          onChange={handleProvinceChange}
          options={order.map((o) => ({
            label: o.label,
            value: o.value
          }))}
        />
      </Space>
    );
}

export default Order