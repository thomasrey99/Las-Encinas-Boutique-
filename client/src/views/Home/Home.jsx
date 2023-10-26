// import { Cards } from '../../Components/cards/Cards.jsx';
import { useGetAllProductsQuery } from '../../libs//redux/services/productsApi.js';
import { Spin, Space, Alert, Carousel } from 'antd';

const Home = () =>{

    const { data: products, isError, isLoading } = useGetAllProductsQuery();
    console.log(products);

    return(
        <Space>
            {/* { isLoading&&       
                <Spin tip="Cargando" size="large">
                    <div className="content" />
                </Spin> 
            }
            { isError&&     
                <Alert
                message="Error"
                description="Por favor, intente de nuevo más tarde."
                type="error"
                showIcon
                />
            } */}
            
            {/* <Cards products = {products}/> */}
        </Space>
    );
}

export default Home;