
import { Button} from 'antd';
import { clearFilter } from '../../../libs/redux/features/filterSelice';
import { useDispatch, useSelector } from 'react-redux';

const ClearButton = () => {
  const filters=useSelector((state)=>state.filters)
  const dispatch=useDispatch()
  const clearAction=()=>{
    dispatch(clearFilter())

  }
  console.log("filtros desde el clear button", filters)
  return (
    <Button type="primary" onClick={clearAction} style={{color: '#FC8E28', borderColor: '#FC8E28'}} ghost>
      Limpiar
    </Button>
  )
}
export default ClearButton