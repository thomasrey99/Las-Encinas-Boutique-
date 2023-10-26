import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../libs/redux/services/productsApi';
import { Spin, Space, Alert, Card, Col, Row, Rate, Button } from 'antd';
const { Meta } = Card;
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from './detail.module.css';

const Detail = () => {

    const { id } = useParams();
    const { data: productDetail, isError, isLoading } = useGetProductByIdQuery();
    console.log(productDetail);

    const product = {
        id: id,
        name: 'Chocolate blanco',
        price: '2,50',
        image: 'https://www.eltiempo.com/uploads/2023/03/13/640fb61bb084a.jpeg',
        description: 'El mejor chocolate de Argentina',
        rating: 4,
        category: 'Chocolate Artesanal'
    }

    return(
        <Space className={styles.detailContainer}>
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
            <Card>
                <Row>
                    <Col span={16} className={styles.span}>
                        <img alt={product.name} src={product.image} className={styles.image} />
                    </Col>
                    <Col span={8} className={styles.span2}>
                        <h1>{product.name}</h1> <br /> <br />
                        <h2>${product.price}</h2> <br />
                        <Rate defaultValue={product.rating}/> <br /> <br />
                        <p>{product.category}</p> <br /> <br /> <br /> <br />
                        <Button type="default" block><ShoppingCartOutlined size="large"/></Button> <br /> <br />
                        <Button type="primary" block className={styles.buttonComprar}>Comprar</Button>
                    </Col>
                    <Col span={24}>
                        <Card >
                            {product.description}
                            <Meta description={<p>id: {product.id}</p>} />
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Space>
    );
};

export default Detail;