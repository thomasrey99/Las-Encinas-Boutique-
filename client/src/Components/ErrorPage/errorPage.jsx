import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom'; 

const ErrorPage = () => {
    const navigate = useNavigate();
    return(
        <Result
        status="404"
        title="404"
        subTitle="Lo siento, la página que visitaste no existe."
        extra={<Button type="primary" onClick={()=> navigate('/home')}>Volver al inicio</Button>}
      />
    )
}

export default ErrorPage;