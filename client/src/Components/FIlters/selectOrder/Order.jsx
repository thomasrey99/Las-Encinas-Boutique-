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
      label:"Mayor precio",
      value:"price_desc"
    },
    {
      label:"Menor precio",
      value:"price_asc"
    }
]

const Order = ({change}) => {
    

    return (
      <Space wrap className={style.selectCont}>
        <label htmlFor='order'>Ordenar</label>
        <Select
          onChange={change}
          name="order"
          defaultValue={"a-z"}
          style={{
            width: "15vw",
          }}
          
          options={order.map((o) => ({
            label: o.label,
            value: o.value
          }))}
        />
      </Space>
    );
}

export default Order