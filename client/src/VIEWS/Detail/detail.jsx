import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../libs/redux/services/productsApi';
import { Spin, Space, Alert, Card, Col, Row, Rate, Button, Anchor, Tabs } from 'antd';
const { Meta } = Card;
const { TabPane } = Tabs;
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import styles from './detail.module.css';
import { useState } from 'react';

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
        <div className={styles.detailContainer}>
            { isLoading&&       
                <Spin tip="Cargando" size="large">
                    <div className="content" />
                </Spin> 
            }
            {/* { isError&&     
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
                    <Col span={8}>
                        <div className={styles.productInfo}>
                            <HeartOutlined size="large" className={styles.likeButton}/>
                            <h1>{product.name}</h1> 
                            <h2>${product.price}</h2> 
                            <Rate defaultValue={product.rating}/> 
                            <p>{product.category}</p> 
                            <Meta description={<p>id: {product.id}</p>}/> <br /> 
                            <div className={styles.productButtons}>
                                <Button type="default" block><ShoppingCartOutlined size="large"/></Button> 
                                <Button type="primary" block className={styles.buttonComprar}>Comprar</Button>
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Card >
                        <Tabs defaultActiveKey="1">
                                <TabPane tab="Descripción" key="1">
                                    <div style={{ maxHeight: '400px', overflow: 'auto', textAlign: 'center' }}>
                                        <p>{product.description}</p>
                                    </div>
                                </TabPane>
                                <TabPane tab="Comentarios" key="2">
                                    <div style={{ maxHeight: '400px', overflow: 'auto', textAlign: 'center' }}>
                                        <p>No hay comentarios disponibles</p>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Detail;