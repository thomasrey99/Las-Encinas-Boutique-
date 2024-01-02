import { Select, Space } from "antd";
import style from "../Filters.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Order = ({ change, width }) => {
  
  const { t } = useTranslation("global");

  const orderSelected=useSelector((state)=>state.filters.order)

  const order = [
    {
      label: "a-z",
      value: "name_asc",
    },
    {
      label: "z-a",
      value: "name_desc",
    },
    {
      label: t("order.Highest-price"),
      value: "price_desc",
    },
    {
      label: t("order.Lowest-price"),
      value: "price_asc",
    },
  ];

  return (
    <Space wrap className={style.selectCont}>
      <label htmlFor="order">{t("filters.Order")}</label>

      <Select className={style.lengthInput}
        onChange={change}
        name="order"
        value={orderSelected}
        style={{
          width: width,
        }}
        options={order}
      />
    </Space>
  );
};

export default Order;
