import { Select, Space } from 'antd';
import style from "../Filters.module.css"
import { useTranslation } from 'react-i18next';
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

const Order = ({change, width}) => {
  const { t } = useTranslation("global");
    

    return (
      <Space wrap className={style.selectCont}>
        <label htmlFor='order'>{t("filters.Order")}</label>
        <Select
          onChange={change}
          name="order"
          defaultValue={"a-z"}
          style={{
            width: width,
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