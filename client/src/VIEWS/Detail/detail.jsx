import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetFavProductQuery, useAddFavProductMutation, useRemoveFavProductMutation } from '../../libs/redux/services/favoritesApi';
import { useGetProductByIdQuery } from '../../libs/redux/services/productsApi';
import { Spin, Alert, Card, Col, Row, Rate, Button, Tabs, Modal} from 'antd';
const { Meta } = Card;
const { Item } = Tabs;
const { TabPane } = Tabs;
import { ShoppingCartOutlined, HeartOutlined, HeartFilled, ArrowLeftOutlined } from '@ant-design/icons';
import styles from './detail.module.css';

const Detail = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const  productId  = id;
    const userId = '19b6dfcf-095c-432e-af5a-95b74b037414';
    const [ addFavProduct ] = useAddFavProductMutation();
    const [ removeFavProduct ] = useRemoveFavProductMutation();
    const { data: productDetail, isError, isLoading } = useGetProductByIdQuery(id);
    const { data: productFav, refetch } = useGetFavProductQuery({userId, productId});
    const [ isModalVisible, setIsModalVisible ] = useState(false);


    const handlefavClick = async () => {

        if (productFav) {
          await removeFavProduct({userId, productId});
        } else {
          await addFavProduct({userId, productId});
        }
        refetch(); 
      }


    const showModal = () => setIsModalVisible(true);

    const handleOk = () => navigate('/shopping')

    const handleCancel = () => setIsModalVisible(false);
console.log(productDetail);
    return(
        <div className={styles.detailContainer}>
            { isLoading ? <Spin tip="Cargando" className={styles.loading}><div className="content"/></Spin> 

                : productDetail !== undefined ?
                <div>
                        <Card>    
                            <Row>
                    
                                <Col span={15} className={styles.span}>
                                    <ArrowLeftOutlined className = {styles.back} onClick={()=>navigate(-1)}/>
                                    <img alt={productDetail.name} src={productDetail.image} className={styles.image} />
                                </Col>
                                <Col span={9}>
                                    <div className={styles.productInfo}>
                                        {!productFav ? <HeartOutlined size="large" className={styles.noLikedButton} onClick={handlefavClick}/>
                                        : <HeartFilled size="large" className={styles.likedButton} onClick={handlefavClick} />}
                                        <h1>{productDetail.name}</h1> 
                                        <h2>${productDetail.price}</h2> 
                                        <Rate disabled value={productDetail.raiting}/> 
                                        <Rate disabled value={productDetail.raiting}/> 
                                        <p>{productDetail.category}</p> 
                                        <Meta description={<p>id: {productDetail.id_product}</p>}/> <br /> 
                                        <div className={styles.productButtons}>
                                            <Button type="default" block><ShoppingCartOutlined size="large"/></Button> 
                                            <Button type="primary" block className={styles.buttonComprar} onClick={showModal}>Comprar</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <Card >
                                    <Tabs defaultActiveKey="1">
                                            <TabPane tab="Descripción" key="1">
                                                <div style={{ maxHeight: '50%', overflow: 'auto', textAlign: 'center' }}>
                                                    <p>{productDetail.description}</p>
                                                </div>
                                            </TabPane>
                                            <TabPane tab="Comentarios" key="2">
                                                <div style={{ maxHeight: '50%', overflow: 'auto', textAlign: 'center' }}>
                                                    
                                                    <p>No hay comentarios disponibles</p>
                                                    
                                                </div>
                                            </TabPane>
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