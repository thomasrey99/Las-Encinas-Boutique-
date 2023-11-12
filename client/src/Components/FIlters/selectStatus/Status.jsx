import { Select, Space } from 'antd';
import style from "../Filters.module.css";
import { useSelector } from "react-redux";
const Status = () => {

    

    const products = useSelector((state) => state.items.allProducts)
    console.log(products)

    return (
        <Space wrap className={style.selectCont}>
            <label htmlFor='status'>Estado del producto</label>
            <Select
                name="status"
                defaultValue={"Todos"}
                style={{
                    width: "15vw",
                }}
                options={[
                    {
                        value: 'Todos',
                        label: 'Todos',
                    },
                    {
                        value: true,
                        label: 'No disponible',
                    },
                    {
                        value: false,
                        label: 'Disponible',
                    }]}
            />
        </Space>
    )
}

export default Status;