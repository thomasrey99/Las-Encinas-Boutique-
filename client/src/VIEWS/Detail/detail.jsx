import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../libs/redux/services/productsApi';
import { Spin, Alert, Card, Col, Row, Rate, Button, Tabs, Modal} from 'antd';
const { Meta } = Card;
const { Item } = Tabs;
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, ArrowLeftOutlined } from '@ant-design/icons';
import styles from './detail.module.css';

const Detail = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const { data: productDetail, isLoading, isError } = useGetProductByIdQuery(id)

    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [ isFav, setIsFav ] = useState(false);

    const handleFav = () => setIsFav(!isFav)

    const showModal = () => setIsModalVisible(true);

    const handleOk = () => navigate('/shopping')

    const handleCancel = () => setIsModalVisible(false);

    return(
        <div className={styles.detailContainer}>
            { isLoading ? <Spin tip="Cargando" className={styles.loading}><div className="content"/></Spin> 

                : productDetail !== undefined ?
                <div>
                        <Card>    
                            <Row>
                    
                                <Col span={16} className={styles.span}>
                                    <ArrowLeftOutlined className = {styles.back} onClick={()=>navigate('/home')}/>
                                    <img alt={productDetail.name} src={productDetail.image} className={styles.image} />
                                </Col>
                                <Col span={8}>
                                    <div className={styles.productInfo}>
                                        {!isFav ? <HeartOutlined size="large" className={styles.noLikedButton} onClick={handleFav}/>
                                        : <HeartFilled size="large" className={styles.likedButton} onClick={handleFav} />}
                                        <h1>{productDetail.name}</h1> 
                                        <h2>${productDetail.price}</h2> 
                                        <Rate value={productDetail.raiting}/> 
                                        <p>{productDetail.category}</p> 
                                        <Meta description={<p>id: {productDetail.id}</p>}/> <br /> 
                                        <div className={styles.productButtons}>
                                            <Button type="default" block><ShoppingCartOutlined size="large"/></Button> 
                                            <Button type="primary" block className={styles.buttonComprar} onClick={showModal}>Comprar</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <Card >
                                    <Tabs defaultActiveKey="1">
                                            <Item tab="Descripción" key="1">
                                                <div style={{ maxHeight: '50%', overflow: 'auto', textAlign: 'center' }}>
                                                    <p>{productDetail.description}</p>
                                                </div>
                                            </Item>
                                            <Item tab="Comentarios" key="2">
                                                <div style={{ maxHeight: '50%', overflow: 'auto', textAlign: 'center' }}>
                                                    
                                                    <p>No hay comentarios disponibles</p>
                                                    
                                                </div>
                                            </Item>
                                        </Tabs>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                            <Modal title="Confirmar compra" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>¿Estás seguro de que quieres comprar este producto?</p>
                            </Modal>
                        </div>
                        : isError &&
                        <Alert message="Error" description="Por favor, intente de nuevo más tarde." type="error" showIcon className={styles}/>
            }
        </div>
    );
};

export default Detail;