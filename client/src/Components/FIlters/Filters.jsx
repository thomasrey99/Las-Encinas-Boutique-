import style from "./Filters.module.css"
import ClearButton from "./clearButton/ClearButton";
import SelectCategory from "./selectCategory/selectCategory";
import Order from "./selectOrder/Order";
import Type from "./selectType/Type";
import RangePrice from "./rangePrice/rangePrice";
import { addFilter } from "../../libs/redux/features/filterSelice";
import { useSelector, useDispatch} from "react-redux";
import { Row, Col } from 'antd';


const Filters = () => {

  const dispatch=useDispatch()
  
  const filters=useSelector((state)=>state.filters)

  const handleChangeCategory=(value)=>{
    dispatch(addFilter({
      name:"category",
      value:value
    }))
  }
  const handleChangeOrder=(value)=>{
    dispatch(addFilter({
      name:"order",
      value:value
    }))
  }
  const handleChangeType=(value)=>{
    dispatch(addFilter({
      name:"type",
      value:value
    }))
  }

  const handleMinPrice=(value)=>{
    if(value!==null){
      dispatch(addFilter({
        name:"minPrice",
        value:value
      }))
    }else{
      dispatch(addFilter({
        name:"minPrice",
        value:""
      }))
    }
  }

  const handleMaxPrice=(value)=>{
    if(value!==null){
      dispatch(addFilter({
        name:"maxPrice",
        value:value
      }))
    }else{
      dispatch(addFilter({
        name:"maxPrice",
        value:""
      }))
    }
  }
  // console.log(filters)
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 12,
      },
      sm: {
        span: 8,
      },
    },
    wapperCol: {
      xs: {
        span: 4,
      },
      sm: {
        span: 20,
      },
    },
  };
  return (
        <div className={style.filterCont}>
          
            <Row gutter={[20, 20]}>
              <Col   ><SelectCategory change={handleChangeCategory}/></Col>
              <Col   ><Order change={handleChangeOrder}/></Col>
              <Col   ><Type change={handleChangeType}/></Col>
              <Col   ><RangePrice changeMax={handleMaxPrice} changeMin={handleMinPrice}/></Col>
              <Col   ><ClearButton/></Col>
            </Row>
        </div>
  )
}

export default Filters