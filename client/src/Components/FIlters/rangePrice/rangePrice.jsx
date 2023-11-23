import { InputNumber, Space } from 'antd';
import style from "../Filters.module.css"
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export const RangePrice = ({changeMin, changeMax}) => {

    const minPriceSelected=useSelector((state)=>state.filters.minPrice)

    const maxPriceSelected=useSelector((state)=>state.filters.maxPrice)

    const { t } = useTranslation("global");

  return (
        <Space name="range price">
            <div className={style.selectCont}>
                <label htmlFor='min'>{t("filters.Minimum")}</label>
                <InputNumber
                name='min'
                value={minPriceSelected}
                min={0}
                max={1000000}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                onChange={changeMin}
                />
            </div>
            <div className={style.selectCont}>
                <label htmlFor='max'>{t("filters.Maximum")}</label>
                <InputNumber
                name='max'
                value={maxPriceSelected}
                min={0}
                max={1000000}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                onChange={changeMax}
                />
            </div>
        </Space>

  )
}
export default RangePrice
